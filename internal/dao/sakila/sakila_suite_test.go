// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package sakila_test

import (
	"testing"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func TestSakila(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Sakila Suite")
}
