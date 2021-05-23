import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.scss/Header.module.css';
import { GlobalOutlined } from '@ant-design/icons';   // icon图标库
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
// import store from '../../redux/store';
import {RootState} from '../../redux/store';
// import { StaticContext } from 'react-router';   // 这个是什么鬼？
import { 
  changeLanguageActionCreator, 
  addLanguageActionCreator
} from '../../redux/language/languageActions';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
// 这里是给mapDispatchToProps中参数dispatch的类型定义
import { Dispatch } from 'redux';


// import { LanguageState } from '../../redux/language/languageReducer';
// interface State {
//   language: 'zh' | 'en';
//   languageList: {name: string, code: string}[];
// }

// 这里的state 是 store里面的state
const mapStateToProps = (state: RootState) => {
  // 返回的是一个对象，绑定给了该组件的props
  return { 
    language: state.language.language,
    languageList: state.language.languageList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  // 返回的是一个对象
  return {
    changeLanguage: (code: 'zh' | 'en') => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code);
      dispatch(action);
    }
  }
}

// React.FC 首先是React.FunctionComponent的类型别名
// 然后React.FunctionComponent是封装的React函数类型定义
// 记住TS中 : 后面的就是类型定义
// ReturnType 反向注入： 厉害~  这里的type相当于定义了一个新的类型
type PropsType = RouteComponentProps &  // react-router 路由props类型
  WithTranslation &  // i18n props类型
  ReturnType<typeof mapStateToProps> &   // redux store 映射类型
  ReturnType<typeof mapDispatchToProps>  // redux dispatch 映射类型


//  类组件的state类型定义是放在 React.Component泛型的第二个参数上的
class HeaderComponent extends React.Component<PropsType> {
 
//  constructor(props: RouteComponentProps<{}, StaticContext, unknown> | Readonly<RouteComponentProps<{}, StaticContext, unknown>>) {
//    super(props);
//    const storeState = store.getState();
  
//   //  this.state = {
//   //    language: storeState.language,
//   //    languageList: storeState.languageList,
//   //  }
//   //  store.subscribe(() => {
//   //    const storeState = store.getState();
//   //    this.setState({
//   //      language: storeState.language,
//   //      languageList: storeState.languageList
//   //    })
//   //  });
// }

handleClick = (e: any) => {
  // console.log('e', e);  // 这里为什么要用e，很重要，要想明白~
  if(e.key === 'add') {
    // const action = addLanguageActionCreator('新语言', 'new')
    // store.dispatch(action);
    // 所有的内容都已经在mapDispatchToProps里被封装了
    this.props.addLanguage('新语言', 'new');
  } else {
    // const action = changeLanguageActionCreator(e.key)
    // store.dispatch(action);
    this.props.changeLanguage(e.key);
  }
}
 
  render() {
    const {t, history, language, languageList} = this.props;    // history是关于路由的~
    return <>
    <Layout className={styles.Header}>
      <div className={styles.Top}>
        <div className={styles.Left}>
          <Typography.Text className={styles.Text}>{t("header.slogan")}</Typography.Text>
          {/* 这个Dropdown 有点操作的呀。。 */}
          <Dropdown.Button
            overlay={
            //  事件监听放在外面
            <Menu onClick={this.handleClick}>
              {
                languageList.map((l) => {
                  // console.log('l', l);
                  return (
                   //  这个key的使用似乎非常的关键
                    <Menu.Item key={l.code}>{l.name}</Menu.Item>
                  )
                })
              }
              <Menu.Item key='add'>添加新语言</Menu.Item>
              {/* <Menu.Item>中文</Menu.Item>
              <Menu.Item>English</Menu.Item> */}
            </Menu>}
          icon={<GlobalOutlined />}
          >
          {language === 'zh' ? "中文" : "English"}
          </Dropdown.Button>
        </div>
        <Button.Group>
          {/* 真好用 */}
          <Button onClick={() => history.push('signIn')}>{t("header.signin")}</Button>
          <Button onClick={() => history.push('rigister')}>{t("header.register")}</Button>
        </Button.Group>
      </div>
      <div className={styles.Input_Title}>
       <img src={logo} alt="" />
       {/* 这是排版文本字体的~ */}
       <Typography.Title level={3} className={styles.Title}>{t("header.title")}</Typography.Title>
         {/* 厉害！ */}
       <Input.Search 
         placeholder='请输入旅游目的地、主题、或关键字'
         className={styles.Input}
       />
      </div>
      <Menu mode="horizontal" className={styles.Menu}>
         <Menu.Item key={1}>
          {t("header.home_page")}
         </Menu.Item>
         <Menu.Item key={2}>
          {t("header.weekend")}
         </Menu.Item>
         <Menu.Item key={3}>
          {t("header.group")}
         </Menu.Item>
         <Menu.Item key={4}>
          {t("header.backpack")}
         </Menu.Item>
         <Menu.Item key={5}>
          {t("header.private")}
         </Menu.Item>
         <Menu.Item key={6}>
          {t("header.cruise")}
         </Menu.Item>
         <Menu.Item key={7}>
          {t("header.hotel")}
         </Menu.Item>
         <Menu.Item key={8}>
          {t("header.local")}
         </Menu.Item>
         <Menu.Item key={9}>
          {t("header.theme")}
         </Menu.Item>
         <Menu.Item key={10}>
          {t("header.custom")}
         </Menu.Item>
         <Menu.Item key={11}>
          {t("header.study")}
         </Menu.Item>
         <Menu.Item key={12}>
          {t("header.visa")}
         </Menu.Item>
         <Menu.Item key={13}>
          {t("header.enterprise")}
         </Menu.Item>
         <Menu.Item key={14}>
          {t("header.high_end")}
         </Menu.Item>
         <Menu.Item key={15}>
          {t("header.outdoor")}
         </Menu.Item>
         <Menu.Item key={16}>
          {t("header.insurance")}
         </Menu.Item>
       </Menu>
     </Layout>
  </>
  }

}

export const Header = connect(mapStateToProps, mapDispatchToProps)
  (withTranslation()(withRouter(HeaderComponent))
)
// export default HeaderComponent;