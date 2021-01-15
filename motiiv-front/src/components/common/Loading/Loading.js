import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 40, padding: '3rem' }} spin />
);

function Loading({ margin }) {
  return (
    <Spin
      indicator={antIcon}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: margin,
        color: '#2cff2c',
      }}
    />
  );
}

export default React.memo(Loading);
