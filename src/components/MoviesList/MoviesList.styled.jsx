import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListMoviesStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 510px;
`;

export const CardMoviesStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  margin-bottom: 10px;
  border: 1px solid grey;
  box-shadow: 3px 3px blue, -1em 0 0.4em lightblue;
  width: 300px;

  &:hover {
    box-shadow: 3px 3px lightcoral, -1em 0 0.4em lightcoral;
    transform: scale(1.012);
    transition: 300ms;
  }
`;

export const MovieTitleStyled = styled.p`
  display: contents;
`;
