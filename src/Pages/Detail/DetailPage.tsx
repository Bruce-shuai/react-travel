import React from 'react';
// 这个是react-router-dom 提供的match的类型定义...
import { RouteComponentProps } from 'react-router-dom';
// 注意：这里有一个问题：...
// interface PropTypes {
//   match: RouteComponentProps
// }

interface MatchParams {
  touristRouteId: string;
}
// 这里的嵌套泛型真的要好好思考一下才行，艹
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  // 没有给props定义match的数据接口！！所以要给match定义数据接口
  return <h1>旅游路线详情页面, 旅游ID：{props.match.params.touristRouteId}</h1>
}