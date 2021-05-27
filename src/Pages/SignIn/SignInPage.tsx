import React from 'react';
import { UserLayout } from '../../layouts/userLayout';

export const SignInPage: React.FC = (props) => {
  console.log('props', props);
  
  // 这个页面布局是真的厉害~ 感觉可以作为项目的亮点！！
  return <UserLayout>
    <h1>登录页面</h1>
  </UserLayout>
}