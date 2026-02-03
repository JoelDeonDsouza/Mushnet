import styled from 'styled-components';

export const InputContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 0px 80px;
  @media screen and (max-width: 960px) {
    min-height: 80vh;
    padding: 0px 8px;
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
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$isActive ? '#fff' : '#f5f5f5')};
  }
`;

export const BtnText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 10px;
`;
