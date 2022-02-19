import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ConteinerImagesMovies = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListAdditionalStyled = styled.ul`
  justify-content: center;
  display: flex;
  padding: 20px;
`;

export const DetailsContainerStyled = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 470px;
`;

export const LinkStyled = styled(Link)`
  padding: 20px;
  font-size: 18px;
  text-align: center;
`;

export const TitleStyled = styled.h3`
  text-align: center;
`;
