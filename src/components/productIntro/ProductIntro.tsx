import { Typography, Carousel, Image, Rate, Table } from 'antd';
import React from 'react';
// 如果取名为style的话很容易引起误会
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

// 这个ColumnsType 可还要研究研究才行~
const columns: ColumnsType<RowType> = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    align: 'left',
    width: 120,
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
  },
];

interface RowType {
  title: string;
  // 想想为什么要用JSX.Element
  discription: string | number | JSX.Element;  // 这个JSX.Element 用法是真的骚啊~
  key: number;
}

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
        // pictures 是从哪儿来的？
        pictures.map(p => <Image height={150} src={p} />)
      }
    </Carousel>
      {/* table表 */}
    <Table<RowType> 
      columns={columns} 
      dataSource={tableDataSource} 
      size='small'
      bordered={false}
      pagination={false}
      showHeader={false}
    />
  </div>
}