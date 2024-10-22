import React from 'react'
import styled from 'styled-components'

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

const Drawer = ({ open }) => {
  return <DrawerStyles open={open}>Drawer</DrawerStyles>
}

export default Drawer
