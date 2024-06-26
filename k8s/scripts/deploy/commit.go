/**
 * Script to deploy to production, staging and commit environment optionally with commit sha tags.
 * If deploy to production is 'y' then the script will deploy to production without commit sha tags.
 */

package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/exec"
	"strings"
)

func main() {

	reader := bufio.NewReader(os.Stdin)

	fmt.Println(getEnv())
	// Check if SHA is correct before deployment
	fmt.Printf("Enter SHA for deployment. The Docker builds from this SHA will be used. The current one is %s\n", getCurrentGitSha())
	promptSha, _ := reader.ReadString('\n')
	sha := strings.TrimSpace(promptSha)

	// Check if you want to deploy to production
	// fmt.Print("Deploy to the Public Production?\n")
	// promptIsProduction, _ := reader.ReadString('\n')
	// isProduction := strings.TrimSpace(promptIsProduction) == "y"

	// If you want to deploy to production don't add commit sha tag, otherwise ask user
	var hasTag bool
	// if isProduction {
	// 	hasTag = false
	// } else {
		fmt.Print("Include git commit tag?\n")
		promptTag, _ := reader.ReadString('\n')
		hasTag = strings.TrimSpace(promptTag) == "y"
	// }

	// Is it a dry run, print output to command line without deploying?
	fmt.Print("Dry Run?\n")
	promptDryRun, _ := reader.ReadString('\n')
	isDryRun := strings.TrimSpace(promptDryRun) == "y"

	hosts := getHosts(hasTag, sha)
	hostsJson, err := json.Marshal(hosts)
	if err != nil {
		log.Fatalf("Error converting hosts to JSON: %v", err)
	}
	args := []string{
		"--install",
		"--atomic",
		"--create-namespace",
		"--namespace",
		getNamespace( hasTag, sha),
		"--set",
		fmt.Sprintf("image.repositoryUrl=%s", getImageRepositoryUrl()),
		"--set",
		fmt.Sprintf("image.tag=%s", sha),
		"--set-json",
		fmt.Sprintf("hosts=%s", hostsJson),
		"--values",
		fmt.Sprintf("./values/values.%s.yml", getEnv()),
		"--cleanup-on-fail",
	}
	if isDryRun {
		args = append(args, "--dry-run")
	}
	args = append(args, getChartName(hasTag, sha))
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

	fmt.Println(hosts)
}

func getEnv() string {
	env := os.Getenv("ENV")
	if env == "" {
		env = "commit"
	}
	return env
}

func getCurrentGitSha() string {
	cmd := exec.Command("git", "log", "-n", "1", "--pretty=format:\"%H\"")
	var out bytes.Buffer
	cmd.Stdout = &out
	err := cmd.Run()
	if err != nil {
		fmt.Println("Error:", err)
	}
	return strings.Trim(out.String(), "\"")
}

func getCurrentShortGitSha() string {
	return getCurrentGitSha()[:7]
}

// func getChangeCause() string {
// 	cmd := exec.Command("git", "log", "--oneline", "--format=\"%h %s\"", "-n", "1")
// 	var out bytes.Buffer
// 	cmd.Stdout = &out
// 	err := cmd.Run()
// 	if err != nil {
// 		fmt.Println("Error:", err)
// 	}
// 	return strconv.Quote(out.String()[:63])
// }

func getHosts( hasTag bool, sha string) []string {
	var domain string
	// if isProduction {
	// 	domain = "truffle.tools"
	// } else {
		domain = fmt.Sprintf("%s.truffle.tools", getEnv())
	// }
	if hasTag {
		return []string{fmt.Sprintf("%s.%s", sha, domain), fmt.Sprintf("%s.%s", sha[:7], domain)}
	}
	return []string{domain, fmt.Sprintf("%s.%s", sha[:7], domain), fmt.Sprintf("%s.%s", sha, domain)}
}

func getNamespace( hasTag bool, sha string) string {
	// if isProduction {
	// 	return "public"
	// }
	if hasTag {
		return fmt.Sprintf("%s-%s", getEnv(), sha[:7])
	} else {
		return fmt.Sprintf("%s", getEnv())
	}
}

func getChartName( hasTag bool, sha string) string {
	// if isProduction {
	// 	return "chart-public"
	// }
	if hasTag {
		return fmt.Sprintf("chart-%s-%s", getEnv(), sha[:7])
	} else {
		return fmt.Sprintf("chart-%s", getEnv())
	}
}

func getImageRepositoryUrl() string {
	// if isProduction {
	// 	return fmt.Sprintf("ghcr.io/%s/%s/stable", os.Getenv("ORG_NAME"), os.Getenv("REPO_NAME"))
	// }
	return fmt.Sprintf("ghcr.io/%s/%s/dev", os.Getenv("ORG_NAME"), os.Getenv("REPO_NAME"))
}
