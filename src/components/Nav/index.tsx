import {
  NavContainer,
  NavContent,
  LogoBlock,
  Logo,
  LogoText,
  DetailsContainer,
  NavTextLink,
} from './styles';
// Logo //
import logo from '/imgs/logo.png';

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <LogoBlock>
          <Logo src={logo} alt="Logo" />
          <LogoText>Mushnet</LogoText>
        </LogoBlock>
        <DetailsContainer>
          <NavTextLink href="https://github.com/JoelDeonDsouza/Mushnet">GitHub</NavTextLink>
        </DetailsContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
