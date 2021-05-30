import React from 'react';
import { sideMenuList } from './mock';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical'>
      {sideMenuList.map((sub, index) => (
        <SubMenu key={`subMenu-${index}`} title={<span><GifOutlined />{sub.title}</span>}>
        {
          sideMenuList[index].subMenu.map((s, sindex) => {
            return <SubMenu key={`sMenu-${sindex}`} title={s.title}>
              {s.subMenu.map((ss, ssindex) => {
                return <Menu.Item key={`ssMenu-${ssindex}`}>{ss}</Menu.Item>
              })}
            </SubMenu>
          })
        }
        </SubMenu>
      ))}
    </Menu>
  )
}


