import React, { Props } from 'react';
import { Comment, Tooltip, List } from 'antd';
import styles from './ProductComments.module.css';
import { link } from 'fs';

interface PropsType {
  // 这里的data 就是一个对象
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}

export const ProductComments: React.FC<PropsType> = ({data}) => {
  return <List
    dataSource={data}
    itemLayout='horizontal'
    renderItem={(item) => {
      return <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.createDate}
        />
      </li>
    }}
  >

  </List>
}