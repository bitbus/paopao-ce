// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package slonik

import (
	"github.com/jackc/pgx/v5"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/internal/core/cs"
	"github.com/rocboss/paopao-ce/pkg/debug"
	"gorm.io/gorm"
)

var (
	_ core.TweetService       = (*tweetSrv)(nil)
	_ core.TweetManageService = (*tweetManageSrv)(nil)
	_ core.TweetHelpService   = (*tweetHelpSrv)(nil)
)

type tweetSrv struct {
	*pgxSrv
}

type tweetManageSrv struct {
	*pgxSrv
}

type tweetHelpSrv struct {
	*pgxSrv
}

// MergePosts post数据整合
func (s *tweetHelpSrv) MergePosts(posts []*core.Post) ([]*core.PostFormated, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

// RevampPosts post数据整形修复
func (s *tweetHelpSrv) RevampPosts(posts []*core.PostFormated) ([]*core.PostFormated, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetHelpSrv) RevampTweets(tweets cs.TweetList) (cs.TweetList, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetHelpSrv) MergeTweets(tweets cs.TweetInfo) (cs.TweetList, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetHelpSrv) getPostContentsByIDs(ids []int64) ([]*core.PostContent, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetHelpSrv) getUsersByIDs(ids []int64) ([]*core.User, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) CreatePostCollection(postID, userID int64) (*core.PostCollection, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) DeletePostCollection(p *core.PostCollection) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *tweetManageSrv) CreatePostContent(content *core.PostContent) (*core.PostContent, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) CreatePost(post *core.Post) (*core.Post, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) DeletePost(post *core.Post) ([]string, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) deleteCommentByPostId(db *gorm.DB, postId int64) ([]string, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) LockPost(post *core.Post) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *tweetManageSrv) StickPost(post *core.Post) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *tweetManageSrv) VisiblePost(post *core.Post, visibility core.PostVisibleT) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *tweetManageSrv) UpdatePost(post *core.Post) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *tweetManageSrv) CreatePostStar(postID, userID int64) (*core.PostStar, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetManageSrv) DeletePostStar(p *core.PostStar) error {
	// TODO
	debug.NotImplemented()
	return nil
}

func (s *tweetManageSrv) CreateAttachment(obj *cs.Attachment) (int64, error) {
	// TODO
	return 0, debug.ErrNotImplemented
}

func (s *tweetManageSrv) CreateTweet(userId int64, req *cs.NewTweetReq) (*cs.TweetItem, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetManageSrv) DeleteTweet(userId int64, tweetId int64) ([]string, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetManageSrv) LockTweet(userId int64, tweetId int64) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetManageSrv) StickTweet(userId int64, tweetId int64) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetManageSrv) VisibleTweet(userId int64, visibility cs.TweetVisibleType) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetManageSrv) CreateReaction(userId int64, tweetId int64) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetManageSrv) DeleteReaction(userId int64, reactionId int64) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetManageSrv) CreateFavorite(userId int64, tweetId int64) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetManageSrv) DeleteFavorite(userId int64, favoriteId int64) error {
	// TODO
	return debug.ErrNotImplemented
}

func (s *tweetSrv) GetPostByID(id int64) (*core.Post, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetPosts(conditions *core.ConditionsT, limit int, offset int) ([]*core.Post, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetPostCount(conditions *core.ConditionsT) (int64, error) {
	// TODO
	debug.NotImplemented()
	return 0, nil
}

func (s *tweetSrv) GetUserPostStar(postID, userID int64) (*core.PostStar, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetUserPostStars(userID int64, limit int, offset int) ([]*core.PostStar, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetUserPostStarCount(userID int64) (int64, error) {
	// TODO
	debug.NotImplemented()
	return 0, nil
}

func (s *tweetSrv) GetUserPostCollection(postID, userID int64) (*core.PostCollection, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetUserPostCollections(userID int64, limit int, offset int) ([]*core.PostCollection, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetUserPostCollectionCount(userID int64) (int64, error) {
	// TODO
	debug.NotImplemented()
	return 0, nil
}

func (s *tweetSrv) GetUserWalletBills(userID int64, limit int, offset int) ([]*core.WalletStatement, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetUserWalletBillCount(userID int64) (int64, error) {
	// TODO
	debug.NotImplemented()
	return 0, nil
}

func (s *tweetSrv) GetPostAttatchmentBill(postID, userID int64) (*core.PostAttachmentBill, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetPostContentsByIDs(ids []int64) ([]*core.PostContent, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) GetPostContentByID(id int64) (*core.PostContent, error) {
	// TODO
	debug.NotImplemented()
	return nil, nil
}

func (s *tweetSrv) TweetInfoById(id int64) (*cs.TweetInfo, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) TweetItemById(id int64) (*cs.TweetItem, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) UserTweets(visitorId, userId int64) (cs.TweetList, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) ReactionByTweetId(userId int64, tweetId int64) (*cs.ReactionItem, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) UserReactions(userId int64, limit int, offset int) (cs.ReactionList, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) FavoriteByTweetId(userId int64, tweetId int64) (*cs.FavoriteItem, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) UserFavorites(userId int64, limit int, offset int) (cs.FavoriteList, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func (s *tweetSrv) AttachmentByTweetId(userId int64, tweetId int64) (*cs.AttachmentBill, error) {
	// TODO
	return nil, debug.ErrNotImplemented
}

func newTweetService(db *pgx.Conn) core.TweetService {
	return &tweetSrv{
		pgxSrv: newPgxSrv(db),
	}
}

func newTweetManageService(db *pgx.Conn, cacheIndex core.CacheIndexService) core.TweetManageService {
	return &tweetManageSrv{
		pgxSrv: newPgxSrv(db),
	}
}

func newTweetHelpService(db *pgx.Conn) core.TweetHelpService {
	return &tweetHelpSrv{
		pgxSrv: newPgxSrv(db),
	}
}
