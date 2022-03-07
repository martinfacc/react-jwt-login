import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser.js'

const Home = () => {

	const { user, hasToken, logout } = useUser()
	const navigate = useNavigate()

	useEffect(() => {
		if (!hasToken) {
			navigate('/auth/login')
		}
	}, [hasToken])

	return (<>
		<div>Home</div>
		<button onClick={logout}>Logout</button>
		<button onClick={() => {
			if (user.firstname === 'Martin') {
				alert('Te llamas Martin')
			}
			else {
				alert('No te llamas Martin, te llamas ' + user.firstname)
			}
		}}>Funciona solo si me llamo Martin</button>
	</>)
}

export default Home