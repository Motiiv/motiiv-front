import React from 'react'
import styled, {css} from 'styled-components';

function Tag() {
    const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 1.2rem;
    /* font-family: Cantarell; */
    font-weight: bold;
    font-size : 10px;
    border : 0.04rem solid black;
    border-radius: 1rem;

`;

return(
      <Tag>Tag</Tag>
  );
}
export default Tag;