helm repo add $(echo $ORG_NAME) --username ${GITHUB_TOKEN} --password ${GITHUB_TOKEN} https://raw.githubusercontent.com/$(echo $ORG_NAME)/$(echo $RELEASE_REPO_NAME)/main/