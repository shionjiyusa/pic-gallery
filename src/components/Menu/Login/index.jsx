import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import login from './service';
import './style.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');

  const loginHandle = async () => {
    setLoginMsg('');
    if (email + password === '') {
      setLoginMsg('邮箱和密码不能为空');
      return;
    }
    if (localStorage.getItem('token')) {
      setLoginMsg('请勿重复登录');
      return;
    }
    if (await login(email, password)) {
      setLoginMsg('登录成功，即将跳转至首页');
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
      return;
    }
    setLoginMsg('登录失败，用户名或密码错误');
  };

  return (
    <div className="login-wrapper">
      <h3>用户登录 </h3>
      <div className="login-item two-column-box">
        <span className="column-float">邮箱：</span>
        <div className="column-flex">
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="仅支持邮箱登录"
          />
        </div>
      </div>
      <div className="login-item two-column-box">
        <span className="column-float">密码：</span>
        <div className="column-flex">
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="login-item">{loginMsg}</div>
      <Button type="primary" onClick={loginHandle}>
        登录
      </Button>
    </div>
  );
}

export default Login;
