import {
  InputContainer,
  LogoBlock,
  Logo,
  LogoText,
  InputWrapper,
  InputField,
  BaseBlock,
  TypeSearchContainer,
  BtnWrapper,
  BtnText,
  IconBox,
  IconWrapper,
  DropdownMenu,
  DropdownItem,
} from './styles';
// SearchInput Icon //
import { IoMdSearch } from 'react-icons/io';
import { TbTopologyStar3 } from 'react-icons/tb';
import { BsCpu, BsIncognito } from 'react-icons/bs';
// Logo //
import logo from '/imgs/logo.png';
// Hook //
import { useSearchEngine } from '../../hooks/useSearchEngine';

const SearchInput = () => {
  const {
    activeBtn,
    dropdownVisible,
    isIncognito,
    selectedEngine,
    filteredEngines,
    setDropdownVisible,
    handleModeChange,
    handleIncognitoToggle,
    handleEngineSelect,
  } = useSearchEngine();

  return (
    <InputContainer>
      <LogoBlock>
        <Logo src={logo} alt="Logo" />
        <LogoText>{selectedEngine.name}</LogoText>
      </LogoBlock>
      <InputWrapper>
        <InputField placeholder="What are you looking for?" />
        <BaseBlock>
          <TypeSearchContainer>
            <BtnWrapper
              $isActive={activeBtn === 'search' && !isIncognito}
              onClick={() => handleModeChange('search')}
            >
              <IoMdSearch size={18} color="#57595B" />
              <BtnText>Search</BtnText>
            </BtnWrapper>
            <BtnWrapper
              $isActive={activeBtn === 'analyze' && !isIncognito}
              onClick={() => handleModeChange('analyze')}
            >
              <TbTopologyStar3 size={18} color="#57595B" />
              <BtnText>Analyze</BtnText>
            </BtnWrapper>
          </TypeSearchContainer>
          <IconBox>
            <IconWrapper
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <BsCpu size={18} color="#57595B" />
              {dropdownVisible && (
                <DropdownMenu>
                  {filteredEngines.map((engine) => (
                    <DropdownItem
                      key={engine.id}
                      onClick={() => handleEngineSelect(engine)}
                      style={{
                        backgroundColor: selectedEngine.id === engine.id ? '#A8DF8E' : 'none',
                      }}
                    >
                      {engine.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </IconWrapper>
            <IconWrapper onClick={handleIncognitoToggle}>
              <BsIncognito size={20} color={isIncognito ? '#000' : '#57595B'} />
            </IconWrapper>
          </IconBox>
        </BaseBlock>
      </InputWrapper>
    </InputContainer>
  );
};

export default SearchInput;
