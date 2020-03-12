import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Menu } from 'antd';
import { history } from 'umi';
import {
  MailOutlined,
  HomeOutlined,
  HourglassOutlined,
  UserOutlined,
} from '@ant-design/icons';
export default function header() {
  const [current, setCurrent] = useState('home')
  const handleClick = (e: any) => {
    setCurrent(e.key);
    switch (e.key) {
      case 'home':
        history.push('/');
        break;
      case 'topic':
        history.push('/topic');
        break;
      case 'message':
        history.push('/message');
        break;
      case 'user':
        history.push('/user');
        break;
    }
  }
  useEffect(() => {
    //挂载时执行
    return () => {
      //销毁时执行
    }
  })
  return (
    <div className={styles.header}>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <HomeOutlined />
          主页
          </Menu.Item>
        <Menu.Item key="topic">
          <HourglassOutlined />
          动态
          </Menu.Item>
        <Menu.Item key="message">
          <MailOutlined />
          留言
          </Menu.Item>
        <Menu.Item key="user">
          <UserOutlined />我
          </Menu.Item>
      </Menu>
    </div>
  )
}
