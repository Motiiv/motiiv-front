import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

function Loading({ margin }) {
  return (
    <Spin
      indicator={antIcon}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: margin,
        color: '#999',
      }}
    />
  );
}

export default Loading;
