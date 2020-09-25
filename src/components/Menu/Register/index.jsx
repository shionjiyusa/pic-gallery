import React, { useState } from 'react';
import { Input, Button } from 'antd';
import register from './service';
import '../Login/style.scss';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');

  const handle = async () => {
    setLoginMsg('');
    if (email + password === '') {
      setLoginMsg('邮箱和密码不能为空');
      return;
    }
    const registerStatus = await register(email, password);
    if (registerStatus === true) {
      setLoginMsg('注册成功，请等待管理员审核');
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } else {
      setLoginMsg(registerStatus);
    }
  };

  return (
    <div className="login-wrapper">
      <h3>用户注册</h3>
      <div className="login-item two-column-box">
        <span className="column-float">邮箱：</span>
        <div className="column-flex">
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="仅支持邮箱注册"
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
      <Button type="primary" onClick={handle}>
        注册
      </Button>
    </div>
  );
}

export default Register;
