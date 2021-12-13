import React from 'react';
import Image from 'next/image';
import { Menu, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from '../styles/components/Header.module.scss';
import logo from '../public/images/lovebook.png';

React.useLayoutEffect = React.useEffect;

const Header = () => {
  const onSearch = (value: String) => {
    console.log(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}><Image width="100" height="30" src={logo} alt="logo" /></div>
        <div className={styles.search}>
          <Input
            prefix={<SearchOutlined style={{ color: '#d9d9d9' }} />}
            placeholder="Search"
            style={{ width: 268, minWidth: 125, height: 33 }}
          />
        </div>
        <div className={styles.menu}>
          <Menu mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Message</Menu.Item>
            <Menu.Item key="3">New Post</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  )
};

export default Header;
