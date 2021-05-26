import React from 'react';
import { Comment, List, Tooltip } from 'antd';
import styles from './ProductComments.module.css';

interface PropsType {
  // 这里把data的属性这些更改了~
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