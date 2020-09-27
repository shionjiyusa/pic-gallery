import React from 'react';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
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

  const user = checkLoginStatus();

  // 判断是否登录，显示不同的按钮
  let loginButton = null;
  if (user) {
    loginButton = (
      <>
        <Link to={`/user/${user.uid}`}>
          <Button>
            <span>
              {user.avatar_url ? (
                <img src={user.avatar_url} alt={user.uid} />
              ) : (
                <css-icon class="icon-person"> </css-icon>
              )}

              {user.email}
            </span>
          </Button>
        </Link>
        <Button type="danger" onClick={logout}>
          注销
        </Button>
      </>
    );
  } else {
    loginButton = (
      <>
        <Link to="/register">
          <Button type="primary">注册</Button>
        </Link>
        <Link to="/login">
          <Button type="primary">登录</Button>
        </Link>
      </>
    );
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="web-title">星の音</div>
        <div className="menu-button">{loginButton}</div>
      </div>
    </header>
  );
}

export default Menu;
