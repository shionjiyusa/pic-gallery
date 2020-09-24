import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
import { getComments, postComment } from '../../service';
import './style.scss';

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
    <div className="comment-counter-set">
      评论列表：
      {comments.map((comment) => {
        // 处理时间表示方法
        const time = comment.created_at.split(/T|\./);
        return (
          <div className="comment-box" key={comment.comment_id}>
            <span className="comment-counter comment-time">{`${time[0]} ${time[1]}`}</span>
            <div className="comment-user">
              <span className="user_avatar">{comment.user.avatar_url}</span>
              {comment.user.name}
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <span>：{comment.comment}</span>
            </div>
          </div>
        );
      })}
      <br />
      发表评论:
      <div className="comment-new">
        <Button disabled={login} type="primary" onClick={postNewComment}>
          提交
        </Button>
        <div>
          <Input.TextArea
            autoSize
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            disabled={login}
          />
        </div>
      </div>
    </div>
  );
}

export default Comment;
