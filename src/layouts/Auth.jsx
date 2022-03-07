import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../views/Login.jsx'
import Register from '../views/Register.jsx'

const Auth = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/*" element={<Login />} />
		</Routes>
	)
}

export default Auth