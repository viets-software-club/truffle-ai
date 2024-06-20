/**
 * Script to deploy releases on GitHub to production.
 */

package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/exec"
	"strings"
)

func main() {

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the version for deployment as it was tagged on GitHub without 'v' e.g. 1.0.0")
	promptVersion, _ := reader.ReadString('\n')

	// Is it a dry run, print output to command line without deploying?
	fmt.Print("Dry Run?\n")
	promptDryRun, _ := reader.ReadString('\n')
	isDryRun := strings.TrimSpace(promptDryRun) == "y"
	hostsJson, err := json.Marshal([]string{"truffle.tools"})
	if err != nil {
		log.Fatalf("Error converting hosts to JSON: %v", err)
	}
	args := []string{
		"--install",
		"--atomic",
		"--create-namespace",
		"--namespace",
		"public",
		"--set",
		fmt.Sprintf("image.repositoryUrl=ghcr.io/%s/%s/stable", os.Getenv("ORG_NAME"), os.Getenv("REPO_NAME")),
		"--set",
		fmt.Sprintf("image.tag=%s", strings.TrimSpace(promptVersion)),
		"--set-json",
		fmt.Sprintf("hosts=%s", hostsJson),
		"--values",
		"./values/values.production.yml",
		"--cleanup-on-fail",
		"--version",
		strings.TrimSpace("v" + promptVersion),
	}
	if isDryRun {
		args = append(args, "--dry-run")
	}
	args = append(args, "chart-public")
	args = append(args, "./charts/app-chart")

	upgradeCommand := exec.Command("helm", append([]string{"upgrade"}, args...)...)
	fmt.Println("Command:", upgradeCommand.String())
    upgradeCommand.Stdout = os.Stdout
    upgradeCommand.Stderr = os.Stderr
	fmt.Println("working...")
	err = upgradeCommand.Run()
	if err != nil {
		fmt.Println("Error:", err)
	}

	fmt.Println([]string{"truffle.tools"})
}
