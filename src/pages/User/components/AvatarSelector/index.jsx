import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
import uploadAvatar from './service';

function AvatarSelector(props) {
  const { visible, setVisible } = props;
  const [avatar, setAvatar] = useState(null);

  // 上传头像
  const updateAvatar = () => {
    if (avatar === null) {
      message.error('请先选择图片');
    }
    const { uid } = checkLoginStatus();
    uploadAvatar(uid, avatar)
      .then(() => {
        message.success('修改成功，重新登录后生效');
        setVisible(false);
      })
      .catch(() => {
        message.error('头像修改失败');
        setVisible(false);
      });
  };

  return (
    <Modal title="选择图片" visible={visible} footer={false} onCancel={() => setVisible(false)}>
      <input type="file" name="newAvatar" onChange={(e) => setAvatar(e.target.files[0])} />
      <Button type="primary" onClick={() => updateAvatar()}>
        确定
      </Button>
      <Button onClick={() => setVisible(false)}>取消</Button>
    </Modal>
  );
}

export default AvatarSelector;
