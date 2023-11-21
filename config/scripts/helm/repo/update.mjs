#!/usr/bin/env zx
// updates helm repo specified by $RELEASE_REPO_NAME
import 'zx/globals'

$`helm repo update ${$.env.RELEASE_REPO_NAME}`
