import React from 'react'
import { useSelector } from 'react-redux'

const InformationPage = () => {
  const apiProvider = useSelector(store => store.apiProvidersInfo)
  console.log('apiProvider-----', apiProvider)
  return <div>InformationPage</div>
}

export default InformationPage
