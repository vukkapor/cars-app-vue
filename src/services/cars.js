import axios from 'axios'

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('cars')
    }

    add(newCar) {
        return axios.post('cars', newCar)
    }

    get(id) {
        return axios.get('cars/' + id)
    }

    edit(id, car) {
        return axios.put('cars/' + id, car)
    }
}

export const carsService = new CarsService()