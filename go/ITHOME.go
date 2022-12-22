package main

import (
	"fmt"
	"packagedemo/mylib"

	// 這裡使用log 這別名來取代logrus這包名
	log "github.com/sirupsen/logrus"
)

func main() {
	fmt.Println(mylib.Add(1, 2))
	log.Info("IThome Iron man")
}
