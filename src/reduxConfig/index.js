import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const reduxConfig = createSlice({
  name: 'apiProvidersInfo',
  initialState,
  reducers: {
    apiProviderResponse: (state, action) => {
      state.apiProviderResponse = action.payload
    },
    providerObj: (state, action) => {
      state.providerObj = action.payload
    },
    currentAPIDetails: (state, action) => {
      state.currentAPIDetails = action.payload
    },
  },
})

export const { apiProviderResponse, providerObj, currentAPIDetails } =
  reduxConfig.actions
export default reduxConfig.reducer
