import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userServices from '../services/user.js'
import useUser from '../hooks/useUser.js'

const handleSubmit = async (event, login) => {
	event.preventDefault()
	try {
		const form = event.target
		const data = new FormData(form)
		const email = data.get('email')
		const password = data.get('password')
		const response = await userServices.login({ email, password })
		if (response) {
			login(response)
		}
	}
	catch (error) {
		console.log(error)
	}
}

const Login = () => {

	const { hasToken, login } = useUser()
	const navigate = useNavigate()

	useEffect(() => {
		if (hasToken) {
			navigate('/')
		}
	}, [hasToken])

	return (
		<form onSubmit={(event) => handleSubmit(event, login)}>
			<input type='email' name='email' placeholder='Email' />
			<input type='password' name='password' />
			<button type='submit'>Login</button>
		</form>
	)
}

export default Login