import { Space, Spin } from 'antd';
import React from 'react';

const Spinner = () => {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
            }}
        >
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </Space>
    );
};

export default Spinner;