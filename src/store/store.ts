import { configureStore } from '@reduxjs/toolkit'
import phoneSlice from './slices/phoneSlice'

export const store = configureStore({
  reducer: {
    phoneReducer: phoneSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch