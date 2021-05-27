import React from 'react';
import { Header, Footer } from '../../components'; 
import styles from './MainLayout.module.css';

// 这个布局真的霸道！
export const MainLayout: React.FC = ({children}) => {
  return <>
    <Header />
      {/* 页面内容 */}
      <div className={styles['page-content']}>
        {/* 这里的children 的确用得好,用得太他妈的好了~ */}
        {children}
      </div>
    <Footer />
  </>
}