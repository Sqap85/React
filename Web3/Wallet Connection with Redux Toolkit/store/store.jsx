import { configureStore } from '@reduxjs/toolkit'
import dataSlice  from './dataSlice'
import contractSlice from './contractSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
    contract: contractSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})