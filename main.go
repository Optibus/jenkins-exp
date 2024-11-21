package main

import "fmt"

func salute(name string) string {
	return "Hello, " + name + "!"
}

func main() {
	fmt.Println(salute("world"))
}
