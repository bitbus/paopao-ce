// Code generated by Yesql. DO NOT EDIT.
// versions:
// - Yesql v1.9.0

package yesql

import (
	"context"
	"fmt"

	"github.com/bitbus/sqlx"
)

var (
	_ = fmt.Errorf("error for placeholder")
)

const (
	_IncrTagsById   = `UPDATE @tag SET quote_num=quote_num+1, is_del=0, modified_on=? WHERE id IN (?)`
	_InsertTag      = `INSERT INTO @tag (user_id, tag, created_on, modified_on, quote_num) VALUES (?, ?, ?, ?, 1)`
	_TagsByIdB      = `SELECT id, user_id, tag, quote_num FROM @tag WHERE id IN (?)`
	_TagsForIncr    = `SELECT id, user_id, tag, quote_num FROM @tag WHERE tag IN (?)`
	_TagsFromNames  = `SELECT * FROM @tag WHERE tag IN (?) AND is_del=0`
	_UpdateTagQuote = `UPDATE @tag SET quote_num=?, modified_on=? WHERE id=? AND is_del=0`
)

// PreparexContext enhances the Conn interface with context.
type PreparexContext interface {
	// PrepareContext prepares a statement.
	// The provided context is used for the preparation of the statement, not for
	// the execution of the statement.
	PreparexContext(ctx context.Context, query string) (*sqlx.Stmt, error)

	// PrepareNamedContext returns an sqlx.NamedStmt
	PrepareNamedContext(ctx context.Context, query string) (*sqlx.NamedStmt, error)

	// Rebind rebind query to adapte SQL Driver
	Rebind(query string) string
}

// PreparexBuilder preparex builder interface for sqlx
type PreparexBuilder interface {
	PreparexContext
	QueryHook(query string) string
}

type Yesql struct {
	IncrTagsById   string     `yesql:"incr_tags_by_id"`
	TagsByIdB      string     `yesql:"tags_by_id_b"`
	TagsForIncr    string     `yesql:"tags_for_incr"`
	TagsFromNames  string     `yesql:"tags_from_names"`
	InsertTag      *sqlx.Stmt `yesql:"insert_tag"`
	UpdateTagQuote *sqlx.Stmt `yesql:"update_tag_quote"`
}

func BuildYesql(p PreparexBuilder, ctx ...context.Context) (obj *Yesql, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Yesql{
		IncrTagsById:  p.QueryHook(_IncrTagsById),
		TagsByIdB:     p.QueryHook(_TagsByIdB),
		TagsForIncr:   p.QueryHook(_TagsForIncr),
		TagsFromNames: p.QueryHook(_TagsFromNames),
	}
	if obj.InsertTag, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_InsertTag))); err != nil {
		return nil, fmt.Errorf("prepare _InsertTag error: %w", err)
	}
	if obj.UpdateTagQuote, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UpdateTagQuote))); err != nil {
		return nil, fmt.Errorf("prepare _UpdateTagQuote error: %w", err)
	}
	return
}
