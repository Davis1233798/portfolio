package main

import (
	"fmt"
)

var global int

func main() {
	var local1, local2 int

	local1 = 8
	local2 = 10
	global = local1 * local2
	//\n加上後才不會出現%符號

	fmt.Printf("local1 = %d , local2 = %d , global = %d\n", local1, local2, global)


	var i int 
	JumpLoop:
	for  ; ; i++{
		if i> 10(
			fmt.println(i)
			break JumpLoop
		)
	}
}
