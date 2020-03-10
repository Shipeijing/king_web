import React from 'react';
import styles from './index.less';
import { Menu } from 'antd';
import { history } from 'umi';
import {
  MailOutlined,
  HomeOutlined,
  HourglassOutlined,
  UserOutlined,
} from '@ant-design/icons';
class myHeader extends React.Component {
  state = {
    current: 'home',
  };
  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
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
  };
  render() {
    return (
      <div className={styles.header}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
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
    );
  }
}
export default myHeader;
