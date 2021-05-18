import React from 'react';
import styles from './Carousel.scss/Carousel.module.css';
// --------------这样是将图片的url传给img1--------------
import img1 from '../../assets/img/carousel_1.jpg';
import img2 from '../../assets/img/carousel_2.jpg';
import img3 from '../../assets/img/carousel_3.jpg';
// 这里取别名很不错！！ 将Carousel改为AntCarousel
import { Image, Carousel as AntCarousel } from 'antd';

// 这他么就是轮播图吧！
export const Carousel: React.FC = () => {
  return <AntCarousel autoplay>
    <Image src={img1} height='240px'/>
    <Image src={img2} height='240px'/>
    <Image src={img3} height='240px'/>
  </AntCarousel>
}