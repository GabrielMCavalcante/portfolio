import axios from 'axios'

const configuredAxios = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/gabrielcavalcante-portfolio/databases/(default)/documents/'
})

export default configuredAxios