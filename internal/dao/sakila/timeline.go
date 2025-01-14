// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package sakila

import (
	"github.com/bitbus/sqlx"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/internal/core/ms"
	"github.com/rocboss/paopao-ce/internal/dao/sakila/auto/cc"
	"github.com/sirupsen/logrus"
)

var (
	_ core.IndexPostsService = (*shipIndexSrv)(nil)
	_ core.IndexPostsService = (*simpleIndexPostsSrv)(nil)
)

type shipIndexSrv struct {
	*sqlxSrv
	ams core.AuthorizationManageService
	ths core.TweetHelpService
	q   *cc.ShipIndex
}

type simpleIndexPostsSrv struct {
	*sqlxSrv
	ths core.TweetHelpService
	q   *cc.SimpleIndex
}

// IndexPosts 根据userId查询广场推文列表，简单做到不同用户的主页都是不同的；
func (s *shipIndexSrv) IndexPosts(user *ms.User, offset int, limit int) (res *ms.IndexTweetList, err error) {
	var posts []*ms.Post
	res = &ms.IndexTweetList{}
	switch {
	case user == nil:
		if err = s.q.IndexByGuest.Select(&posts, limit, offset); err == nil {
			err = s.q.IndexCountByGuest.Get(&res.Total)
		}
	case user != nil && user.IsAdmin:
		if err = s.q.IndexByAdmin.Select(&posts, limit, offset); err == nil {
			err = s.q.IndexCountByAdmin.Get(&res.Total)
		}
	default:
		friendIds, _ := s.ams.BeFriendIds(user.ID)
		friendIds = append(friendIds, user.ID)
		err = s.db.InSelect(&posts, s.q.IndexBySelf, user.ID, friendIds, limit, offset)
		if err == nil {
			err = s.db.InGet(&res.Total, s.q.IndexCountBySelf, user.ID, friendIds)
		}
	}
	if err != nil {
		logrus.Debugf("shipIndex.IndexPosts err: %s", err)
		return
	}
	if res.Tweets, err = s.ths.MergePosts(posts); err != nil {
		logrus.Debugf("shipIndex.IndexPosts merge posts err: %s", err)
		return
	}
	return
}

// simpleCacheIndexGetPosts simpleCacheIndex 专属获取广场推文列表函数
func (s *simpleIndexPostsSrv) IndexPosts(_user *ms.User, offset int, limit int) (res *ms.IndexTweetList, err error) {
	var posts []*ms.Post
	res = &ms.IndexTweetList{}
	if err = s.q.Index.Select(&posts, limit, offset); err == nil {
		err = s.q.IndexCount.Get(&res.Total)
	}
	if err != nil {
		logrus.Debugf("simpleIndexPostsSrv.IndexPosts err: %s", err)
		return
	}
	if res.Tweets, err = s.ths.MergePosts(posts); err != nil {
		logrus.Debugf("shipIndex.IndexPosts merge posts err: %s", err)
		return
	}
	return
}

func newShipIndexService(db *sqlx.DB, ams core.AuthorizationManageService, ths core.TweetHelpService) core.IndexPostsService {
	return &shipIndexSrv{
		ams:     ams,
		ths:     ths,
		sqlxSrv: newSqlxSrv(db),
		q:       ccBuild(db, cc.BuildShipIndex),
	}
}

func newSimpleIndexPostsService(db *sqlx.DB, ths core.TweetHelpService) core.IndexPostsService {
	return &simpleIndexPostsSrv{
		ths:     ths,
		sqlxSrv: newSqlxSrv(db),
		q:       ccBuild(db, cc.BuildSimpleIndex),
	}
}
