import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { message, Button, Menu as AMenu } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
import myAxios from 'utils/myAxios';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import AvatarSelector from './components/AvatarSelector';
import ProfileEditor from './components/ProfileEditor';
import Section from './components/Section';
import './style.scss';

function User() {
  // 对比是否为用户本人主页
  const { uid } = useParams();
  const loginUser = checkLoginStatus();
  let isOwner = false;
  if (loginUser.uid === uid * 1) {
    isOwner = true;
  }

  const [user, setUser] = useState({}); // 用户资料
  const [menu, setMenu] = useState(''); // 菜单状态
  const [avatarSelector, setAvatarSelector] = useState(false); // 头像修改 Modal
  const [profileEditor, setProfileEditor] = useState(false); // 资料修改 Modal
  const [followState, setFollowState] = useState(false); // 是否已关注

  useEffect(() => {
    // 获取用户资料
    myAxios(`/api/users/${uid}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          message.error('用户不存在');
        }
      });
    // 查询是否已关注用户
    if (loginUser) {
      myAxios(`/api/users/following/${loginUser.uid}`)
        .then(() => {
          setFollowState(true);
        })
        .catch(() => {});
    }
  }, [uid]);

  const follow = () => {
    myAxios
      .put(`/api/users/following/${uid}`)
      .then(() => {
        setFollowState(true);
      })
      .catch(() => {
        message.error('关注失败');
      });
  };

  const unfollow = () => {
    myAxios
      .delete(`/api/users/following/${uid}`)
      .then(() => {
        setFollowState(false);
      })
      .catch(() => {
        message.error('取消关注失败');
      });
  };

  const { email, avatar_url: avatar, name, headline, gender, age } = user;

  return (
    <>
      <Menu />
      <div className="profile">
        <span className="user-info">
          <img src={avatar || 'http://img.sena.moe/favicon.ico'} alt={name} />
          <div>
            <h2>{name || email}</h2>
            签名：
            {headline}
            <br />
            性别：
            {gender}
            <br />
            年龄：
            {age || '未知'}
            <br />
            {isOwner && (
              <div>
                <Button onClick={() => setAvatarSelector(true)}>修改头像</Button>
                <Button onClick={() => setProfileEditor(true)}>修改资料</Button>
              </div>
            )}
            {loginUser && !isOwner && !followState && (
              <div>
                <Button type="primary" onClick={follow}>
                  关注
                </Button>
              </div>
            )}
            {loginUser && !isOwner && followState && (
              <div>
                <Button onClick={unfollow}>取消关注</Button>
              </div>
            )}
            <AvatarSelector visible={avatarSelector} setVisible={setAvatarSelector} />
            <ProfileEditor visible={profileEditor} setVisible={setProfileEditor} />
          </div>
        </span>
        <section>
          <AMenu
            defaultSelectedKeys={['collection']}
            mode="horizontal"
            onClick={(item) => {
              setMenu(item.key);
            }}
          >
            <AMenu.Item key="collection">用户收藏</AMenu.Item>
            <AMenu.Item key="upload">用户上传</AMenu.Item>
            <AMenu.Item key="follow">关注</AMenu.Item>
            <AMenu.Item key="follower">粉丝</AMenu.Item>
          </AMenu>
          <Section menu={menu} uid={uid} setFollowState={setFollowState} />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default User;
