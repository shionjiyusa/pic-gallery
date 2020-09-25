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
  }, [tags]);

  const postNewTag = () => {
    if (newTag === '') {
      message.error('不能添加空标签');
      return null;
    }
    postTag(newTag, pid)
      .then((res) => {
        if (res.status === 204) {
          setTags([]);
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
    <>
      {tags.map((tag) => (
        <span key={tag.tag_id} className="tag-style" title="yusa" color="cyan">
          {`# ${tag.tag}`}
        </span>
      ))}
      <span>
        <Button disabled={login} onClick={() => setTagModalVisible(true)}>
          + 新标签
        </Button>
      </span>
      <Modal
        title="添加标签"
        visible={tagModalVisible}
        onCancel={() => setTagModalVisible(false)}
        centered
        footer={null}
        destroyOnClose
      >
        <div className="tag-modal">
          <Button type="primary" onClick={postNewTag} style={{ float: 'right' }}>
            添加标签
          </Button>
          <div style={{ marginRight: '100px' }}>
            <Input name="tag" onChange={(e) => setNewTag(e.target.value)} />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Tag;
