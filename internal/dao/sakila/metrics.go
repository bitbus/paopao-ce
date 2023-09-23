// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package sakila

import (
	"time"

	"github.com/bitbus/sqlx"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/internal/core/cs"
	"github.com/rocboss/paopao-ce/internal/dao/sakila/auto/cc"
)

type tweetMetricSrvA struct {
	*sqlxSrv
	q *cc.TweetMetrics
}

type commentMetricSrvA struct {
	*sqlxSrv
}

type userMetricSrvA struct {
	*sqlxSrv
}

func (s *tweetMetricSrvA) UpdateTweetMetric(metric *cs.TweetMetric) error {
	return s.db.Withx(func(tx *sqlx.Tx) error {
		var motivationFactor int
		tx.Stmtx(s.q.GetMotivationFactor).Get(&motivationFactor, metric.PostId)
		_, err := tx.Stmtx(s.q.UpdateRankScore).Exec(metric.RankScore(motivationFactor), time.Now().Unix(), metric.PostId)
		return err
	})
}

func (s *tweetMetricSrvA) AddTweetMetric(postId int64) error {
	_, err := s.q.AddTweetMetric.Exec(postId, time.Now().Unix())
	return err
}

func (s *tweetMetricSrvA) DeleteTweetMetric(postId int64) error {
	_, err := s.q.DeleteTweetMetric.Exec(time.Now().Unix(), postId)
	return err
}

func (s *commentMetricSrvA) UpdateCommentMetric(metric *cs.CommentMetric) error {
	// TDOO
	return cs.ErrNotImplemented
}

func (s *commentMetricSrvA) AddCommentMetric(commentId int64) (err error) {
	// TDOO
	return cs.ErrNotImplemented
}

func (s *commentMetricSrvA) DeleteCommentMetric(commentId int64) (err error) {
	// TDOO
	return cs.ErrNotImplemented
}

func (s *userMetricSrvA) UpdateUserMetric(userId int64, action uint8) error {
	// TODO
	return cs.ErrNotImplemented
}

func (s *userMetricSrvA) AddUserMetric(userId int64) (err error) {
	// TDOO
	return cs.ErrNotImplemented
}

func (s *userMetricSrvA) DeleteUserMetric(userId int64) (err error) {
	// TDOO
	return cs.ErrNotImplemented
}

func newTweetMetricServentA(db *sqlx.DB) core.TweetMetricServantA {
	return &tweetMetricSrvA{
		sqlxSrv: newSqlxSrv(db),
		q:       ccBuild(db, cc.BuildTweetMetrics),
	}
}

func newCommentMetricServentA(db *sqlx.DB) core.CommentMetricServantA {
	return &commentMetricSrvA{
		sqlxSrv: newSqlxSrv(db),
	}
}

func newUserMetricServentA(db *sqlx.DB) core.UserMetricServantA {
	return &userMetricSrvA{
		sqlxSrv: newSqlxSrv(db),
	}
}
