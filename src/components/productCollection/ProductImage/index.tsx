import React from 'react';
import { Image, Typography } from 'antd';
import { Link } from 'react-router-dom';

interface PropType {
  id: number | string;
  title: string;
  price: string | number;
  img: string;
  size: string;
}

export const ProductImage: React.FC<PropType> = ({id, img, title, price, size}) => {
  return <div>
    {
      // 这里的size属性用得好！   注意，Image的宽和高，直接可以写height=...
      // width=...也可以写成width或height
      size == "large" ? <Image src={img} height={290} width={490}/> :
      <Image src={img} style={{height: 120, width: 240}} />
    }

    <Link to={`detail/${id}`} style={{ display: 'flex' }}> 
      {/* 这个slice感觉用得有点骚啊~~ */}
      {/* type="secondary" 是颜色 */}
      {/* 感觉还是省略号要好用一些... */}
      <Typography.Text type="secondary" style={{minWidth:'110px'}} >{size=="large" ? title.slice(0, 25) : title.slice(0, 12)}</Typography.Text>
      <Typography.Text type="danger" style={{minWidth:'80px'}} strong>￥{price}起</Typography.Text>
    </Link>
  </div>
}