import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import login from './service';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div className="loginWrapper">
      用户登录 邮箱：
      <Input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="仅支持邮箱登录"
      />
      密码：
      <Input.Password
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button type="primary" onClick={loginHandle}>
        登录
      </Button>
    </div>
  );
}

export default Login;
