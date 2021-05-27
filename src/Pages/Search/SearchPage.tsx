import React, {useEffect} from 'react';
import styles from './Search.module.css';
import { Header, Footer, FilterArea, ProductList } from '../../components';
import { useLocation, useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { searchProduct } from '../../redux/productSearch/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { MainLayout } from '../../layouts/mainLayout';

interface MatchParams {
  keywords: string
}

export const SearchPage: React.FC = () => {
  // useParams的用法要好好复习复习~
  const { keywords } = useParams<MatchParams>();

  const loading = useSelector(state => state.productSearch.loading);
  const error = useSelector(s => s.productSearch.error);
  const pagination = useSelector(s => s.productSearch.pagination);
  const productList = useSelector(s => s.productSearch.data);
  
  const dispatch = useDispatch();
  // useLocation的用法好像有点忘了
  const location = useLocation();  
  
  // 这里的location 似乎很巧妙，但是我TM不知道这是啥意思呀~~ 
  useEffect(() => {
    dispatch(searchProduct({nextPage: 1, pageSize: 10, keywords}))
  }, [location])

  const onPageChange = (nextPage: any, pageSize: any) => {
    dispatch(searchProduct({nextPage, pageSize, keywords}))
  }

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
  
  return <MainLayout>
    <div className={styles['page-content']}>
      {/* 分类过滤器 */}
      <div className={styles["product-list-container"]}>
        <FilterArea />
      </div>
      {/* 产品列表 */}
      <div className={styles["product-list-container"]}>
        <ProductList 
          data={productList}
          paging={pagination}
          // 这个事件好像也是人家react自己提供的
          onPageChange={onPageChange}
        />
      </div>
    </div>
  </MainLayout>
  
}