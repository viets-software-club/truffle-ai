export const initialTemplate = `Dear {founderName},

I hope you're well. I saw you're the mastermind behind {projectName}, and I had to reach out.

I'm a former ML researcher (in federated learning) + data scientist at Amazon turned VC at La Famiglia (early-stage investor of Deel, Personio, Applied Intuition, Groq, Abacus AI, Stripe, etc.).

{What you are building is compelling, especially after I played with Langchain + Pinecone + GPT3 API a few weeks ago.}

I would love to meet you and learn more about how we could work together. Is there a good time in the next few days?

Take care & all the best,
Viet

PS: if you have time, please check out my blog post on Building a Defensible ML company here: https://vietle.substack.com/p/defensible-machine-learning`

const emailTemplate = (
	email: string,
	founderName: string,
	projectName: string
) => {
	const subject = `La Famiglia x ${projectName}`

	const template = localStorage.getItem('emailMessage') || initialTemplate
	const body = template
		.replaceAll('{projectName}', projectName)
		.replaceAll('{founderName}', founderName)

	return `mailto:${email}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`
}

export default emailTemplate
