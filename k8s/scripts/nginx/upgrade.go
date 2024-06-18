package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"strings"
)

func main() {
	certID, err := exec.Command("doctl", "compute", "certificate", "list", "--format", "ID", "--no-header").Output()
	if err != nil {
		fmt.Println("Error getting certificate ID:", err)
		return
	}

	repoName, exists := os.LookupEnv("REPO_NAME")
	if !exists {
		repoName = "truffle-ai"
	}

	var envName string
	if os.Getenv("ENV") == "production" {
		envName = "prod"
	} else {
		envName = "dev"
	}

	config := map[string]interface{}{
		"service": map[string]interface{}{
			"annotations": map[string]interface{}{
				"service.beta.kubernetes.io/do-loadbalancer-name":                             fmt.Sprintf("%s-nginx-ingress-controller", repoName, envName),
				"service.beta.kubernetes.io/do-loadbalancer-certificate-id":                   strings.TrimSpace(string(certID)),
				"service.beta.kubernetes.io/do-loadbalancer-protocol":                         "https",
				"service.beta.kubernetes.io/do-loadbalancer-size-unit":                        "1",
				"service.beta.kubernetes.io/do-loadbalancer-disable-lets-encrypt-dns-records": "false",
				"service.beta.kubernetes.io/do-loadbalancer-redirect-http-to-https":           "true",
				"service.beta.kubernetes.io/do-loadbalancer-enable-proxy-protocol":            "true",
			},
		},
	}

	configJSON, err := json.Marshal(config)
	if err != nil {
		fmt.Println("Error encoding config:", err)
		return
	}

	cmd := exec.Command("helm", "upgrade", "--timeout", "10m0s", "--atomic", "--install", "--set-string", string(configJSON), "ing-controller-release", "oci://registry-1.docker.io/bitnamicharts/nginx-ingress-controller")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	fmt.Println("Working...")
	if err := cmd.Run(); err != nil {
		fmt.Println("Error running helm command:", err)
		return
	}

	fmt.Println("Done!")
}
