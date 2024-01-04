package types

// var DatabaseTypes = joinStringSlices(GthbTypes, SbotLinTypes, AlgoHnTypes, ProjTypes, GthbTypes2)
var DatabaseTypes = joinStringSlices(GthbTypes, SbotLinTypes, AlgoHnTypes, ProjTypes, GthbTypes2)

func joinStringSlices(slices ...[]string) []string {
	var result []string
	for _, slice := range slices {
		result = append(result, slice...)

	}
	return result
}
