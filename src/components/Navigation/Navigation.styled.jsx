import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  text-align: center;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: red;
  }
  color: black;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
  font-size: 28px;
`;
