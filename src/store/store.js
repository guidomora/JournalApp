import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { journalSlice } from './journal/journalSlice'



 const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
  devTools: false
})

export default store