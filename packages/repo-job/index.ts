import axios from 'axios'

console.log('Repo job run at', new Date().toLocaleString())

void axios
  .get(
    `http://truffle-ai-graphql-backend-deployment:${
      process.env.GRAPHQL_SERVER_PORT as string
    }/updateDatabase`
  )
  .then((response) => {
    console.log(response.data)
  })
