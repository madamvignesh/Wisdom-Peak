import React from 'react'

const Context = React.createContext({
  userList: [],
  isDarkTheme: true,
  onChangeTheme: () => {},
})

export default Context
