import axios from 'axios'

const configuredAxios = axios.create({
    baseURL: 'firestore documents REST API url'
})

export default configuredAxios
