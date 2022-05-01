import React, { useState } from 'react'
import styled from 'styled-components'

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RigthMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon onClick={() => setBurgerStatus(true)} />
      </RigthMenu>
      {burgerStatus &&
        <BurgerMenu show={burgerStatus}>
          <CloseWrapper>
            <CustumClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li><a href='#'>Use Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cyber Truck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Semi</a></li>
          <li><a href='#'>Test Drive</a></li>
          <li><a href='#'>Utillities</a></li>
          <li><a href='#'>Existing Inventory</a></li>
        </BurgerMenu>}
    </Container>
  )
}

export default Header

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px){
    display: none;
  }
`
const RigthMenu = styled.div`
  display: flex;
  align-item: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  TRANSITION: TRANSFORM 0.2S ease-in-out;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);
    a {
      font-weight: 600;

    }
  }

`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`
const CustumClose = styled(CloseIcon)`
  cursor: pointer;
`