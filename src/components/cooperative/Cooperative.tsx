import React from 'react';
import { Divider } from 'antd';
import styles from './Cooperative.scss/Cooperative.module.css';
import img1 from '../../assets/img/microsoft-80658_640.png';
import img2 from '../../assets/img/icon-720944_640.png';
import img3 from '../../assets/img/follow-826033_640.png';
import img4 from '../../assets/img/facebook-807588_640.png';


export const Cooperative: React.FC = () => {
  return <>
    <Divider orientation="left" style={{fontWeight: 700}}>
      合作企业
    </Divider>
    <div className={styles.coImg}>
      <img src={img1} alt="Microsoft" />
      <img src={img2} alt="YouTube" />
      <img src={img3} alt="Instangram" />
      <img src={img4} alt="facebook" />
    </div>
  </>
}