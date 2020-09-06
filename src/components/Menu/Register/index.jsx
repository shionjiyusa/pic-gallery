import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import register from './service';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handle = async () => {
    if (await register(email, password)) {
      message.success('注册成功，请等待管理员审核');
    } else {
      message.error('注册失败');
    }
  };

  return (
    <div className="loginWrapper">
      用户注册 邮箱：
      <Input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="仅支持邮箱注册"
      />
      密码：
      <Input.Password
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      邀请码：
      <Input />
      <Button type="primary" onClick={handle}>
        注册
      </Button>
    </div>
  );
}

export default Register;
