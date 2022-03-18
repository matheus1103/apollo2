// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';
type MenuProps = {
  open: boolean,
  setOpen: (open:boolean)=> void
}
const Menu = ({ open }:MenuProps) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <span role="img" aria-label="Drone">✈️</span>
        Drone
        </Link>
      <Link to="/contact">
        <span role="img" aria-label="contact">🚀</span>
        Apollo!
      </Link>
    </StyledMenu>
  )
}

export default Menu;