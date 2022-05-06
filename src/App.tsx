import React from 'react';
import { Menu, Switch, MenuProps, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import UserList from './components/userList';
import './App.css';
import { useState,ReactNode,Key } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
  ]),

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
  ]),
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Row>
        <Col span={16} push={4}>
          <UserList />
        </Col>
        <Col span={8} pull={16}>
          <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Light"
            unCheckedChildren="Dark"
          />
          <br />
          <br />
          <Menu
            theme={theme}
            onClick={onClick}
            style={{ width: 256 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Col>
      </Row>
    </>
  );
}
export default App;
