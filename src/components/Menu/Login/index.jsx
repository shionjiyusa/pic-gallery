import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import login from './service';
import './style.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');

  const loginHandle = async () => {
    if (localStorage.getItem('token')) {
      message.error('请勿重复登录');
      return null;
    }
    if (await login(email, password)) {
      message.info('登录成功，即将跳转至首页');
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
      return null;
    }
    message.error('登录失败，用户名或密码错误');
    return null;
  };

  return (
    <div className="login-wrapper">
      <h3>用户登录 </h3>
      <div className="login-item">
        <span>邮箱：</span>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="仅支持邮箱登录"
        />
      </div>
      <div className="login-item">
        <span>密码：</span>
        <Input.Password
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="login-message">{}</div>
      <Button type="primary" onClick={loginHandle}>
        登录
      </Button>
      <img alt="yusa2" />
    </div>
  );
}

export default Login;
