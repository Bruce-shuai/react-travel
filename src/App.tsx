import React from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection, Cooperative } from './components';
import {productList1, productList2, productList3} from './mokeup';
import styles from './App.scss/App.module.css';
import { Col, Row, Typography, Layout } from 'antd';
import sideImage1 from './assets/img/sider_2019_02-04-2.png';
import sideImage2 from './assets/img/sider_2019_02-04.png';
import sideImage3 from './assets/img/sider_2019_12-09.png';
function App() {
  return (
    // style 模块化引用css
    <Layout>
      <Header />
      {/* 显示主要的内容 */}
      {
        <div className={styles.content}>
          <Row>
          <Col span={7}>
            <SideMenu />
          </Col>
          <Col span={16}>
            <Carousel />
          </Col>
          </Row>
          {/* ---------------------- */}
          <ProductCollection
          // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
            title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductCollection
          // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
            title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>}
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
          // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
            title={<Typography.Title level={3} type="success">国内推荐</Typography.Title>}
            sideImage={sideImage3}
            products={productList3}
          />
           {/* ---------------------- */}
           {/* 合作企业组件 */}
          <Cooperative />
        </div>
      }
      <Footer />
    </Layout>
  );
}

export default App;

