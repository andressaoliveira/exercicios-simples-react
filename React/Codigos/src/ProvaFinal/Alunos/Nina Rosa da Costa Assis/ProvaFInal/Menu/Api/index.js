import api from './axiosConfig'

export const getAll = () => {
    return api.get('/all.json').then((result) => {
        return result
    }).catch((err) =>{
        console.log(err)
        return []
    })
}

export const getById = (id) => {
    return api.get(`/id/${id}.json`).then((result) => {
        return result
    }).catch((err) =>{
        console.log(err)
        return null
    })
}