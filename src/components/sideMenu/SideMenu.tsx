import React from 'react';
import { sideMenuList } from './mock';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';
import styles from './sideMenu.scss/SideMenu.module.css';

export const SideMenu: React.FC = () => {
  return <Menu mode='vertical' className={styles.menu}>
      {sideMenuList.map((item, index) => (
        <Menu.SubMenu
        // 感觉使用index，不是太好啊....
        // 注意： 组件<></...>或<.../>   没有<.></...>
          key={`side-menu-${index}`}
          title={<span><GifOutlined />{item.title}</span>}
        >
          {item.subMenu.map((sitem, sindex) => (
            <Menu.SubMenu
              key={`sub-menu-${sindex}`}
              title={<span><GifOutlined />{sitem.title}</span>}
            >
            {sitem.subMenu.map((ssitem, ssindex) => (
              <Menu.Item
                key={`sub-sub-menu-${ssindex}`}
              >
                <span><GifOutlined />{ssitem}</span>
              </Menu.Item>
            ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
  </Menu>
}


