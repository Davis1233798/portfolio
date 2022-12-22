/*
runtime.Gosched()表示讓 CPU 把時間片讓給別人，下次某個時候繼續恢復執行該 goroutine。
預設情況下，在 Go 1.5 將標識併發系統執行緒個數的 runtime.GOMAXPROCS 的初始值由 1 改為了執行環境的 CPU 核數。
*/

package main

import (
	"fmt"
	"runtime"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		runtime.Gosched()
		fmt.Println(s)
	}
}

func main() {
	go say("world") //開一個新的 Goroutines 執行
	say("hello")    //當前 Goroutines 執行
}
