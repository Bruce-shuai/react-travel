import React from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection } from './components';
import {productList1, productList2, productList3} from './mokeup';
import { Col, Row, Typography } from 'antd';
function App() {
  return (
    // style 模块化引用css
    <>
      <Header />
      {/* 显示主要的内容 */}
      {
        <div style={{height: 660}}>
          <Row>
          <Col span={8}>
            <SideMenu />
          </Col>
          <Col span={16}>
            <Carousel />
          </Col>
          </Row>
          {/* ---------------------- */}
          <ProductCollection
          // 我艹，这个用法有点特别！
            title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
            sideImage={sideImage}
            products={productList1}
          />
           {/* ---------------------- */}
        </div>
      }
      <Footer />
    </>
  );
}

export default App;

