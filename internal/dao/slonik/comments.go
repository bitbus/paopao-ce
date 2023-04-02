// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package slonik

import (
	"github.com/jackc/pgx/v5"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/pkg/debug"
)

var (
	_ core.CommentService       = (*commentSrv)(nil)
	_ core.CommentManageService = (*commentManageSrv)(nil)
)

type commentSrv struct {
	*pgxSrv
}

type commentManageSrv struct {
	*pgxSrv
}

func (s *commentSrv) GetComments(conditions *core.ConditionsT, offset, limit int) ([]*core.Comment, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentSrv) GetCommentByID(id int64) (*core.Comment, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentSrv) GetCommentReplyByID(id int64) (*core.CommentReply, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentSrv) GetCommentCount(conditions *core.ConditionsT) (int64, error) {
	// TODO
	debug.NotImplemented()
	return 0, nil
}

func (s *commentSrv) GetCommentContentsByIDs(ids []int64) ([]*core.CommentContent, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentSrv) GetCommentRepliesByID(ids []int64) ([]*core.CommentReplyFormated, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentManageSrv) DeleteComment(comment *core.Comment) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *commentManageSrv) CreateComment(comment *core.Comment) (*core.Comment, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentManageSrv) CreateCommentReply(reply *core.CommentReply) (*core.CommentReply, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *commentManageSrv) DeleteCommentReply(reply *core.CommentReply) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *commentManageSrv) CreateCommentContent(content *core.CommentContent) (*core.CommentContent, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func newCommentService(db *pgx.Conn) core.CommentService {
	return &commentSrv{
		pgxSrv: newPgxSrv(db),
	}
}

func newCommentManageService(db *pgx.Conn) core.CommentManageService {
	return &commentManageSrv{
		pgxSrv: newPgxSrv(db),
	}
}
