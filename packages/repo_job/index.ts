import axios from 'axios'

console.log('Repo job run at', new Date().toLocaleString())

void axios
  .get(
    `http://truffle-ai-graphql-server-service:${process.env.SERVER_PORT as string}/updateDatabase`
  )
  .then((response) => {
    console.log(response.data)
  })
