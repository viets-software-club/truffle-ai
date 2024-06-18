package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"reflect"

	"gopkg.in/yaml.v2"
)

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Please provide at least one file path as argument")
	}

	var allFields []map[interface{}]interface{}
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

func equalKeys(a map[interface{}]interface{}, b map[interface{}]interface{}) bool {
	if len(a) != len(b) {
		return false
	}
	for k := range a {
		if _, ok := b[k]; !ok {
			return false
		} else if reflect.TypeOf(a[k]) != reflect.TypeOf(b[k]) {
			return false;
		} else {
			switch av := a[k].(type) {
			case map[interface{}]interface{}:
				bv, _ := b[k].(map[interface{}]interface{})
				if !equalKeys(av, bv) {
					return false
				}
			default:
			}
		}
	}

	return true
}

func getFieldsFromFile(filePath string) (map[interface{}]interface{}, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	bytes, err := io.ReadAll(file)
	if err != nil {
		return nil, err
	}

	var m map[interface{}]interface{}
	if err := yaml.Unmarshal(bytes, &m); err != nil {
		return nil, err
	}

	return m, nil
}