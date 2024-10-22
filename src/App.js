import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './modules/Home'
import './App.css'
import { apiProviderResponse } from './reduxConfig'

const StyleWrapper = styled.div`
  /* margin-top: 60px;
  padding: 60px 20px;
  @media screen and (max-width: 480px) {
    padding: 20px 0px;
  } */
`

const App = () => {
  const dispatch = useDispatch()

  const apiProvider = useSelector(store => store.apiProvidersInfo)

  useEffect(() => {
    const url = 'https://api.apis.guru/v2/providers.json'

    const fetchApi = async () => {
      const response = await fetch(url)
      const { data } = await response.json()
      dispatch(apiProviderResponse(data))
    }

    if (!apiProvider.length) fetchApi()
  }, [])

  console.log('apiProvider', apiProvider)
  return (
    <BrowserRouter>
      <StyleWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/add" element={<AddUser />} /> */}
          {/* {users?.length > 0 && (
            <Route path="/edit/:id" element={<EditUser />} />
          )} */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </StyleWrapper>
    </BrowserRouter>
  )
}

export default App
