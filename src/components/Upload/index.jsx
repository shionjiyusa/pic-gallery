import React, { useState } from 'react';
import { Form, Upload as UploadPic, Button } from 'antd';
import compressPicture from 'utils/compressPicture';
import Menu from '../Menu';

function Upload() {
  const [picture, setPicture] = useState({});

  return (
    <>
      <Menu />
      <Form>
        {/* <UploadPic type="file" name="newPicture" /> */}
        <span>
          <input type="checkbox" name="r18" />
          &nbsp;R18
        </span>
        {/* eslint-disable-next-line react/self-closing-comp */}
        <canvas id="canvas" style={{ display: 'none' }}></canvas>
      </Form>
    </>
  );
}

export default Upload;
