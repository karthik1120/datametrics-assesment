import React from 'react'
import styled from 'styled-components'
import { apiProviderResponse, providerObj } from '../reduxConfig'
import { useDispatch, useSelector } from 'react-redux'

const DrawerStyles = styled.div`
  position: fixed;
  top: 0;
  right: -280px;
  width: 28rem;
  height: 100%;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 50px #b8b8b8;
  overflow: scroll;
  transform: translate3d(280px, 0px, 0px);
  transition: all 1s ease;
  opacity: 0;

  ${({ open }) =>
    open &&
    `
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
    right: 0px;
  `}
`

const DrawerHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 20px;
`

const ProviderWrapper = styled.div`
  display: grid;
  gap: 10px;
  padding: 0 30px;
`

const Drawer = ({ open }) => {
  const dispatch = useDispatch()
  const apiProvider = useSelector(
    store => store.apiProvidersInfo.apiProviderResponse
  )

  const res = useSelector(store => store.apiProvidersInfo)

  const handleProviderAPI = async api => {
    const url = `https://api.apis.guru/v2/${api}.json`

    if (!apiProvider[api]) {
      const response = await fetch(url)
      const { apis } = await response.json()

      const updatedProvider = [
        ...apiProvider.filter(i => i !== api),
        { [api]: apis },
      ]

      // const updatedProvider = apiProvider.reduce(
      //   (prv, curr) => (curr === api ? { [api]: apis } : [...prv]),
      //   []
      // )

      dispatch(apiProviderResponse(updatedProvider))
      dispatch(providerObj(apis))
    }
  }

  console.log('res', res)

  return (
    <DrawerStyles open={open}>
      <DrawerHeader>Select Provider</DrawerHeader>
      <ProviderWrapper>
        {apiProvider?.map((provider, ind) => {
          return (
            <div key={ind} onClick={() => handleProviderAPI(provider)}>
              {typeof provider === 'string' ? provider : Object.keys(provider)}
            </div>
          )
        })}
      </ProviderWrapper>
    </DrawerStyles>
  )
}

export default Drawer
