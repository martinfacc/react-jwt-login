import React from 'react'
import { UserContextProvider } from './contexts/userContext.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './layouts/Home.jsx'
import Auth from './layouts/Auth.jsx'
import './styles/app.css'

const App = () => {

	return (
		<UserContextProvider>
			<Router>
				<Routes>
					<Route path='/auth/*' element={<Auth />} />
					<Route path='/*' element={<Home />} />
				</Routes>
			</Router>
		</UserContextProvider>
	)
}

export default App
