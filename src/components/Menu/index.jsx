import React from 'react';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import './style.scss';

function Menu() {
  // 前端实现用户注销
  const logout = () => {
    localStorage.removeItem('token');
    message.success('注销成功');
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  // 判断是否登录，显示不同的按钮
  let loginButton = null;
  if (localStorage.getItem('token')) {
    loginButton = (
      <Button type="danger" onClick={logout}>
        注销
      </Button>
    );
  } else {
    loginButton = (
      <div>
        <Link to="/register">
          <Button type="primary">注册</Button>
        </Link>
        <Link to="/login">
          <Button type="primary">登录</Button>
        </Link>
      </div>
    );
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="web-title">星の音</div>
        {loginButton}
      </div>
    </header>
  );
}

export default Menu;
