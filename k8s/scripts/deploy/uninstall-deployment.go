package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Missing argument <app-namespace>")
		os.Exit(1)
	}

	namespaces := os.Args[1:]
	for _, namespace := range namespaces {
		_, err := exec.Command("helm", "uninstall", "chart-"+namespace, "--namespace", namespace).Output()
		if err != nil {
			fmt.Println("Error uninstalling helm:", err)
		}

		_, err = exec.Command("kubectl", "delete", "namespace", namespace).Output()
		if err != nil {
			fmt.Println("Error deleting namespace:", err)
		}
	}
}
