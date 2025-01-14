// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

//go:build generate
// +build generate

package main

import (
	"log"
	"strings"

	"github.com/alimy/yesql"
)

//go:generate go run $GOFILE
func main() {
	log.Println("[Yesql] generate code start")
	yesql.SetDefaultQueryHook(func(query *yesql.Query) (*yesql.Query, error) {
		buf := strings.Builder{}
		buf.Grow(len(query.Query))
		// 去除多余的空格
		isPrevSpace := false
		for _, c := range query.Query {
			switch c {
			case ' ', '\t':
				if !isPrevSpace {
					buf.WriteRune(' ')
					isPrevSpace = true
				}
			default:
				buf.WriteRune(c)
				isPrevSpace = false
			}
		}
		query.Query = strings.TrimRight(buf.String(), ";")
		return query, nil
	})
	if err := yesql.Generate(); err != nil {
		log.Fatalf("generate code occurs error: %s", err)
	}
	log.Println("[Yesql] generate code finish")
}
