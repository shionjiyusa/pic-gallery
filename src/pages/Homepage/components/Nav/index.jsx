import React from 'react';
import { Switch, Button } from 'antd';
import './style.scss';

function Nav() {
  // 根据登录状态改变内容
  const limit = !localStorage.getItem('token');

  const handleSwitch = (checked) => {
    console.log(checked);
  };

  return (
    <nav>
      <Switch
        onChange={(checked) => {
          handleSwitch(checked);
        }}
        disabled={limit}
        checkedChildren="Limit 模式"
        unCheckedChildren="Limit 模式"
      >
        Limit 模式
      </Switch>
      <Button>搜索</Button>
    </nav>
  );
}

export default Nav;
