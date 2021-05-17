import React from 'react';
import styles from './Header.module.css';
import { Layout, Typography } from 'antd';

export const Footer: React.FC = () => {
  return <>
    <Layout.Footer>
      <Typography.Title level={4}>
        版权所有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  </>
}