import React from 'react';
import styles from './HomePage.scss/HomePage.module.css'
import { Header, Footer, SideMenu, Carousel, ProductCollection, Cooperative } from '../../components';
import {productList1, productList2, productList3} from './mokeup';
import { Col, Row, Typography, Layout } from 'antd';
import sideImage1 from '../../assets/img/sider_2019_02-04-2.png';
import sideImage2 from '../../assets/img/sider_2019_02-04.png';
import sideImage3 from '../../assets/img/sider_2019_12-09.png';
// 首字母小写  和  首字母大写是不一样的意思...
import { withTranslation, WithTranslation } from 'react-i18next';
import axios from 'axios';


interface State {
  productList: any[]
}

// 注意： 这里的export没有default
class HomePageComponent extends React.Component<WithTranslation, State> {

  constructor(props){
    super(props)
    this.state = {
      productList: []
    }
  }

  componentDidMount() {
    // 仔细看看，这里的api其实是http请求... 
    // 这里的第二个参数是有什么效果呢？是用来配置header的信息
    // head请求可以作为get函数第二个参数传进来
    // 有空其实可以去了解了解http 请求这些内容
    // get()请求返回值是一个promise，所以用.then函数来处理
    axios.get("http://123.56.149.216:8080/api/shoppingCart", {
      headers: {
        "x-icode": "08BD99351DDCB26D",
      }
    })
  }

  render() {
    const {t} = this.props;
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
          title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommend")}</Typography.Title>}
          sideImage={sideImage1}
          products={productList1}
        />
        <ProductCollection
        // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
          title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
        // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
          title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
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
    )
  }
}

// ()() 可以表示是 高阶组件的高阶组件  第一个小括号表示的是命名空间 
export const HomePage = withTranslation()(HomePageComponent)