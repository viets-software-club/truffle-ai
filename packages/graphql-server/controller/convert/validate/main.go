package validate

import "strings"

func IsStringValid(s string) bool {
	return strings.TrimSpace(s) != ""
}
