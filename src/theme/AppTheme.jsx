import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpleTheme } from './purpleTheme'



// Creamos el proveedor del tema al cual le pasamos como tema nuestro tema creado
const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

export default AppTheme