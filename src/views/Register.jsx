import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userServices from '../services/user.js'
import useUser from '../hooks/useUser.js'

const handleSubmit = async (event, login) => {
	event.preventDefault()
	try {
		const form = event.target
		const data = new FormData(form)
		const firstname = data.get('firstname')
		const lastname = data.get('lastname')
		const email = data.get('email')
		const cuit = data.get('cuit')
		const password = data.get('password')
		const confirmPassword = data.get('confirmPassword')

		if (password !== confirmPassword) throw new Error('Passwords do not match')

		const response = await userServices.signup({ firstname, lastname, email, cuit, password })
		if (response) {
			login(response)
		}
	}
	catch (error) {
		console.log(error)
	}
}

const Register = () => {

	const { hasToken, login } = useUser()
	const navigate = useNavigate()

	useEffect(() => {
		if (hasToken) {
			navigate('/')
		}
	}, [hasToken])

	return (
		<form onSubmit={(event) => handleSubmit(event, login)}>
			<input type='text' name='firstname' placeholder='Firstname' />
			<input type='text' name='lastname' placeholder='Lastname' />
			<input type='email' name='email' placeholder='Email' />
			<input type='password' name='password' />
			<input type='password' name='confirmPassword' />
			<button type='submit'>Register</button>
		</form>
	)
}

export default Register