import React, { useState, useEffect } from 'react';
// 这个是react-router-dom 提供的match的类型定义...
// 使用useParams 来获取路由参数
import { RouteComponentProps, useParams } from 'react-router-dom';
// 注意：这里有一个问题：...
// interface PropTypes {
//   match: RouteComponentProps
// }
import axios from 'axios';
import { Spin, Row, Col, Divider, Typography, Anchor, Menu } from 'antd';
import styles from './DetailPage.module.css'
import { Header, Footer, ProductIntro, ProductComments } from '../../components';
import { DatePicker, Space } from 'antd';
import { commentMockData } from './mockup';
import { ProductDetailSlice } from '../../redux/productDetail/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';



const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}


export const DetailPage: React.FC<RouteComponentProps> = () => {
  const { touristRouteId } = useParams<MatchParams>(); 
  // const [loading, setLoading] = useState<boolean>(true);
  // const [product, setProduct] = useState<any>(null); // 网络中获取的数据，所以使用any类型
  // const [error, setError] = useState<string | null>(null);
  
  const loading = useSelector(state => state.productDetail.loading);
  const error = useSelector(state => state.productDetail.error);
  const product = useSelector(state => state.productDetail.data);
  
  const dispatch = useDispatch();
  // 似乎不能直接在useEffect旁写async
  useEffect(() => {
    const fetchData = async () => {
      // 这里是不需要返回值的
      dispatch(ProductDetailSlice.actions.fetchStart());
      try {
        // data 应该就是响应主题
        const {data} = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
        )
      dispatch(ProductDetailSlice.actions.fetchSuccess(data));
      } catch(error) {
        dispatch(ProductDetailSlice.actions.fetchFail(error.message))
      }
    }
    fetchData();   //函数定义函数调用都在这一个钩子里~
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
  return <>
    <Header />
      <div className={styles["page-content"]}>
        <Row>
          {/* 内容 */}
          <Col span={13}>
            <ProductIntro 
                title={product.title}
                shortDescription={product.shortDescription}
                price={product.price}
                coupons={product.coupons}
                points={product.point}
                discount={product.discount}
                rating={product.rating}
                // touristRoutePictures 这个是从哪儿来的呢？
                pictures={product.touristRoutePictures.map((p:any) => p.url)}
            />
          </Col>
          {/* 日历时间 */}
          <Col span={11}>
            <RangePicker open style={{marginTop:20}}/>
          </Col>
        </Row>
        {/* 产品简介 与 日期选择 */}
        <div className={styles['product-intro-container']}></div>
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
        {/* 产品特色 */}
        <div id='feature' className={styles['product-detail-container']}>
          <Divider orientation={'center'}>
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          {/* react 为了防止注入攻击 */}
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
          {/* react 为了防止注入攻击 */}
          <div style={{margin: 40}}>
            <ProductComments data={commentMockData} />
          </div>
        </div>
      </div>
    <Footer />
  </>
}