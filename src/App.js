import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './modules/Home'
import './App.css'
import { apiProviderResponse } from './reduxConfig'
import InformationPage from './modules/InformationPage'

const StyleWrapper = styled.div``

const App = () => {
  const dispatch = useDispatch()

  const apiProvider = useSelector(store => store.apiProvidersInfo)

  useEffect(() => {
    const url = 'https://api.apis.guru/v2/providers.json'

    const fetchApi = async () => {
      const response = await fetch(url)
      const { data } = await response.json()
      dispatch(
        apiProviderResponse(Object.fromEntries(data.map(key => [key, {}])))
      )
    }

    if (!apiProvider.length) fetchApi()
  }, [])

  return (
    <BrowserRouter>
      <StyleWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<InformationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </StyleWrapper>
    </BrowserRouter>
  )
}

export default App
