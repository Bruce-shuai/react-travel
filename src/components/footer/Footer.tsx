import React from 'react';
import { Layout, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  // 这里的Translation甚至都不需要ts的类型定义吗？
  const { t } = useTranslation();
  const footerStyle = {
    marginLeft: 130,
    marginRight: 130,
    height: 140
  };
  return <>
    <Layout.Footer style={footerStyle}>
      <Typography.Title level={4}>
        {/* 版权所有 @ React 旅游网 */}
        {t("footer.detail")}
      </Typography.Title>
    </Layout.Footer>
  </>
}