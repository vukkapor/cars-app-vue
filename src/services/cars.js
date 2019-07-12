import axios from 'axios'

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll() {
        return axios.get('cars')
    }

    add(newCar) {
        newCar.id = null;
        return axios.post('cars', newCar)
    }

    get(id) {
        return axios.get('cars/' + id)
    }

    edit(id, car) {
        return axios.put('cars/' + id, car)
    }

    delete(id) {
        return axios.delete('cars/' + id)
    }
}

export const carsService = new CarsService()