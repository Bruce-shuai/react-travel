import React from 'react';
// import styles from './Header.module.css';
import { Layout, Typography } from 'antd';
import { useTranslation } from 'react-i18next';


export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return <>
    <Layout.Footer>
      <Typography.Title level={4}>
        {/* 版权所有 @ React 旅游网 */}
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  </>
}