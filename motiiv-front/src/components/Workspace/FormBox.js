import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import trashIcon from '../../assets/global/trash_box.png';
import { useDispatch } from 'react-redux';
import {
  deleteWorkspace,
  createWorkspace,
  updateWorkspace,
} from '../../modules/mymotiiv';

const popUp = keyframes`
  0% {
    transform: scale(0.5);
    opacity:0;
  }

  100% {
    transform: scale(1);
    opacity:1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity:0;
  }

  100% {
    opacity:1;
  }
`;

const WorkSpaceInputBox = styled.div`
  transform-origin: center top;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 42rem;
  padding: 3.5rem 3.2rem;
  background: var(--formbox);
  border-radius: 1rem;
  position: absolute;
  cursor: auto;
  top: 12rem;
  filter: drop-shadow(2px 5px 10px rgba(0, 0, 0, 0.15));
  z-index: 3;
  @media ${props => props.theme.maxdesktop} {
    right: ${props => (props.moveLeft ? '-7rem' : null)};
    left: ${props => (props.idx === 0 ? '-7rem' : null)};
  }
  animation: ${popUp} 0.3s both ease-in;
`;
const Triangle = styled.div`
  z-index: 3;
  position: absolute;
  background-color: var(--formbox);
  text-align: left;
  top: 12.7rem;
  left: calc(50% - 2.3rem);
  transform: translateX(-50%);
  transform: rotate(180deg) skewX(-30deg) scale(1, 0.866);
  width: 3rem;
  height: 3rem;
  border-top-right-radius: 20%;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: inherit;
    width: 3rem;
    height: 3rem;
    border-top-right-radius: 20%;
  }
  &:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  &:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
  animation: ${fadeIn} 0.1s both ease-in;
  animation-delay: 0.25s;
`;

const LineInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  background: var(--inputline);
  border-radius: 1rem;
  border: none;
  margin-bottom: 2rem;
  outline: none;
  color: var(--categorytext);
  &:nth-child(2) {
    margin-bottom: 1rem;
    &.warning {
      box-shadow: 0 0 1.5pt 1pt #ff0202;
    }
  }
  &::placeholder {
    color: var(--placeholder);
  }
`;

const RoundBtn = styled.button`
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 1.6rem;
  padding: 1.2rem 3rem;
  background: transparent;
  border-radius: 3rem;
  border: var(--roundbtn);
  color: var(--swiperafter);
  cursor: pointer;
  &:nth-child(1) {
    margin-right: 1.5rem;
    &:hover {
      color: white;
      border: 1px solid transparent;
      background-color: black;
      font-weight: 700;
    }
  }
  &:nth-child(2) {
    color: var(--formbox);
    background: ${({ theme }) => theme.gray};
    cursor: auto;
    border: none;
    &.active {
      cursor: pointer;
      color: white;
      background: black;
      color: ${({ theme }) => theme.primary};
      font-weight: 700;
    }
  }
  &:focus {
    outline: none;
  }
`;

const TranshIcon = styled.img`
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 0;
  bottom: 0;
  cursor: pointer;
  &:hover {
    filter: invert(100%);
  }
`;

const EndWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const WarningText = styled.p`
  visibility: ${props => (props.warning ? 'visible' : 'hidden')};
  color: #ff0202;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

function FormBox({
  hasToShift,
  space,
  idx,
  hideForm,
  isShow,
  isCreate = false,
}) {
  const dispatch = useDispatch();
  const [inValidateUrl, SetInValidateUrl] = useState(false);
  const [spaceName, SetSpaceName] = useState('');
  const [urlInput, SetUrlInput] = useState('');
  // 아웃 사이드 클릭
  const myRef = useRef();
  const reSetForm = () => {
    hideForm();
    SetSpaceName();
    SetUrlInput();
    SetInValidateUrl(false);
  };
  const handleClickOutside = e => {
    if (hideForm && !myRef?.current?.contains(e.target)) {
      reSetForm();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    space && SetSpaceName(space.name);
    space && SetUrlInput(space.url);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isShow]);

  const onChangeName = e => {
    SetSpaceName(e.target.value);
  };
  const onChangeUrl = e => {
    SetUrlInput(e.target.value);
    validURL(e.target.value) ? SetInValidateUrl(false) : SetInValidateUrl(true);
  };
  const onDeleteSpace = () => {
    dispatch(deleteWorkspace(space.id));
    reSetForm();
  };
  const onCreateSpace = () => {
    const spaceContent = {
      name: spaceName,
      url: urlInput,
    };
    isCreate
      ? dispatch(createWorkspace(spaceContent))
      : dispatch(updateWorkspace({ spaceContent, id: space.id }));
    reSetForm();
  };
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  const validURL = str => {
    return !str || pattern.test(str);
  };

  return (
    isShow && (
      <>
        <WorkSpaceInputBox
          idx={idx}
          moveLeft={hasToShift && (idx === 5 || isCreate)}
          ref={myRef}
        >
          <LineInput
            placeholder="워크스페이스의 이름을 입력해주세요"
            value={spaceName}
            onChange={onChangeName}
          ></LineInput>
          <LineInput
            className={inValidateUrl ? 'warning' : ''}
            placeholder="URL을 입력해주세요"
            value={urlInput}
            onChange={onChangeUrl}
          ></LineInput>
          <WarningText warning={inValidateUrl}>
            올바른 URL형식을 입력해 주세요
          </WarningText>
          <EndWrapper>
            <RoundBtn onClick={reSetForm}>취소</RoundBtn>
            <RoundBtn
              onClick={onCreateSpace}
              className={
                spaceName && urlInput && !inValidateUrl ? 'active' : ''
              }
            >
              확인
            </RoundBtn>
            {!isCreate && (
              <TranshIcon onClick={onDeleteSpace} src={trashIcon} />
            )}
          </EndWrapper>
        </WorkSpaceInputBox>
        <Triangle></Triangle>
      </>
    )
  );
}

export default React.memo(FormBox);
