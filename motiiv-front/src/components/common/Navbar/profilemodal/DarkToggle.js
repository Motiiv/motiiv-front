import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  display: flex;
  background-color: #4e4e4e;
  width: 4.5rem;
  height: 2.1rem;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;

  @media ${props => props.theme.mobile} {
    width: 2.2rem;
    height: 1rem;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 4.5rem;
  height: auto;
  right: 0;
  z-index: 1;
  cursor: pointer;
  :checked + ${SwitchLabel} {
    background-color: #2cff2c;
  }
`;

const SwitchButton = styled.span`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 100%;
  background: white;
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  transition: 0.2s;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 0.4rem);
    transform: translateX(-100%);
    @media ${props => props.theme.mobile} {
      left: calc(100% - 0.25rem);
    }
  }

  @media ${props => props.theme.mobile} {
    width: 0.6rem;
    height: 0.6rem;
    top: 0.2rem;
    left: 0.25rem;
  }
`;

const ToggleBtn = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel htmlFor={id}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};

export default React.memo(ToggleBtn);
