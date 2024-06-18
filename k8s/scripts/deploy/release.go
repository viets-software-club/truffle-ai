/**
 * Script to deploy releases on GitHub to production.
 */

package main

import (
	"bufio"
	"fmt"
	"os"
	"os/exec"
	"strings"
)

func main() {

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the version for deployment as it was tagged on GitHub e.g. v1.0.0")
	promptVersion, _ := reader.ReadString('\n')

	// Is it a dry run, print output to command line without deploying?
	fmt.Print("Dry Run?\n")
	promptDryRun, _ := reader.ReadString('\n')
	isDryRun := strings.TrimSpace(promptDryRun) == "y"

	args := []string{
		"--install",
		"--atomic",
		"--create-namespace",
		"--namespace",
		"public",
		"--set",
		fmt.Sprintf("image.repositoryUrl=\"ghcr.io/%s/%s/stable\"", os.Getenv("ORG_NAME"), os.Getenv("REPO_NAME")),
		"--set-json",
		fmt.Sprintf("hosts=%s", []string{"truffle.tools"}),
		"--values",
		"values.production.yml",
		"--values",
		"values.production.yml",
		"--cleanup-on-fail",
		"--version",
		strings.TrimSpace(promptVersion),
	}
	if isDryRun {
		args = append(args, "--dry-run")
	}
	args = append(args, "chart-public")
	args = append(args, "./config/charts/app-chart")

	upgradeCommand := exec.Command("helm", append([]string{"upgrade"}, args...)...)

	fmt.Println("working...")
	err := upgradeCommand.Run()
	if err != nil {
		fmt.Println("Error:", err)
	}

	fmt.Println([]string{"truffle.tools"})
}
