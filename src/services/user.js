import axios from 'axios'

const url = 'http://localhost:3001'

const login = async (user) => {
	try {
		const response = await axios.post(url + '/api/user/login', user)
		if (response.status === 200) {
			return response.data
		}
		throw new Error('Login failed')
	}
	catch (error) {
		console.log(error)
	}
}

const signup = async (user) => {
	try {
		const response = await axios.post(url + '/api/user/signup', user)
		if (response.status === 200) {
			return response.data
		}
		throw new Error('Signup failed')
	}
	catch (error) {
		console.log(error)
	}
}

const logout = async (user) => {
	try {
		const response = await axios.post(url + '/api/user/logout', user)
		if (response.status === 200) {
			return true
		}
		throw new Error('Logout failed')
	}
	catch (error) {
		console.log(error)
	}
}

export default {
	login,
	signup,
	logout
}