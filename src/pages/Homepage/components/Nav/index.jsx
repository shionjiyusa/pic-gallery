import React, { useState, useEffect } from 'react';
import { Switch, Button, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

function Nav(props) {
  const [orderType, setOrderType] = useState('');

  useEffect(() => {
    props.setOrder(orderType);
  }, [orderType]);

  // 根据登录状态改变内容
  const login = !localStorage.getItem('token');

  const handleSwitch = (checked) => {
    props.limitHandle(checked);
  };

  const orderMenu = (
    <Menu>
      <Menu.Item onClick={() => setOrderType('')}>默认</Menu.Item>
      <Menu.Item onClick={() => setOrderType('collection_count')}>收藏</Menu.Item>
      <Menu.Item onClick={() => setOrderType('picture_id')}>时间</Menu.Item>
    </Menu>
  );

  return (
    <nav>
      <span style={{ float: 'right' }}>
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
