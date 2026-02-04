import styled from 'styled-components';

export const InputContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 0px 80px;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    min-height: 80vh;
    padding: 0px 20px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Logo = styled.img`
  width: 75px;
  height: 75px;
  @media screen and (max-width: 960px) {
    width: 50px;
    height: 50px;
  }
`;

export const LogoText = styled.span`
  font-size: 36px;
  font-weight: 800;
  -webkit-text-stroke: 1px #000;
  color: #fff;
  letter-spacing: 1px;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  width: 60%;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  outline: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:focus-visible {
    outline: none;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const BaseBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`;

export const TypeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #ececec;
  padding: 4px;
  border-radius: 8px;
`;

export const BtnWrapper = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => (props.$isActive ? '#fff' : 'transparent')};
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: ${(props) => (props.$isActive ? '#fff' : '#f5f5f5')};
  }
`;

export const BtnText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 160px;
  transform: translateX(-40%);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  color: #000;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
  display: block;
  &:hover {
    background-color: #eeeeee;
  }
  @media screen and (max-width: 960px) {
    padding: 10px 0;
  }
`;
