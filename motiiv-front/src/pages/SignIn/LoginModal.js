import React from 'react';
import styled from 'styled-components';


/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => (props.show === true ? 'flex' : 'none')};

  position: absolute;
  top:5rem;
  right:3.5rem;
  z-index:10;

  width: 28rem;
  height:41.3rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0.2rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);

  justify-content: center;
  align-items:center;
  flex-direction: column;

  font-family : 'Spoqa-Han-Sans';
`;

function LoginModal(showModal) {

    

    return (
        <ModalWrap show = {showModal}>
        </ModalWrap>
    );
  }
  
export default LoginModal;