import { configureStore } from '@reduxjs/toolkit'
import apiProviders from './reduxConfig'

export const store = configureStore({
  reducer: {
    apiProvidersInfo: apiProviders,
  },
})
