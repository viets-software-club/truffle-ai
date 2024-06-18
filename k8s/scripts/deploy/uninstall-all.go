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
		fmt.Println(deployment)
		cmd1 := exec.Command("helm", "uninstall", deployment.Name, "--namespace", deployment.Namespace)
		cmd1.Stdout = os.Stdout
		cmd1.Stderr = os.Stderr
		err = cmd1.Run()
		if err != nil {
			log.Println(err)
		}

		cmd2 := exec.Command("kubectl", "delete", "namespace", deployment.Namespace)
		cmd2.Stdout = os.Stdout
		cmd2.Stderr = os.Stderr
		err = cmd2.Run()

		if err != nil {
			log.Println(err)
		}
		
		
		
	}
	fmt.Println("Success!")

}
