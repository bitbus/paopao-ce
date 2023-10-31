// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.21.0
// source: user.sql

package pgc

import (
	"context"
)

const createUser = `-- name: CreateUser :one
INSERT INTO p_user (username, nickname, password, salt, avatar, status, created_on, balance) 
VALUES ($1, $2, $3, $4, $5, $6, $7, 0)
RETURNING id
`

type CreateUserParams struct {
	Username  string
	Nickname  string
	Password  string
	Salt      string
	Avatar    string
	Status    int16
	CreatedOn int64
}

func (q *Queries) CreateUser(ctx context.Context, arg *CreateUserParams) (int64, error) {
	row := q.db.QueryRow(ctx, createUser,
		arg.Username,
		arg.Nickname,
		arg.Password,
		arg.Salt,
		arg.Avatar,
		arg.Status,
		arg.CreatedOn,
	)
	var id int64
	err := row.Scan(&id)
	return id, err
}

const getAnyusers = `-- name: GetAnyusers :many
SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE is_del=0 ORDER BY id ASC limit 6
`

func (q *Queries) GetAnyusers(ctx context.Context) ([]*PUser, error) {
	rows, err := q.db.Query(ctx, getAnyusers)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*PUser
	for rows.Next() {
		var i PUser
		if err := rows.Scan(
			&i.ID,
			&i.Nickname,
			&i.Username,
			&i.Phone,
			&i.Password,
			&i.Salt,
			&i.Status,
			&i.Avatar,
			&i.Balance,
			&i.IsAdmin,
			&i.CreatedOn,
			&i.ModifiedOn,
			&i.DeletedOn,
			&i.IsDel,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRegisterUserCount = `-- name: GetRegisterUserCount :one

SELECT count(*) FROM p_user WHERE is_del=0
`

// ------------------------------------------------------------------------------
// user_manage sql dml
// ------------------------------------------------------------------------------
func (q *Queries) GetRegisterUserCount(ctx context.Context) (int64, error) {
	row := q.db.QueryRow(ctx, getRegisterUserCount)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const getUserById = `-- name: GetUserById :one
SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE id=$1 AND is_del=0
`

func (q *Queries) GetUserById(ctx context.Context, id int64) (*PUser, error) {
	row := q.db.QueryRow(ctx, getUserById, id)
	var i PUser
	err := row.Scan(
		&i.ID,
		&i.Nickname,
		&i.Username,
		&i.Phone,
		&i.Password,
		&i.Salt,
		&i.Status,
		&i.Avatar,
		&i.Balance,
		&i.IsAdmin,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}

const getUserByPhone = `-- name: GetUserByPhone :one
SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE phone=$1 AND is_del=0
`

func (q *Queries) GetUserByPhone(ctx context.Context, phone string) (*PUser, error) {
	row := q.db.QueryRow(ctx, getUserByPhone, phone)
	var i PUser
	err := row.Scan(
		&i.ID,
		&i.Nickname,
		&i.Username,
		&i.Phone,
		&i.Password,
		&i.Salt,
		&i.Status,
		&i.Avatar,
		&i.Balance,
		&i.IsAdmin,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}

const getUserByUsername = `-- name: GetUserByUsername :one
SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE username=$1 AND is_del=0
`

func (q *Queries) GetUserByUsername(ctx context.Context, username string) (*PUser, error) {
	row := q.db.QueryRow(ctx, getUserByUsername, username)
	var i PUser
	err := row.Scan(
		&i.ID,
		&i.Nickname,
		&i.Username,
		&i.Phone,
		&i.Password,
		&i.Salt,
		&i.Status,
		&i.Avatar,
		&i.Balance,
		&i.IsAdmin,
		&i.CreatedOn,
		&i.ModifiedOn,
		&i.DeletedOn,
		&i.IsDel,
	)
	return &i, err
}

const getUsersByIds = `-- name: GetUsersByIds :many
SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE id = ANY($1::BIGINT[]) AND is_del=0
`

func (q *Queries) GetUsersByIds(ctx context.Context, ids []int64) ([]*PUser, error) {
	rows, err := q.db.Query(ctx, getUsersByIds, ids)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*PUser
	for rows.Next() {
		var i PUser
		if err := rows.Scan(
			&i.ID,
			&i.Nickname,
			&i.Username,
			&i.Phone,
			&i.Password,
			&i.Salt,
			&i.Status,
			&i.Avatar,
			&i.Balance,
			&i.IsAdmin,
			&i.CreatedOn,
			&i.ModifiedOn,
			&i.DeletedOn,
			&i.IsDel,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getUsersByKeyword = `-- name: GetUsersByKeyword :many
SELECT id, nickname, username, phone, password, salt, status, avatar, balance, is_admin, created_on, modified_on, deleted_on, is_del FROM p_user WHERE username LIKE $1 AND is_del=0 limit 6
`

func (q *Queries) GetUsersByKeyword(ctx context.Context, username string) ([]*PUser, error) {
	rows, err := q.db.Query(ctx, getUsersByKeyword, username)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*PUser
	for rows.Next() {
		var i PUser
		if err := rows.Scan(
			&i.ID,
			&i.Nickname,
			&i.Username,
			&i.Phone,
			&i.Password,
			&i.Salt,
			&i.Status,
			&i.Avatar,
			&i.Balance,
			&i.IsAdmin,
			&i.CreatedOn,
			&i.ModifiedOn,
			&i.DeletedOn,
			&i.IsDel,
		); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const myFollowIds = `-- name: MyFollowIds :many
SELECT follow_id FROM p_following WHERE user_id=$1 AND is_del=0
`

func (q *Queries) MyFollowIds(ctx context.Context, userID int64) ([]int64, error) {
	rows, err := q.db.Query(ctx, myFollowIds, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []int64
	for rows.Next() {
		var follow_id int64
		if err := rows.Scan(&follow_id); err != nil {
			return nil, err
		}
		items = append(items, follow_id)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const myFriendIds = `-- name: MyFriendIds :many

SELECT friend_id FROM p_contact WHERE user_id=$1 AND is_del=0
`

// ------------------------------------------------------------------------------
// user_relation sql dml
// ------------------------------------------------------------------------------
func (q *Queries) MyFriendIds(ctx context.Context, userID int64) ([]int64, error) {
	rows, err := q.db.Query(ctx, myFriendIds, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []int64
	for rows.Next() {
		var friend_id int64
		if err := rows.Scan(&friend_id); err != nil {
			return nil, err
		}
		items = append(items, friend_id)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateUser = `-- name: UpdateUser :exec
UPDATE p_user 
SET username=$1, 
    nickname=$2, 
    phone=$3,
    password=$4,
    salt=$5,
    status=$6,
    avatar=$7,
    balance=$8,
    is_admin=$9,
    modified_on=$10
WHERE id=$11 AND is_del=0
`

type UpdateUserParams struct {
	Username   string
	Nickname   string
	Phone      string
	Password   string
	Salt       string
	Status     int16
	Avatar     string
	Balance    int64
	IsAdmin    bool
	ModifiedOn int64
	ID         int64
}

func (q *Queries) UpdateUser(ctx context.Context, arg *UpdateUserParams) error {
	_, err := q.db.Exec(ctx, updateUser,
		arg.Username,
		arg.Nickname,
		arg.Phone,
		arg.Password,
		arg.Salt,
		arg.Status,
		arg.Avatar,
		arg.Balance,
		arg.IsAdmin,
		arg.ModifiedOn,
		arg.ID,
	)
	return err
}