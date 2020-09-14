import React from 'react';
import { Switch, Button } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

function Nav(props) {
  // 根据登录状态改变内容
  const login = !localStorage.getItem('token');

  const handleSwitch = (checked) => {
    props.limitHandle(checked);
  };

  return (
    <nav>
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
      <Button>搜索</Button>
      <Link to="/upload">
        <Button type="primary">上传</Button>
      </Link>
    </nav>
  );
}

export default Nav;
