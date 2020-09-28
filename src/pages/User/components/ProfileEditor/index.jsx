import React, { useState } from 'react';
import { Button, Modal, message, Input, Radio, InputNumber } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
import updateProfile from './service';
import './style.scss';

function AvatarSelector(props) {
  const { visible, setVisible } = props;
  const userInfo = checkLoginStatus();
  const [newName, setNewName] = useState(userInfo.name);
  const [newHeadline, setNewHeadline] = useState(userInfo.headline);
  const [newAge, setNewAge] = useState(userInfo.age);
  const [newGender, setNewGender] = useState(userInfo.gender);

  // 更新个人资料
  const handleUpdate = () => {
    updateProfile(userInfo.uid, {
      name: newName,
      headline: newHeadline,
      age: newAge,
      gender: newGender,
    })
      .then(() => {
        message.success('修改成功，重新登录后生效');
        setVisible(false);
      })
      .catch(() => {
        message.error('资料修改失败');
        setVisible(false);
      });
  };

  return (
    <Modal
      title="修改个人资料"
      visible={visible}
      footer={false}
      destroyOnClose
      onCancel={() => setVisible(false)}
    >
      <h3>
        账号：
        {userInfo.email}
      </h3>
      <div className="profile-column">
        <span>昵称：</span>
        <div>
          <Input
            maxLength={20}
            defaultValue={userInfo.name}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
      </div>
      <div className="profile-column">
        <span>签名：</span>
        <div>
          <Input
            maxLength={50}
            defaultValue={userInfo.headline}
            onChange={(e) => setNewHeadline(e.target.value)}
          />
        </div>
      </div>
      <div className="profile-column">
        <span>性别：</span>
        <div>
          <Radio.Group
            defaultValue={userInfo.gender}
            value={newGender}
            onChange={(e) => setNewGender(e.target.value)}
          >
            <Radio value="男">男</Radio>
            <Radio value="女">女</Radio>
            <Radio value="未知">未知</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="profile-column">
        <span>年龄：</span>
        <div>
          <InputNumber
            min={0}
            max={150}
            defaultValue={userInfo.age}
            onChange={(value) => setNewAge(value)}
          />
        </div>
      </div>

      <Button type="primary" onClick={() => handleUpdate()}>
        确定
      </Button>
      <Button onClick={() => setVisible(false)}>取消</Button>
    </Modal>
  );
}

export default AvatarSelector;
