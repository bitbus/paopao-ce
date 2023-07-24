// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: core/v1/auth.proto

package corev1connect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/rocboss/paopao-ce/auto/connect/core/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// AuthenticateName is the fully-qualified name of the Authenticate service.
	AuthenticateName = "core.v1.Authenticate"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// AuthenticatePreLoginProcedure is the fully-qualified name of the Authenticate's preLogin RPC.
	AuthenticatePreLoginProcedure = "/core.v1.Authenticate/preLogin"
	// AuthenticateLoginProcedure is the fully-qualified name of the Authenticate's login RPC.
	AuthenticateLoginProcedure = "/core.v1.Authenticate/login"
	// AuthenticateLogoutProcedure is the fully-qualified name of the Authenticate's logout RPC.
	AuthenticateLogoutProcedure = "/core.v1.Authenticate/logout"
)

// AuthenticateClient is a client for the core.v1.Authenticate service.
type AuthenticateClient interface {
	PreLogin(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error)
	Login(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.LoginReply], error)
	Logout(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error)
}

// NewAuthenticateClient constructs a client for the core.v1.Authenticate service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewAuthenticateClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) AuthenticateClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &authenticateClient{
		preLogin: connect_go.NewClient[v1.User, v1.ActionReply](
			httpClient,
			baseURL+AuthenticatePreLoginProcedure,
			opts...,
		),
		login: connect_go.NewClient[v1.User, v1.LoginReply](
			httpClient,
			baseURL+AuthenticateLoginProcedure,
			opts...,
		),
		logout: connect_go.NewClient[v1.User, v1.ActionReply](
			httpClient,
			baseURL+AuthenticateLogoutProcedure,
			opts...,
		),
	}
}

// authenticateClient implements AuthenticateClient.
type authenticateClient struct {
	preLogin *connect_go.Client[v1.User, v1.ActionReply]
	login    *connect_go.Client[v1.User, v1.LoginReply]
	logout   *connect_go.Client[v1.User, v1.ActionReply]
}

// PreLogin calls core.v1.Authenticate.preLogin.
func (c *authenticateClient) PreLogin(ctx context.Context, req *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error) {
	return c.preLogin.CallUnary(ctx, req)
}

// Login calls core.v1.Authenticate.login.
func (c *authenticateClient) Login(ctx context.Context, req *connect_go.Request[v1.User]) (*connect_go.Response[v1.LoginReply], error) {
	return c.login.CallUnary(ctx, req)
}

// Logout calls core.v1.Authenticate.logout.
func (c *authenticateClient) Logout(ctx context.Context, req *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error) {
	return c.logout.CallUnary(ctx, req)
}

// AuthenticateHandler is an implementation of the core.v1.Authenticate service.
type AuthenticateHandler interface {
	PreLogin(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error)
	Login(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.LoginReply], error)
	Logout(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error)
}

// NewAuthenticateHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewAuthenticateHandler(svc AuthenticateHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	authenticatePreLoginHandler := connect_go.NewUnaryHandler(
		AuthenticatePreLoginProcedure,
		svc.PreLogin,
		opts...,
	)
	authenticateLoginHandler := connect_go.NewUnaryHandler(
		AuthenticateLoginProcedure,
		svc.Login,
		opts...,
	)
	authenticateLogoutHandler := connect_go.NewUnaryHandler(
		AuthenticateLogoutProcedure,
		svc.Logout,
		opts...,
	)
	return "/core.v1.Authenticate/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case AuthenticatePreLoginProcedure:
			authenticatePreLoginHandler.ServeHTTP(w, r)
		case AuthenticateLoginProcedure:
			authenticateLoginHandler.ServeHTTP(w, r)
		case AuthenticateLogoutProcedure:
			authenticateLogoutHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedAuthenticateHandler returns CodeUnimplemented from all methods.
type UnimplementedAuthenticateHandler struct{}

func (UnimplementedAuthenticateHandler) PreLogin(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("core.v1.Authenticate.preLogin is not implemented"))
}

func (UnimplementedAuthenticateHandler) Login(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.LoginReply], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("core.v1.Authenticate.login is not implemented"))
}

func (UnimplementedAuthenticateHandler) Logout(context.Context, *connect_go.Request[v1.User]) (*connect_go.Response[v1.ActionReply], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("core.v1.Authenticate.logout is not implemented"))
}