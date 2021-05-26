import { Typography, Carousel, Image, Rate, Table } from 'antd';
import React from 'react';
import styles from './ProductIntro.module.css';
import { ColumnsType } from 'antd/es/table';

interface PropsType {
  title: string;
  shortDescription: string;
  price: string | number;
  coupons: string;
  points: string;
  discount: string;
  rating: string | number;
  pictures: string[];
}

// 每一行的内容
interface RowType {
  key: number;
  title: string;
  // 想想为什么要用JSX.Element
  discription: string | number | JSX.Element;  // 这个JSX.Element 用法是真的骚啊~
}

// 这个ColumnsType到底是个啥？ 为什么里面还要加范型
const columns: ColumnsType<RowType> = [
  // 这里的title 和 description 有啥用呢？
  {
    // 这个应该是左边的一列
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    align: 'left',
    width: 120,
  },
  {
    // 这个应该是右边的一列
    title: 'description',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
  },
];

export const ProductIntro: React.FC<PropsType> = ({
  title,
  shortDescription,
  price,
  coupons,
  discount,
  rating,
  pictures
}) => {

  
  // 似乎函数组件使用props的内容，不需要前缀props??
  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: '路线名称',
      discription: title,   // ?
    },
    {
      key: 1,
      title: '价格',
      discription: (
        <>
          ￥{" "}
          <Typography.Text type='danger' strong>
            {price}
          </Typography.Text>
        </>
      ),
    },    
    {
      key: 2,
      title: '限时抢购折扣',
      discription: discount ? (
        <>
        {/* delete 这个用法是什么呢？ */}
        ￥<Typography.Text delete>{price}</Typography.Text>{' '}
        <Typography.Text type='danger' strong>
          ￥{discount}
        </Typography.Text>
        </>
      ) : (
        '暂无折扣'
      ),
    },
    {
      key:2,
      title: '领取优惠',
      discription: coupons ? discount : '无优惠券可领',
    }, 
    {
      key: 2,
      title: '线路评价',
      discription: (
        <>
          {/* 这个Rate是个啥？ 是个评分功能 */}
          <Rate allowHalf defaultValue={+rating} />
          <Typography.Text style={{ marginLeft: 10 }}>
            {rating} 星
          </Typography.Text>
        </>
      )
    }
  ]  


  return <div className={styles['intro-contaier']}>
    {/* 产品名称 */}
    <Typography.Title level={4}>{title}</Typography.Title>
    {/* 产品简介 */}
    <Typography.Text>{shortDescription}</Typography.Text>
    {/* 产品的评价与价格细节表 */}
    <div className={styles['intro-detail-content']}>
      <Typography.Text style={{marginLeft: 20}}>
        ￥ <span className={styles['intro-detail-strong-text']}>{price}</span>
        /人起
      </Typography.Text>
      <Typography.Text style={{marginLeft: 50}}>
        <span className={styles['intro-detail-strong-text']}>{rating}</span>
        分
      </Typography.Text>
    </div>
    {/* 走马灯，一次总共显示3张图片 */}
    <Carousel autoplay slidesToShow={3}>
      {
        pictures.map(p => <Image height={150} src={p} />)
      }
    </Carousel>
    <Table
      columns={columns} 
      dataSource={tableDataSource} 
      size='small'
      bordered={false}
      pagination={false}
      showHeader={false}
    />
  </div>
}