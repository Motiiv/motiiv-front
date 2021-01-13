import React from 'react';
import styled, { css } from 'styled-components';
import { getCategoryVideos } from '../../../modules/video';
import { useDispatch } from 'react-redux';

const TitleText = styled.div`
  font-size: 1.6rem;
  padding: 0.9rem 2.4rem;
  padding-right: 0;
  padding-top: 1.3rem;
  ${props =>
    props.choice === props.idx
      ? css`
          font-weight: 700;
        `
      : css`
          font-weight: 400;
        `};
`;
const MenuWrapper = styled.div`
  width: 100%;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding-right: 1.1rem;
  ${props =>
    props.choice === props.idx
      ? css`
          border: 1px solid ${({ theme }) => theme.primary};
        `
      : null};
  &:hover {
    background-color: ${({ theme }) => theme.lightGray};
  }
`;
/* const TitleIconBox = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  border-radius: 0.5rem;
`; */
function Menu({ word, choice, idx, onHandleMenuChoice, filters }) {
  const dispatch = useDispatch();

  const onClickHandle = evt => {
    onHandleMenuChoice(idx, evt.currentTarget.attributes.name.value);
    console.log(filters);
    dispatch(getCategoryVideos({ keyword: idx, filters: filters }));
  };
  return (
    <MenuWrapper idx={idx} choice={choice} name={word} onClick={onClickHandle}>
      <TitleText idx={idx} choice={choice}>
        {word}
      </TitleText>
      {/*       <TitleIconBox
        src={choice === idx ? MenuActive : MenuDefault}
      ></TitleIconBox> */}
    </MenuWrapper>
  );
}

export default React.memo(Menu);
