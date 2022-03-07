import React, { useState } from 'react'

const UserContext = React.createContext({})

export const UserContextProvider = (props) => {

  const { children } = props
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext