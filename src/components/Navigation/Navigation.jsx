import { NavLinkStyled, NavStyled } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </NavStyled>
    </nav>
  );
}
