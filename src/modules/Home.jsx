import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import Drawer from './Drawer'

const CenterButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const StyledButton = styled.button`
  padding: 8px 15px;
  border: none;
  background: #049dd2;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`
const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <CenterButtonWrapper>
        <StyledButton onClick={() => setOpen(prev => !prev)}>
          Explore web APIs
        </StyledButton>
      </CenterButtonWrapper>

      <Drawer open={open} />
    </Fragment>
  )
}

export default Home
