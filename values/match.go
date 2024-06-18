package main

import (
	"fmt"
	"io"
	"log"
	"os"

	"gopkg.in/yaml.v2"
)

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Please provide at least one file path as argument")
	}

	var allFields []map[string]interface{}
	for _, filePath := range os.Args[1:] {
		fields, err := getFieldsFromFile(filePath)
		if err != nil {
			log.Fatalf("Error getting fields from file %s: %v", filePath, err)
		}
		allFields = append(allFields, fields)
	}

	for i := 1; i < len(allFields); i++ {
		if !equalKeys(allFields[i-1], allFields[i]) {
			fmt.Printf("Keys do not match between %s and %s\n", os.Args[1], os.Args[i+1])
			os.Exit(1)
		}
	}

	fmt.Println("All keys match across all files")
}

func equalKeys(a, b map[string]interface{}) bool {
	if len(a) != len(b) {
		return false
	}
	for k := range a {
		if _, ok := b[k]; !ok {
			return false
		} else {
			switch av := a[k].(type) {
			case map[interface{}]interface{}:
				bv, ok := b[k].(map[interface{}]interface{})
				if !ok {
					return false
				}
				if !equalKeys(convertMap(av), convertMap(bv)) {
					return false
				}
			default:
			}
		}
	}

	return true
}

func convertMap(original map[interface{}]interface{}) map[string]interface{} {
	converted := make(map[string]interface{})
	for k, v := range original {
		strKey, ok := k.(string)
		if !ok {
			continue
		}
		switch v := v.(type) {
		case map[interface{}]interface{}:
			converted[strKey] = convertMap(v)
		default:
			converted[strKey] = v
		}
	}
	return converted
}
func getFields(m map[string]interface{}, prefix string) []string {
	var fields []string
	for k, v := range m {
		if nestedMap, ok := v.(map[string]interface{}); ok {
			fields = append(fields, getFields(nestedMap, prefix+k+".")...)
		} else {
			fields = append(fields, prefix+k)
		}
	}
	return fields
}

func getFieldsFromFile(filePath string) (map[string]interface{}, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	bytes, err := io.ReadAll(file)
	if err != nil {
		return nil, err
	}

	var m map[string]interface{}
	if err := yaml.Unmarshal(bytes, &m); err != nil {
		return nil, err
	}

	return m, nil
}

func equal(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if v != b[i] {
			return false
		}
	}
	return true
}
