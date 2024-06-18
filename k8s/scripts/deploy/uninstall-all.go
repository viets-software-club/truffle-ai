package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/exec"
)

type Deployment struct {
	Name      string `json:"name"`
	Namespace string `json:"namespace"`
}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Requires environment arg for it to be deleted")
		os.Exit(1)
	}

	out, err := exec.Command("helm", "ls", "--all-namespaces", "--filter", "chart-", "--no-headers", "-o", "json").Output()
	if err != nil {
		log.Fatal(err)
	}

	var deployments []Deployment
	err = json.Unmarshal(out, &deployments)
	if err != nil {
		log.Fatal(err)
	}

	for _, deployment := range deployments {
		_, err := exec.Command("helm", "uninstall", deployment.Name, "--namespace", deployment.Namespace).Output()
		if err != nil {
			fmt.Println("Error uninstalling helm:", err)
		}

		_, err = exec.Command("kubectl", "delete", "namespace", deployment.Namespace).Output()
		if err != nil {
			fmt.Println("Error deleting namespace:", err)
		}
	}
}
