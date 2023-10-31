// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.21.0
// source: metrics.sql

package pgc

import (
	"context"
)

const addCommentMetric = `-- name: AddCommentMetric :one
INSERT INTO p_comment_metric (comment_id, created_on) 
VALUES ($1, $2)
RETURNING id
`

type AddCommentMetricParams struct {
	CommentID int64
	CreatedOn int64
}

func (q *Queries) AddCommentMetric(ctx context.Context, arg *AddCommentMetricParams) (int64, error) {
	row := q.db.QueryRow(ctx, addCommentMetric, arg.CommentID, arg.CreatedOn)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const addTweetMetric = `-- name: AddTweetMetric :one
INSERT INTO p_post_metric (post_id, created_on) 
VALUES ($1, $2)
RETURNING id
`

type AddTweetMetricParams struct {
	PostID    int64
	CreatedOn int64
}

func (q *Queries) AddTweetMetric(ctx context.Context, arg *AddTweetMetricParams) (int64, error) {
	row := q.db.QueryRow(ctx, addTweetMetric, arg.PostID, arg.CreatedOn)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const addUserMetric = `-- name: AddUserMetric :one
INSERT INTO p_user_metric (user_id, created_on) VALUES ($1, $2) RETURNING id
`

type AddUserMetricParams struct {
	UserID    int64
	CreatedOn int64
}

func (q *Queries) AddUserMetric(ctx context.Context, arg *AddUserMetricParams) (int64, error) {
	row := q.db.QueryRow(ctx, addUserMetric, arg.UserID, arg.CreatedOn)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const commentMotivationFactor = `-- name: CommentMotivationFactor :one
SELECT motivation_factor FROM p_comment_metric WHERE comment_id=$1 AND is_del=0
`

func (q *Queries) CommentMotivationFactor(ctx context.Context, commentID int64) (int32, error) {
	row := q.db.QueryRow(ctx, commentMotivationFactor, commentID)
	var motivation_factor int32
	err := row.Scan(&motivation_factor)
	return motivation_factor, err
}

const deleteCommentMetric = `-- name: DeleteCommentMetric :exec
UPDATE p_comment_metric SET is_del=1, deleted_on=$1 WHERE comment_id=$2 AND is_del=0
`

type DeleteCommentMetricParams struct {
	DeletedOn int64
	CommentID int64
}

func (q *Queries) DeleteCommentMetric(ctx context.Context, arg *DeleteCommentMetricParams) error {
	_, err := q.db.Exec(ctx, deleteCommentMetric, arg.DeletedOn, arg.CommentID)
	return err
}

const deleteTweetMetric = `-- name: DeleteTweetMetric :exec
UPDATE p_post_metric SET is_del=1, deleted_on=$1 WHERE post_id=$2 AND is_del=0
`

type DeleteTweetMetricParams struct {
	DeletedOn int64
	PostID    int64
}

func (q *Queries) DeleteTweetMetric(ctx context.Context, arg *DeleteTweetMetricParams) error {
	_, err := q.db.Exec(ctx, deleteTweetMetric, arg.DeletedOn, arg.PostID)
	return err
}

const deleteUserMetric = `-- name: DeleteUserMetric :exec
UPDATE p_user_metric SET is_del=1, deleted_on=$1 WHERE user_id=$2 AND is_del=0
`

type DeleteUserMetricParams struct {
	DeletedOn int64
	UserID    int64
}

func (q *Queries) DeleteUserMetric(ctx context.Context, arg *DeleteUserMetricParams) error {
	_, err := q.db.Exec(ctx, deleteUserMetric, arg.DeletedOn, arg.UserID)
	return err
}

const getUserTweetsCount = `-- name: GetUserTweetsCount :one
SELECT tweets_count FROM p_user_metric WHERE user_id=$1 AND is_del=0
`

func (q *Queries) GetUserTweetsCount(ctx context.Context, userID int64) (int32, error) {
	row := q.db.QueryRow(ctx, getUserTweetsCount, userID)
	var tweets_count int32
	err := row.Scan(&tweets_count)
	return tweets_count, err
}

const tweetMotivationFactor = `-- name: TweetMotivationFactor :one
SELECT motivation_factor FROM p_post_metric WHERE post_id=$1 AND is_del=0
`

func (q *Queries) TweetMotivationFactor(ctx context.Context, postID int64) (int32, error) {
	row := q.db.QueryRow(ctx, tweetMotivationFactor, postID)
	var motivation_factor int32
	err := row.Scan(&motivation_factor)
	return motivation_factor, err
}

const updateCommentMetric = `-- name: UpdateCommentMetric :exec

UPDATE p_comment_metric SET rank_score=$1, modified_on=$2 WHERE comment_id=$3 AND is_del=0
`

type UpdateCommentMetricParams struct {
	RankScore  int64
	ModifiedOn int64
	CommentID  int64
}

// ------------------------------------------------------------------------------
// comment_metrics sql dml
// ------------------------------------------------------------------------------
func (q *Queries) UpdateCommentMetric(ctx context.Context, arg *UpdateCommentMetricParams) error {
	_, err := q.db.Exec(ctx, updateCommentMetric, arg.RankScore, arg.ModifiedOn, arg.CommentID)
	return err
}

const updateTweetMetric = `-- name: UpdateTweetMetric :exec

UPDATE p_post_metric SET rank_score=$1, modified_on=$2 WHERE post_id=$3 AND is_del=0
`

type UpdateTweetMetricParams struct {
	RankScore  int64
	ModifiedOn int64
	PostID     int64
}

// ------------------------------------------------------------------------------
// tweet_metrics sql dml
// ------------------------------------------------------------------------------
func (q *Queries) UpdateTweetMetric(ctx context.Context, arg *UpdateTweetMetricParams) error {
	_, err := q.db.Exec(ctx, updateTweetMetric, arg.RankScore, arg.ModifiedOn, arg.PostID)
	return err
}

const updateUserMetric = `-- name: UpdateUserMetric :exec

UPDATE p_user_metric SET tweets_count=$1, modified_on=$2 WHERE user_id=$3 AND is_del=0
`

type UpdateUserMetricParams struct {
	TweetsCount int32
	ModifiedOn  int64
	UserID      int64
}

// ------------------------------------------------------------------------------
// user_metrics sql dml
// ------------------------------------------------------------------------------
func (q *Queries) UpdateUserMetric(ctx context.Context, arg *UpdateUserMetricParams) error {
	_, err := q.db.Exec(ctx, updateUserMetric, arg.TweetsCount, arg.ModifiedOn, arg.UserID)
	return err
}

const upsertCommentMetric = `-- name: UpsertCommentMetric :exec
INSERT INTO p_comment_metric (comment_id, rank_score, created_on) 
VALUES ($1, $2, $3)
RETURNING id
`

type UpsertCommentMetricParams struct {
	CommentID int64
	RankScore int64
	CreatedOn int64
}

func (q *Queries) UpsertCommentMetric(ctx context.Context, arg *UpsertCommentMetricParams) error {
	_, err := q.db.Exec(ctx, upsertCommentMetric, arg.CommentID, arg.RankScore, arg.CreatedOn)
	return err
}

const upsertTweetMetric = `-- name: UpsertTweetMetric :exec
INSERT INTO p_post_metric (post_id, rank_score, created_on) VALUES ($1, $2, $3)
`

type UpsertTweetMetricParams struct {
	PostID    int64
	RankScore int64
	CreatedOn int64
}

func (q *Queries) UpsertTweetMetric(ctx context.Context, arg *UpsertTweetMetricParams) error {
	_, err := q.db.Exec(ctx, upsertTweetMetric, arg.PostID, arg.RankScore, arg.CreatedOn)
	return err
}