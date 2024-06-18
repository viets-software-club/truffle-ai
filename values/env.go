package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"

	"gopkg.in/yaml.v2"
)

func writeEnv(f *os.File, value interface{}) {
	switch v := value.(type) {
	case map[string]interface{}:
		for _, value := range v {
			writeEnvKeyValue(f, value)
		}
	default:
		panic(fmt.Sprintf("Unexpected value: %v", v))
	}
}

func writeEnvKeyValue(f *os.File, value interface{}) {
	switch v := value.(type) {
	case map[interface{}]interface{}:
		for key, value := range v {
			switch value := value.(type) {
			case map[interface{}]interface{}:
				for key, value := range value {
					_, err := f.WriteString(fmt.Sprintf("%s=%v\n", key, value))
					if err != nil {
						panic(err)
					}
				}
			default:
				_, err := f.WriteString(fmt.Sprintf("%s=%v\n", key, value))
				if err != nil {
					panic(err)
				}
			}
		}
	default:
		panic(fmt.Sprintf("Unexpected value: %v", v))
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

	var config map[string]interface{}
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		panic(err)
	}

	f, err := os.Create(*outputFile)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	writeEnv(f, config)
}
