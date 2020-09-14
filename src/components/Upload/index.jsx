import React, { useState } from 'react';
import { Form, Upload as AUpload, Button } from 'antd';
import compressPicture from 'utils/compressPicture';
import Menu from '../Menu';

function Upload() {
  const [picture, setPicture] = useState({});

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <>
      <Menu />
      <Form>
        <AUpload name="newPicture">
          <Button>选择图片</Button>
        </AUpload>
        <span>
          <input type="checkbox" name="r18" />
          &nbsp;R18
        </span>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <canvas id="canvas" style={{ display: 'none' }}></canvas>
        <Button type="primary">开始上传</Button>
      </Form>
    </>
  );
}

export default Upload;
