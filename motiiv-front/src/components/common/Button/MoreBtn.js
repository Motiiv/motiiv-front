import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const RoundBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${props => (props.color ? props.color : props.theme.primary)};
  border: 1px solid
    ${props => (props.color ? props.color : props.theme.primary)};
  font-family: 'Spoqa-Han-Sans';
  font-size: 1.3rem;
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  @media ${props => props.theme.mobile375} {
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
  }
`;

function MoreBtn({ color, linkUrl, type, text, history, adId }) {
  const onClickMore = () => {
    linkUrl === 'detail'
      ? history.push(`/detail/${adId}`)
      : window.open(linkUrl);
  };
  return (
    <RoundBtn color={color} onClick={onClickMore}>
      {text} &nbsp; &#xE001;
    </RoundBtn>
  );
}
export default withRouter(React.memo(MoreBtn));
