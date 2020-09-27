import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useRequest } from 'ahooks';
import { message } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import getUserInfo from './service';
import './style.scss';

function User() {
  const { uid } = useParams();
  const [user, setUser] = useState({});

  // 对比是否为用户本人主页
  const loginUser = checkLoginStatus();
  let isOwner = false;
  if (loginUser.uid === uid) {
    isOwner = true;
  }

  useEffect(() => {
    getUserInfo(uid)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          message.error('用户不存在');
        }
      });
  }, []);

  const { email, avatar_url: avatar, name, headline, gender, age } = user;

  return (
    <>
      <Menu />
      <div>
        {email}
        <br />
        {avatar}
        <br />
        {name}
        <br />
        {headline}
        <br />
        {gender}
        <br />
        {age}
      </div>
      <Footer />
    </>
  );
}

export default User;
