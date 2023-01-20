import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import JournalPage from '../pages/JournalPage'

const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalPage />}/>
        {/*Si entro a la ruta de arriba y no estoy dentro del / me manda a   */}
        <Route path='/*' element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default JournalRoutes