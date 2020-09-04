import React from 'react';
import { Button } from 'antd';
import './style.scss';

function Menu() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="web-title">星の音</div>
        <Button type="primary">注册</Button>
        <Button type="primary">登录</Button>
      </div>
    </header>
  );
}

export default Menu;
