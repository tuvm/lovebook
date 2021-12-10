import React from 'react';
import { Menu } from 'antd';
import styles from '../styles/components/Header.module.scss';

React.useLayoutEffect = React.useEffect;

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Lovebook</div>
        <div className={styles.search}></div>
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
