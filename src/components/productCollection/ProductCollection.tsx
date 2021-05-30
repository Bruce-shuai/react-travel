import React from 'react';
import { Divider, Row, Col } from 'antd';
import { ProductImage } from './ProductImage' 

// 有一个疑问，这里是指的一个对象吗？
interface PropsType {
  title: JSX.Element;    // title 表示可以接受一个react组件，所以类型指定为JSX.element
  sideImage?: string;
  products: any[];       // 只能这样搞，因为不知道后端要传些啥...
}
export const ProductCollection: React.FC<PropsType> = ({title, sideImage, products}) => {
// 牛逼，这个还自带颜色~
  return <div>
    <Divider orientation="left">{title}</Divider>
    <Row>
      <Col span={4}>
        <img src={sideImage} width={200}/>
      </Col>
      {/* 下面的这个布局非常有特点！！ */}
      <Col span={20}>
        <Row>
          {/* 大方块 */}
          <Col span={12}>
          {/* 这个组件就直接放在productCollection这个文件夹里 */}
          {/* 这个size作为属性就很精彩！ */}
            <ProductImage 
              id={products[0].id}
              img={products[0].touristRoutePictures[0].url}
              title={products[0].title}
              price={products[0].price}
              size="large"
            />
          </Col>
          {/* 右边的4个方块布局 */}
          <Col span={12}>
            <Row>
              <Col span={12}>
              <ProductImage 
                id={products[1].id}
                img={products[1].touristRoutePictures[0].url}
                title={products[1].title}
                price={products[1].price}
                size="small"
              />
              </Col>
              <Col span={12}>
              <ProductImage 
              id={products[2].id}
              img={products[2].touristRoutePictures[0].url}
              title={products[2].title}
              price={products[2].price}
              size="small"
            />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
              <ProductImage 
              id={products[3].id}
              img={products[3].touristRoutePictures[0].url}
              title={products[3].title}
              price={products[3].price}
              size="small"
            />
              </Col>
              <Col span={12}>
              <ProductImage 
              id={products[4].id}
              img={products[4].touristRoutePictures[0].url}
              title={products[4].title}
              price={products[4].price}
              size="small"
            />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <ProductImage 
              id={products[5].id}
              img={products[5].touristRoutePictures[0].url}
              title={products[5].title}
              price={products[5].price}
              size="small"
            />
          </Col>
          <Col span={6}>
            <ProductImage 
              id={products[6].id}
              img={products[6].touristRoutePictures[0].url}
              title={products[6].title}
              price={products[6].price}
              size="small"
            />
          </Col>
          <Col span={6}>
            <ProductImage 
              id={products[7].id}
              img={products[7].touristRoutePictures[0].url}
              title={products[7].title}
              price={products[7].price}
              size="small"
            />
          </Col>
          <Col span={6}>
            <ProductImage 
              id={products[8].id}
              img={products[8].touristRoutePictures[0].url}
              title={products[8].title}
              price={products[8].price}
              size="small"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
}