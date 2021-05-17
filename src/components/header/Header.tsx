import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.scss/Header.module.css';
import { GlobalOutlined } from '@ant-design/icons';   // icon图标库
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';

// React.FC 首先是React.FunctionComponent的类型别名
// 然后React.FunctionComponent是封装的React函数类型定义
// 这里其实也是使用了泛型
// 记住TS中:后面的就是类型定义
export const Header: React.FC = () => {
  return <>
    <Layout className={styles.Header}>
       <div className={styles.Top}>
         <div className={styles.Left}>
           <Typography.Text className={styles.Text}>让旅游更加简单</Typography.Text>
           {/* 这个Dropdown 有点操作的呀。。 */}
           <Dropdown.Button
           overlay={
             <Menu>
               <Menu.Item>中文</Menu.Item>
               <Menu.Item>English</Menu.Item>
             </Menu>}
           icon={<GlobalOutlined />}
           >
           语言
           </Dropdown.Button>
         </div>
         <Button.Group>
           <Button>登录</Button>
           <Button>注册</Button>
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