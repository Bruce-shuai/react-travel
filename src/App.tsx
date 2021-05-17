import React from 'react';
import { Header, Footer, Content } from './components';
import { Layout } from 'antd';
function App() {
  return (
    // style 模块化引用css
    <>
      <Header />
      {/* 显示主要的内容 */}
      <Content /> 
      <Footer />
    </>
  );
}

export default App;

