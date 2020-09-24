import React from 'react';
import { Switch, Button, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

function Nav(props) {
  // 根据登录状态改变内容
  const login = !localStorage.getItem('token');

  const handleSwitch = (checked) => {
    props.limitHandle(checked);
  };

  const orderMenu = (
    <Menu>
      <Menu.Item>默认</Menu.Item>
      <Menu.Item>收藏</Menu.Item>
      <Menu.Item>评分</Menu.Item>
      <Menu.Item>时间</Menu.Item>
    </Menu>
  );

  return (
    <nav>
      <span style={{ float: 'right' }}>
        {/* TODO: 排序功能 */}
        <Dropdown overlay={orderMenu}>
          <Button type="primary">排序方式</Button>
        </Dropdown>
      </span>
      <Switch
        onChange={(checked) => {
          handleSwitch(checked);
        }}
        disabled={login}
        checkedChildren="Limit 模式"
        unCheckedChildren="Limit 模式"
      >
        Limit 模式
      </Switch>
      {/* TODO: 搜索功能 */}
      <Button>搜索</Button>
      {!login && (
        <Link to="/upload">
          <Button type="primary">上传</Button>
        </Link>
      )}
    </nav>
  );
}

export default Nav;
