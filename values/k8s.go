package main

import (
	"flag"
	"io/ioutil"

	"gopkg.in/yaml.v2"
)

type Config struct {
	ConfigMaps map[string]interface{} `yaml:"configMaps"`
	Secrets    map[string]interface{} `yaml:"secrets"`
}

func main() {
	inputFile := flag.String("input", "", "Input file")
	outputFile := flag.String("output", "", "Output file")
	flag.Parse()

	data, err := ioutil.ReadFile(*inputFile)
	if err != nil {
		panic(err)
	}

	var config Config
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		panic(err)
	}

	for key, value := range config.ConfigMaps {
		delete(config.ConfigMaps, key)
		config.ConfigMaps[key+"-config-map"] = value
	}
	for key, value := range config.Secrets {
		delete(config.Secrets, key)
		config.Secrets[key+"-secret"] = value
	}

	data, err = yaml.Marshal(config)
	if err != nil {
		panic(err)
	}

	err = ioutil.WriteFile(*outputFile, data, 0644)
	if err != nil {
		panic(err)
	}
}
