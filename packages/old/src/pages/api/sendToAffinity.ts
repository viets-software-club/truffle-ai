import { NextApiRequest, NextApiResponse } from 'next'

// @TODO adapt actual columns to list in Affinity

type AffinityData = {
	name: string
	stars: number
	forks: number
	contributors: number
	githubUrl: string
	apiKey: string
	listId: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		name,
		stars,
		forks,
		contributors,
		githubUrl,
		apiKey,
		listId
	}: AffinityData = req.body as AffinityData

	const affinityData = {
		// "name" is the organization name and others are custom fields
		name,
		custom_field_values: {
			'GitHub Stars': stars,
			'GitHub Forks': forks,
			'GitHub Contributors': contributors,
			'GitHub URL': githubUrl
		}
	}

	try {
		const response = await fetch(
			`https://api.affinity.co/lists/${listId}/list-entries`,
			{
				method: 'POST',
				headers: {
					'API-KEY': apiKey,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(affinityData)
			}
		)

		if (response.ok) {
			res.status(200).json({ success: true })
		} else {
			throw new Error('Request failed')
		}
	} catch (err) {
		res.status(500).json({ success: false })
	}
}
