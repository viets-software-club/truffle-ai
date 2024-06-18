package main

import (
	"encoding/base64"
	"flag"
	"io/ioutil"
	"strconv"

	"gopkg.in/yaml.v2"
)

func main() {
	inputFile := flag.String("input", "", "Input file")
	outputFile := flag.String("output", "", "Output file")
	flag.Parse()

	data, err := ioutil.ReadFile(*inputFile)
	if err != nil {
		panic(err)
	}

	var config map[string]interface{}
	var out map[string]interface{} = make(map[string]interface{})

	err = yaml.Unmarshal(data, &config)
	if err != nil {
		panic(err)
	}

	if values, ok := config["values"].(map[interface{}]interface{}); ok {
		for key, value := range values {
			if strKey, ok := key.(string); ok {
				out[strKey] = value
			} else {
				panic("Error parsing key")

			}
		}
	}
	if configMaps, ok := config["configMaps"].(map[interface{}]interface{}); ok {
		outConfigMaps := make(map[string]interface{})
		for key, value := range configMaps {
			if strKey, ok := key.(string); ok {
				outConfigMaps[strKey + "-config-map"] = value
			} else {
				panic("Error parsing key")
			}

		}
		out["configMaps"] = outConfigMaps
	}
	if secrets, ok := config["secrets"].(map[interface{}]interface{}); ok {
		outSecrets := make(map[string]map[string]interface{})
		for key, valueMap := range secrets {
				
				if secretLabel, ok := key.(string); ok {
					outSecrets[secretLabel + "-secret"] = make(map[string]interface{})
					for actualValueKey, actualValue := range valueMap.(map[interface{}]interface{}) {
						if actualValueKey, ok := actualValueKey.(string); ok {
							switch v := actualValue.(type) {
							case string:
								outSecrets[secretLabel + "-secret"][actualValueKey] = base64.StdEncoding.EncodeToString([]byte(v))
							case int:
								outSecrets[secretLabel + "-secret"][actualValueKey] = base64.StdEncoding.EncodeToString([]byte(strconv.Itoa(v)))
							default:
								panic("Unsupported type")
							}
						}
					}
				} else {
					panic("Error parsing key")
				}
			
		}
		out["secrets"] = outSecrets;
	}
	
	data, err = yaml.Marshal(out)
	if err != nil {
		panic(err)
	}

	err = ioutil.WriteFile(*outputFile, data, 0644)
	if err != nil {
		panic(err)
	}
}
