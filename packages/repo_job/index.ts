import axios from 'axios'

console.log('Repo job run at', new Date().toLocaleString())

void axios
  .get((process.env.SERVER_URL as string) + '/updateDatabase')
  .then((response) => console.log(response.data))
