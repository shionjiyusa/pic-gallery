import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { getTags, postTag } from '../../service';

function Tag(props) {
  const { pid } = props;
  const [tags, setTags] = useState([]);
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    getTags(pid).then((res) => {
      setTags(res.data);
    });
  }, []);

  const postNewTag = () => {
    if (newTag === '') {
      message.error('不能添加空标签');
      return null;
    }
    postTag(newTag, pid)
      .then((res) => {
        if (res.status === 204) {
          message.success('添加成功');
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          message.error('请先登录');
        } else {
          message.error('添加失败');
        }
      });
    return null;
  };

  // 根据登录状态改变内容
  const login = !localStorage.getItem('token');

  return (
    <div className="titleWrapper">
      {tags.map((tag) => (
        <div
          key={tag.tag_id}
          className="tagStyle"
          title="yusa"
          color="cyan"
          // onClose={(e) => {
          //   e.preventDefault();
          //   this.handleDelTag();
          // }}
        >
          {`# ${tag.tag}`}
        </div>
      ))}
      <div className="site-tag-plus">
        <Button disabled={login} onClick={() => setTagModalVisible(true)}>
          + 新标签
        </Button>
        <Modal
          title="添加标签"
          visible={tagModalVisible}
          onCancel={() => setTagModalVisible(false)}
          centered
          footer={null}
          destroyOnClose
        >
          <Input name="tag" onChange={(e) => setNewTag(e.target.value)} />
          <Button onClick={postNewTag}>添加标签</Button>
        </Modal>
      </div>
    </div>
  );
}

export default Tag;
