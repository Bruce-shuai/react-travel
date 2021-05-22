import React from 'react';
import styles from './HomePage.scss/HomePage.module.css'
import { Header, Footer, SideMenu, Carousel, ProductCollection, Cooperative } from '../../components';
import { Col, Row, Typography, Layout, Spin } from 'antd';
import sideImage1 from '../../assets/img/sider_2019_02-04-2.png';
import sideImage2 from '../../assets/img/sider_2019_02-04.png';
import sideImage3 from '../../assets/img/sider_2019_12-09.png';
// 首字母小写  和  首字母大写是不一样的意思...
import { withTranslation, WithTranslation } from 'react-i18next';
import axios from 'axios';
import { connect } from 'react-redux';
// 这个RootState用得太巧妙而且显得专业了,逻辑上也显得很清晰~ 学！模仿！
import { RootState } from '../../redux/store';
import {
  // fetchRecommendProductStartActionCreator,
  // fetchRecommendProductSuccessActionCreator,
  // fetchRecommendProductFailActionCreator
  giveMeDataActionCreator
} from '../../redux/recommendProducts/recommendProductsAction';

interface State {
  loading: boolean,
  error: string | null,
  productList: any[]
}

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
      dispatch(giveMeDataActionCreator());
    }
    // fetchStart: () => {
    //   // 这里是函数执行
    //   dispatch(fetchRecommendProductStartActionCreator())
    // },
    // fetchSuccess: (data: any) => {
    //   dispatch(fetchRecommendProductSuccessActionCreator(data))
    // },
    // fetchFail: (error: any) => {
    //   dispatch(fetchRecommendProductFailActionCreator(error))
    // }
  }
}

// interface PropsType {
//   loading: boolean,
//   productList: any[]
// }
// 注意： 这里的export没有default
// 我艹，这里的ReturnType的用法简直无敌！！ 这里的& 用法也新颖
type PropsType = WithTranslation &
 ReturnType<typeof mapStateToProps> & 
 ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<PropsType> {

  // constructor(props:any) {
  //   super(props)
  //   this.state = {
  //     loading: true,
  //     error: null,
  //     productList: []
  //   }
  // }


  /* 这里用的是Promise...then... */
  // componentDidMount() {
  //   // 仔细看看，这里的api其实是http请求... 
  //   // 这里的第二个参数是有什么效果呢？是用来配置header的信息
  //   // head请求可以作为get函数第二个参数传进来
  //   // 有空其实可以去了解了解http 请求这些内容
  //   // get()请求返回值是一个promise，所以用.then函数来处理
  //   axios.get("http://123.56.149.216:8080/api/shoppingCart", {
  //     headers: {
  //       "x-icode": "08BD99351DDCB26D",
  //     }
  //   }).then(({data}) => {   // 这里的data是个什么呢？！这里是在获取response的data？？
  //     this.setState({
  //       productList: data,
  //     })
  //   });
  // }

  /* 这里用的是async await */
  componentDidMount() {
    this.props.giveMeFetch()
  }

  render() {
    // 思考一个问题： 下面两行放在render外，为什么会报错
    const {t, loading, error, productList} = this.props;
    // const { productList, loading, error } = this.state;
    if (loading) {
      return <Spin 
      size='large'
      // 这是内联样式，注意写法，要会模仿
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
          products={productList[0].touristRoutes}
        />
        <ProductCollection
        // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
          title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
        // 我艹，这个用法有点特别！ type="warning" 显示的是黄色
          title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
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
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent))