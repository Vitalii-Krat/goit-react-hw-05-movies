import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListMoviesStyled = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  list-style: none;
`;

export const ItemMoviesStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  margin-bottom: 10px;
`;
