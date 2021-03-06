import React from 'react';
import logo from '../../assets/logo.svg';
// import styles from './Header.scss/Header.module.css';
import styles from './Header.module.css'
import { GlobalOutlined } from '@ant-design/icons';   // icon图标库
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';   // 这个react-redux还没使用过啊...
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../redux/hooks'; // useSelector 帮助我们从store中连接state  
import { useDispatch } from 'react-redux';
import { 
  changeLanguageActionCreator, 
  addLanguageActionCreator
} from '../../redux/language/languageActions';
// import { Dispatch } from 'redux';
// React.FC 首先是React.FunctionComponent的类型别名
// 然后React.FunctionComponent是封装的React函数类型定义
// 这里其实也是使用了泛型
// 记住TS中:后面的就是类型定义
export const Header: React.FC = () => {
  const {t} = useTranslation();
  const history = useHistory();
  // -------------------------------对应mapStateToProps-----------------------------------+
  const language = useSelector((state) => state.language.language)
  const languageList = useSelector((state) => state.language.languageList)
  // ------------------------------------------------------------------------------------+
  const dispatch = useDispatch();

 const menuClickHandler = (e) => {
   if (e.key === 'add') {
     dispatch(addLanguageActionCreator('新语言', 'new'))
   } else {
     dispatch(changeLanguageActionCreator(e.key))
   }
 }

  return <>
    <Layout className={styles['header-content']}>
      <div className={styles['header-firstLine']}>
         <div >
           <Typography.Text>{t("header.slogan")}</Typography.Text>
           {/* 这个Dropdown 有点操作的呀。。 */}
           <Dropdown.Button
           overlay={
             <Menu onClick={menuClickHandler}>
               {
                 languageList.map((l) => {
                   <Menu.Item>{l.name}</Menu.Item>
                 })
               }
               {/* <Menu.Item>中文</Menu.Item>
               <Menu.Item>English</Menu.Item> */}
               <Menu.Item>添加新语言</Menu.Item>
             </Menu>}
           icon={<GlobalOutlined />}
           >
           {language === 'zh' ? "中文" : "English"}
           </Dropdown.Button>
         </div>
         <Button.Group>
           {/* 加上/ 表示绝对路径是啥意思呢？ */}
           <Button onClick={() => history.push('/signIn')}>{t("header.signin")}</Button>
           <Button onClick={() => history.push('/rigister')}>{t("header.register")}</Button>
         </Button.Group>
       </div>
      <div className={styles['header-secondLine']}>
        <img src={logo} alt="" className={styles['App-logo']}/>
        {/* 这是排版文本字体的~ */}
        <Typography.Title 
          className={styles['header-title']}
        >{t("header.title")}</Typography.Title>
          {/* 厉害！ */}
        <Input.Search 
          placeholder='请输入旅游目的地、主题、或关键字'
          className={styles['header-input']}
          // 这里的onSearch事件是固定的, 这特么什么玩法，没见过呀
          onSearch={(keywords) => history.push('/search/' + keywords)}
        />
      </div>
      <Menu mode="horizontal" className={styles['header-menu']}>
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