import React, { useState } from 'react';
import { Checkbox, Button, message } from 'antd';
import compressPicture from 'utils/compressPicture';
import Menu from '../Menu';
import uploadPicture from './service';

function Upload() {
  const [picture, setPicture] = useState(null);
  const [limit, setLimit] = useState(false);

  const uploadHandler = async (e) => {
    e.preventDefault();
    if (picture === null) {
      message.warning('请先选择图片');
      return null;
    }
    // 获取缩略图，压缩失败则直接使用原图
    const thumb = (await compressPicture(picture)) || picture;
    await uploadPicture(picture, thumb, limit)
      .then(() => {
        message.success('上传成功');
      })
      .catch(() => {
        message.error('上传失败');
      });
    return null;
  };

  return (
    <>
      <Menu />
      <form action="" method="post" encType="multipart/form-data">
        <input type="file" name="newPicture" onChange={(e) => setPicture(e.target.files[0])} />
        <span>
          <Checkbox type="checkbox" name="r18" onChange={(e) => setLimit(e.target.checked)}>
            &nbsp;R18
          </Checkbox>
        </span>
        <Button type="primary" onClick={(e) => uploadHandler(e)}>
          开始上传
        </Button>
      </form>
      {/* eslint-disable-next-line react/self-closing-comp */}
      <canvas id="canvas" style={{ display: 'none' }}></canvas>
    </>
  );
}

export default Upload;
