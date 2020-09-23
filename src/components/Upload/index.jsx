import React, { useState } from 'react';
import { Checkbox, Button, message } from 'antd';
import compressPicture from 'utils/compressPicture';
import Menu from '../Menu';
import uploadPicture from './service';
import './style.scss';

function Upload() {
  const [picture, setPicture] = useState(null);
  const [limit, setLimit] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadHandler = async (e) => {
    e.preventDefault();
    if (picture === null) {
      message.warning('请先选择图片');
      return null;
    }
    setUploading(true);
    // 获取缩略图，压缩失败则直接使用原图
    const thumb = (await compressPicture(picture)) || picture;
    await uploadPicture(picture, thumb, limit)
      .then(() => {
        setUploading(false);
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
      <div className="upload-wrapper">
        <form action="" method="post" encType="multipart/form-data">
          <input type="file" name="newPicture" onChange={(e) => setPicture(e.target.files[0])} />
          <span>
            <Checkbox type="checkbox" name="r18" onChange={(e) => setLimit(e.target.checked)}>
              &nbsp;limit
            </Checkbox>
          </span>
          <Button type="primary" onClick={(e) => uploadHandler(e)}>
            {uploading && '上传中'}
            {uploading ? <div className="loading-dot">...</div> : '开始上传'}
          </Button>
        </form>
      </div>

      {/* eslint-disable-next-line react/self-closing-comp */}
      <canvas id="canvas" style={{ display: 'none' }}></canvas>
    </>
  );
}

export default Upload;
