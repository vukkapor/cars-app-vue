import axios from 'axios'

export default class AuthService {

  constructor() {
    this.setAxiosDefaultAuthorizationHeader();
    this.user = {};
  }

  login(email, password) {
    return axios.post('http://localhost:8000/api/login', {
      email,
      password
    }).then(data => {
      window.localStorage.setItem('loginToken', data.data.token)
      this.setAxiosDefaultAuthorizationHeader()
    })
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('loginToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
  }

  logout() {
    window.localStorage.removeItem('loginToken')
    delete axios.defaults.headers.common['Authorization']
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('loginToken')
  }

  register(name, email, password) {
    this.user = {};
    this.user.name = name;
    this.user.email = email;
    this.user.password = password;
    return axios.post('http://localhost:8000/api/register', this.user)
      .catch($e => {
        alert($e)
      })
  }
}

export const authService = new AuthService()