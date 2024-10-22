import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const reduxConfig = createSlice({
  name: 'apiProvidersInfo',
  initialState,
  reducers: {
    apiProviderResponse: (state, action) => {
      state.apiProviderResponse = action.payload
    },
    anotherData: (state, action) => {
      state.anotherData = action.payload
    },
  },
})

export const { apiProviderResponse, anotherData } = reduxConfig.actions
export default reduxConfig.reducer
