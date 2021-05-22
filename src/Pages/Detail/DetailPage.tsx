import React from 'react';
// 这个是react-router-dom 提供的match的类型定义...
import { RouteComponentProps, useParams } from 'react-router-dom';
// 注意：这里有一个问题：...
// interface PropTypes {
//   match: RouteComponentProps
// }

import axios from 'axios';



interface MatchParams {
  touristRouteId: string;
}
// 这里的嵌套泛型真的要好好思考一下才行，艹
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {
  const { touristRouteId } = useParams<MatchParams>   // 这是一个什么用法？？
  return <></>
}