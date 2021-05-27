import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import axios from 'axios';
import { Spin, Row, Col, Divider, Typography, Anchor, Menu } from 'antd';
import styles from './DetailPage.module.css'
import { Header, Footer, ProductIntro, ProductComments } from '../../components';
import { DatePicker, Space } from 'antd';
import { commentMockData } from './mockup';
import { ProductDetailSlice, getProductDetail } from '../../redux/productDetail/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { MainLayout } from '../../layouts/mainLayout';
const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}


export const DetailPage: React.FC<RouteComponentProps> = () => {

  // 通过useParams来获取路由参数
  const { touristRouteId } = useParams<MatchParams>(); 
  
  // 从store里获取数据   useSelector的用法其实还应该好好研究研究
  const loading = useSelector(state => state.productDetail.loading);
  const error = useSelector(state => state.productDetail.error);
  const product = useSelector(state => state.productDetail.data);
  
  const dispatch = useDispatch();
  // 似乎不能直接在useEffect旁写async
  useEffect(() => {
    dispatch(getProductDetail(touristRouteId));
    // const fetchData = async () => {

    // }
    // fetchData();   //函数定义函数调用都在这一个钩子里~
  }, []) 
  // 再来一个转菊花
  if (loading) {
    // 注意：这里必须要return
    return (
      <Spin
        size='large'
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}
      />
    )
  }
  if (error) {
    // 这里return是关键，如果还想要声明效果，可以再弄个组件放在这儿
    return <div>网站出错：{error}</div>
  }
  
  
  return <MainLayout>
      <div className={styles["page-content"]}>
        {/* 产品简介 与 日期选择 */}
        <div className={styles['product-intro-container']}>
        <Row>
          {/* 产品简介 */}
          <Col span={13}>
            <ProductIntro 
              title={product.title}
              shortDescription={product.description}
              price={product.originalPrice}
              // coupons 是个什么属性 好像没在接口里看见~
              coupons={product.coupons}
              points={product.points}
              discount={product.price}
              rating={product.rating}
              // 这里的map循环用得挺巧妙的
              pictures={product.touristRoutePictures.map((p:any) => p.url)}
            />
          </Col>
          {/* 日期选择 */}
          <Col span={11}>
            {/* 内联样式 */}
            <RangePicker open style={{marginTop:20}}/>
          </Col>
        </Row>
        </div>
        {/* 锚点菜单 */}
        <Anchor className={styles['product-detail-anchor']}>
          <Menu mode='horizontal'>
            <Menu.Item key='1'>
              <Anchor.Link href='#feature' title='产品特色'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Anchor.Link href='#fees' title='费用'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Anchor.Link href='#notes' title='预定须知'></Anchor.Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Anchor.Link href='#comments' title='用户评价'></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>
        {/* 产品特色  加上id是为了和锚点链接结合*/}
        <div id='feature' className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          {/* react 为了防止注入攻击,这个是特殊的HTML处理方式 */}
          <div 
            dangerouslySetInnerHTML={{__html: product.features}} 
            style={{margin: 50}}
          ></div>
        </div>
        {/* 费用 */}
        <div id='fees' className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          {/* react 为了防止注入攻击 */}
          <div 
            dangerouslySetInnerHTML={{__html: product.fees}} 
            style={{margin: 50}}
          ></div>
        </div>
        {/* 预定须知 */}
        <div id='notes' className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
            <Typography.Title level={3}>预定须知</Typography.Title>
          </Divider>
          {/* react 为了防止注入攻击 */}
          <div 
            dangerouslySetInnerHTML={{__html: product.notes}} 
            style={{margin: 50}}
          ></div>
        </div>
        {/* 商品评价 */}
        <div id='comments' className={styles['product-detail-container']}>
        <Divider orientation={'center'}>
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <div style={{margin: 40}}>
            <ProductComments data={commentMockData} />
          </div>
        </div>
      </div>
  </MainLayout>
}