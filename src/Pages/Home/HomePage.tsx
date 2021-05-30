import React from 'react';
import styles from './HomePage.scss/HomePage.module.css'
import { SideMenu, Carousel, ProductCollection, Cooperative } from '../../components';
import { Col, Row, Typography, Layout, Spin } from 'antd';
import sideImage1 from '../../assets/img/sider_2019_02-04-2.png';
import sideImage2 from '../../assets/img/sider_2019_02-04.png';
import sideImage3 from '../../assets/img/sider_2019_12-09.png';
// 首字母小写  和  首字母大写是不一样的意思...
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
// 这个RootState用得太巧妙而且显得专业了,逻辑上也显得很清晰~ 学！模仿！
import { RootState } from '../../redux/store';
import { giveMeDataActionCreator } from '../../redux/recommendProducts/recommendProductsAction';
import { MainLayout } from '../../layouts/mainLayout';

// 这里的rootState 让 state的逻辑显示得非常的清晰！
const mapStateToProps = (state: RootState) => {
  // 这里是一个返回值
  return {
    productList: state.recommendProducts.productList,
    error: state.recommendProducts.error,
    loading: state.recommendProducts.loading,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    giveMeFetch: () => {
      return dispatch(giveMeDataActionCreator());
    }
  }
}


//  ReturnType 这里用得好！
type PropsType = WithTranslation &
 ReturnType<typeof mapStateToProps> & 
 ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.giveMeFetch()
  }
  render() {
    const {t, loading, error, productList} = this.props;
    // 转菊花~
    if (loading) {
      return <Spin 
        size='large'
        // 这是行内样式，注意写法，要会模仿
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    }
    if (error) {
      return <div>网站出错: {error}</div>
    }
    return (
      <MainLayout>
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
          title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommend")}</Typography.Title>}
          sideImage={sideImage1}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
          sideImage={sideImage2}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
          sideImage={sideImage3}
          products={productList[0].touristRoutes}
        />
         {/* ---------------------- */}
         {/* 合作企业组件 */}
        <Cooperative />
      </div>
    }
      </MainLayout>
    )
  }
}

// ()() 可以表示是 高阶组件的高阶组件  第一个小括号表示的是命名空间 
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent))