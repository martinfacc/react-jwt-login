import React, { useCallback, useEffect } from 'react'
import UserContext from '../contexts/userContext.jsx'

const useUser = () => {
	const { user, setUser } = React.useContext(UserContext)

	useEffect(() => {
		if (!user) {
			const userFromStorage = window.localStorage.getItem('ReactJWTUser')
			if (userFromStorage) {
				setUser(JSON.parse(user))
			}
		}
	}, [user])

	const login = useCallback(user => {
		// user = { firstname, lastname, email, token }
		setUser(user)
		window.localStorage.setItem('ReactJWTUser', JSON.stringify(user))
	}, [setUser])

	const logout = useCallback(() => {
		setUser(null)
		window.localStorage.removeItem('ReactJWTUser')
	}, [setUser])

	return {
		user,
		hasToken: Boolean(user?.token),
		login,
		logout
	}
}

export default useUser