import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Input, message } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
import { getTags, postTag } from '../../service';

function Tag(props) {
  const { pid } = props;
  const [tags, setTags] = useState([]);
  const [tagModalVisible, setTagModalVisible] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getTags(pid).then((res) => {
      setTags(res.data);
    });
  }, [refresh]);

  const postNewTag = () => {
    if (newTag === '') {
      message.error('不能添加空标签');
      return null;
    }
    postTag(newTag, pid)
      .then((res) => {
        if (res.status === 204) {
          setRefresh(!refresh);
          message.success('添加成功');
        }
      })
      .catch((e) => {
        const code = e.response.status;
        if (code === 401) {
          message.error('请先登录');
        } else if (code === 409) {
          message.error('请勿重复添加');
        } else {
          message.error('添加失败');
        }
      });
    return null;
  };

  // 根据登录状态改变内容
  const login = !checkLoginStatus();

  return (
    <>
      {tags.map((tag) => (
        <Link key={tag.tag_id} to={`/search/${tag.tag}`}>
          <span className="tag-style" title="yusa" color="cyan">
            {`# ${tag.tag}`}
          </span>
        </Link>
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
