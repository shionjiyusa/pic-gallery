import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { getComments, postComment } from '../../service';

function Comment(props) {
  const { pid } = props;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    getComments(pid).then((res) => {
      setComments(res.data.rows);
    });
  }, []);

  const postNewComment = () => {
    if (!newComment) {
      message.error('不能添加空评论');
    } else {
      postComment(pid, newComment)
        .then(() => {
          message.success('评论成功');
        })
        .catch((e) => {
          if (e.response.status === 401) {
            message.error('请先登录');
          } else {
            message.error('评论失败');
          }
        });
    }
  };

  // 根据登录状态改变内容
  const login = !localStorage.getItem('token');

  return (
    <div>
      评论列表：
      {comments.map((comment) => {
        // 处理时间表示方法
        const time = comment.created_at.split(/T|\./);
        return (
          <div key={comment.comment_id}>
            <div>{`${time[0]} ${time[1]}`}</div>
            <div>{comment.user.name}</div>
            <div>{comment.comment}</div>
          </div>
        );
      })}
      评论:
      <Input.TextArea
        autoSize
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
        disabled={login}
      />
      <Button disabled={login} type="primary" onClick={postNewComment}>
        提交
      </Button>
    </div>
  );
}

export default Comment;
