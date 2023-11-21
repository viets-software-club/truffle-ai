#!/usr/bin/env zx
// adds repository to helm
import 'zx/globals'

$`helm repo add ${$.env.RELEASE_REPO_NAME} --username ${$.env.GITHUB_TOKEN} --password ${$.env.GITHUB_TOKEN} https://raw.githubusercontent.com/${$.env.ORG_NAME}/$(echo ${$.env.RELEASE_REPO_NAME})/main/`
