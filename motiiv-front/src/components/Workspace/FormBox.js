import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import trashIcon from '../../assets/global/trash_box.png';

const WorkSpaceInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 42rem;
  padding: 3.5rem 3.2rem;
  background: white;
  border-radius: 1rem;
  position: absolute;
  cursor: auto;
  top: 12rem;
  filter: drop-shadow(2px 5px 10px rgba(0, 0, 0, 0.15));
  z-index: 3;
  @media ${props => props.theme.maxdesktop} {
    right: ${props => (props.idx === 5 ? '-7rem' : null)};
    left: ${props => (props.idx === 0 ? '-7rem' : null)};
  }
`;
const Triangle = styled.div`
  z-index: 3;
  position: absolute;
  background-color: white;
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
`;

const LineInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.lightGray};
  border-radius: 1rem;
  border: none;
  margin-bottom: 2rem;
  outline: none;
  &:nth-child(2) {
    margin-bottom: 1rem;
    &.warning {
      box-shadow: 0 0 1.5pt 1pt #ff0202;
    }
  }
`;

const RoundBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 1.6rem;
  padding: 1.2rem 3rem;
  background: white;
  border-radius: 3rem;
  border: 1px solid black;
  cursor: pointer;
  &:nth-child(1) {
    margin-right: 1.5rem;
    &:hover {
      color: white;
      background-color: black;
      font-weight: 700;
    }
  }
  &:nth-child(2) {
    color: white;
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

function FormBox({ space, idx, hideForm, isShow, isCreate = false }) {
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
        <WorkSpaceInputBox idx={idx} ref={myRef}>
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
              className={
                spaceName && urlInput && !inValidateUrl ? 'active' : ''
              }
            >
              확인
            </RoundBtn>
            {!isCreate && <TranshIcon src={trashIcon} />}
          </EndWrapper>
        </WorkSpaceInputBox>
        <Triangle></Triangle>
      </>
    )
  );
}

export default FormBox;
