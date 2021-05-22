import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.scss/Header.module.css';
import { GlobalOutlined } from '@ant-design/icons';   // icon图标库
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import store, {RootState} from '../../redux/store';
import { StaticContext } from 'react-router';
import {changeLanguageActionCreator, addLanguageActionCreator} from '../../redux/language/languageActions';
import { connect } from 'react-redux';
import { WithTranslation } from 'react-i18next';
// dispatch的类型定义从redux里去寻找
import { Dispatch } from 'redux';


// import { LanguageState } from '../../redux/language/languageReducer';
interface State {
  language: 'zh' | 'en';
  languageList: {name: string, code: string}[];
}

// 这里的state 是 store里面的state
const mapStateToProps = (state: RootState) => {
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
// 这里其实也是使用了泛型
// 记住TS中:后面的就是类型定义

type PropsType = RouteComponentProps &  // react-router 路由props类型
 WithTranslation &  // i18n props类型
 ReturnType<typeof mapStateToProps> &   // redux store 映射类型
 ReturnType<typeof mapDispatchToProps>  // redux dispatch 映射类型
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
  console.log('e', e);
  // 这里采用e还是挺好的
  if(e.key === 'add') {
    // const action = addLanguageActionCreator('新语言', 'new')
    // store.dispatch(action);
    this.props.addLanguage('新语言', 'new');
  } else {
    // const action = changeLanguageActionCreator(e.key)
    // store.dispatch(action);
    this.props.changeLanguage(e.key);
  }
}
 
  render() {
  const {history} =  this.props;
     return <>
    <Layout className={styles.Header}>
       <div className={styles.Top}>
         <div className={styles.Left}>
           <Typography.Text className={styles.Text}>让旅游更加简单</Typography.Text>
           {/* 这个Dropdown 有点操作的呀。。 */}
           <Dropdown.Button
           overlay={
            //  事件监听放在外面
             <Menu onClick={this.handleClick}>
               {
                 this.props.languageList.map((l) => {
                  console.log('l', l);
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
           {this.props.language === 'zh' ? "中文" : "English"}
           </Dropdown.Button>
         </div>
         <Button.Group>
           {/* 真好用 */}
           <Button onClick={() => history.push('signIn')}>登录</Button>
           <Button onClick={() => history.push('rigister')}>注册</Button>
         </Button.Group>
       </div>
       <div className={styles.Input_Title}>
        <img src={logo} alt="" />
        {/* 这是排版文本字体的~ */}
        <Typography.Title level={3} className={styles.Title}>React 旅游网</Typography.Title>
          {/* 厉害！ */}
        <Input.Search 
          placeholder='请输入旅游目的地、主题、或关键字'
          className={styles.Input}
        />
       </div>
       <Menu mode="horizontal" className={styles.Menu}>
         <Menu.Item key={1}>
           旅游首页
         </Menu.Item>
         <Menu.Item key={2}>
           周末游
         </Menu.Item>
         <Menu.Item key={3}>
           跟团游
         </Menu.Item>
         <Menu.Item key={4}>
           自由行
         </Menu.Item>
         <Menu.Item key={5}>
           私家团
         </Menu.Item>
         <Menu.Item key={6}>
           游轮
         </Menu.Item>
         <Menu.Item key={7}>
           酒店+景点
         </Menu.Item>
         <Menu.Item key={8}>
           当地玩乐
         </Menu.Item>
         <Menu.Item key={9}>
           主题游
         </Menu.Item>
         <Menu.Item key={10}>
           定制游
         </Menu.Item>
         <Menu.Item key={11}>
           游学
         </Menu.Item>
         <Menu.Item key={12}>
           签证
         </Menu.Item>
         <Menu.Item key={13}>
           企业游
         </Menu.Item>
         <Menu.Item key={14}>
           高端游
         </Menu.Item>
         <Menu.Item key={15}>
           爱玩户外
         </Menu.Item>
         <Menu.Item key={16}>
           保险
         </Menu.Item>
       </Menu>
     </Layout>
  </>
 }

}


export const Header = connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderComponent))
// export default HeaderComponent;