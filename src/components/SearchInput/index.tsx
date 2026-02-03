import { useState } from 'react';
import {
  InputContainer,
  InputWrapper,
  InputField,
  BaseBlock,
  TypeSearchContainer,
  BtnWrapper,
  BtnText,
  IconWrapper,
} from './styles';
// SearchInput Icon //
import { IoMdSearch } from 'react-icons/io';
import { TbTopologyStar3 } from 'react-icons/tb';
import { BsCpu, BsIncognito } from 'react-icons/bs';

const SearchInput = () => {
  const [activeBtn, setActiveBtn] = useState<'search' | 'analyze'>('search');
  return (
    <InputContainer>
      <InputWrapper>
        <InputField placeholder="What are you looking for?" />
        <BaseBlock>
          <TypeSearchContainer>
            <BtnWrapper $isActive={activeBtn === 'search'} onClick={() => setActiveBtn('search')}>
              <IoMdSearch size={18} color="#57595B" />
              <BtnText>Search</BtnText>
            </BtnWrapper>
            <BtnWrapper $isActive={activeBtn === 'analyze'} onClick={() => setActiveBtn('analyze')}>
              <TbTopologyStar3 size={18} color="#57595B" />
              <BtnText>Analyze</BtnText>
            </BtnWrapper>
          </TypeSearchContainer>
          <IconWrapper>
            <BsCpu size={18} color="#57595B" />
            <BsIncognito size={20} color="#57595B" />
          </IconWrapper>
        </BaseBlock>
      </InputWrapper>
    </InputContainer>
  );
};

export default SearchInput;
