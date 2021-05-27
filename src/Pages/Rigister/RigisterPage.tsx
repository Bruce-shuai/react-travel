import React from 'react';
import { UserLayout } from '../../layouts/userLayout';
import { RegisterForm } from './RegisterForm'
export const RigisterPage: React.FC = () => {
  return <UserLayout>
    <h1>注册页面</h1>
    <RegisterForm />
  </UserLayout>
}