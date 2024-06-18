package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"

	"gopkg.in/yaml.v2"
)

func writeMap(f *os.File, value map[interface{}]interface{}) {

	for key, val := range value {
		switch v := val.(type) {
			case map[interface{}]interface{}:
				writeMap(f, v)
			default:
				writeValue(f, key, val)
		}

	}
}

func writeValue(f *os.File, key, value interface{}) {
    var err error
    switch value := value.(type) {
    case int:
        _, err = f.WriteString(fmt.Sprintf("%s=%d\n", key, value))
    default:
        _, err = f.WriteString(fmt.Sprintf("%s=%v\n", key, value))
    }
    if err != nil {
        panic(err)
    }
}

func main() {
	inputFile := flag.String("input", "", "Path to the input YAML file")
	outputFile := flag.String("output", "", "Path to the output environment file")
	flag.Parse()

	data, err := ioutil.ReadFile(*inputFile)
	if err != nil {
		panic(err)
	}

	var config map[interface{}]interface{}
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		panic(err)
	}

	f, err := os.Create(*outputFile)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	writeMap(f, config)
}
