import React from 'react';
import { Row, Col } from 'antd';
import { SideMenu } from '../sideMenu/SideMenu'; 
import styles from './Content.scss/Content.module.css';


export const Content: React.FC = () => {
  return <div className={styles.Content}>
    <Row>
      <Col span={8}>
        <SideMenu />
      </Col>
      <Col span={16}>走马灯</Col>
    </Row>
  </div>
}