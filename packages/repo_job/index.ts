import axios from 'axios'

setTimeout(() => {
  console.log('Repo job run at', new Date().toLocaleString())

  // void axios
  //   .get((process.env.SERVER_URL as string) + '/updateDatabase')
  //   .then((response) => console.log(response.data))

  void axios
    .post(process.env.SERVER_GRAPHQL_URL as string, { query: '{ helloWorld }' })
    .then((response) => {
      console.log(response.data)
    })

  void axios
    .get((process.env.SERVER_URL as string) + '/test')
    .then((response) => console.log(response.data))
}, 10000)
