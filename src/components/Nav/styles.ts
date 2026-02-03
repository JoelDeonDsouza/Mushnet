import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 70px;
  display: flex;
  font-size: 1rem;
  top: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 15px 50px;
  @media screen and (max-width: 960px) {
    padding: 15px 10px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 960px) {
    height: 40px;
  }
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 800;
  -webkit-text-stroke: 1px #000;
  color: #fff;
  letter-spacing: 1px;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavTextLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 10px;
  color: #090040;
  &:hover {
    color: #346751;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;
