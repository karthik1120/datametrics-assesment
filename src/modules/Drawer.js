import React from 'react'
import styled from 'styled-components'
import { apiProviderResponse, providerObj } from '../reduxConfig'
import { useDispatch, useSelector } from 'react-redux'
import AccordionComponent from './AccordionComponent'

const DrawerStyles = styled.div`
  position: fixed;
  top: 0;
  right: -280px;
  width: 28rem;
  height: 100%;
  background-color: white;
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
  padding: 0 20px;
  > div {
    border: none !important;
    background: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    &:before {
      background-color: white !important;
    }
  }
`

const Drawer = ({ open }) => {
  const dispatch = useDispatch()
  const apiProvider = useSelector(
    store => store.apiProvidersInfo.apiProviderResponse
  )

  const handleProviderAPI = async (api, expanded) => {
    const url = `https://api.apis.guru/v2/${api}.json`

    if (!Object.keys(apiProvider[api]).length && expanded) {
      const response = await fetch(url)
      const { apis } = await response.json()

      let updatedProvider = JSON.parse(JSON.stringify(apiProvider))
      updatedProvider[api] = apis

      dispatch(apiProviderResponse(updatedProvider))
      dispatch(providerObj(apis))
    }
  }

  return (
    <DrawerStyles open={open}>
      <DrawerHeader>Select Provider</DrawerHeader>
      <ProviderWrapper>
        {apiProvider &&
          Object.keys(apiProvider)?.map((provider, ind) => {
            return (
              <AccordionComponent
                key={ind}
                title={provider}
                handleProviderAPI={handleProviderAPI}
              />
            )
          })}
      </ProviderWrapper>
    </DrawerStyles>
  )
}

export default Drawer
