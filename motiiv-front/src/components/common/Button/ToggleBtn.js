import React from 'react';
import styled from 'styled-components';

const SwitchLabel = styled.label`
  display: flex;
  background-color: #4e4e4e;
  width: 45px;
  height: 21px;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
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
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background: white;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: 0.2s;
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 4px);
    transform: translateX(-100%);
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

export default ToggleBtn;
