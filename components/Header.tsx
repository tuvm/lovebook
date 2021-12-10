import React from 'react';
import { Menu, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from '../styles/components/Header.module.scss';

React.useLayoutEffect = React.useEffect;

const Header = () => {
  const onSearch = (value: String) => {
    console.log(value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Lovebook</div>
        <div className={styles.search}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            style={{ width: 200, height: 32 }}
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
