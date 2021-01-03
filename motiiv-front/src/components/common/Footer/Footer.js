import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../assets/global/gray_logo.png';
import { withRouter } from 'react-router-dom';

function Footer({ history }) {
  const goToPrivacy = () => {
    history.push('privacy');
  };
  const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem;
  `;

  const Text = styled.h6`
    color: ${props => props.theme.gray};
    font-size: 1.6rem;
    font-weight: 400;
    margin: 1.5rem 0;
  `;
  const FooterLogo = styled.img`
    height: 2rem;
  `;
  const GoPrivacy = styled.a`
    color: ${props => props.theme.gray};
    font-size: 1.6rem;
    text-decoration: underline;
    /* cursor: pointer; */
  `;

  return (
    <FooterWrapper>
      <FooterLogo src={logoImg} />
      <Text>
        <b>Copyright</b> motiiv All right reserved
      </Text>
      <GoPrivacy>개인정보처리방침</GoPrivacy>
    </FooterWrapper>
  );
}

export default withRouter(Footer);
