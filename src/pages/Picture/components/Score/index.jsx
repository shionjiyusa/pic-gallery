import React, { useState } from 'react';
import { Slider, Button, Popconfirm, message } from 'antd';
import checkLoginStatus from 'utils/checkLoginStatus';
import { postScore } from '../../service';

function Score(props) {
  const { scores, pid } = props;
  const [newScore, setNewScore] = useState(80);

  // 计算总分
  let addScore = 0;
  let totalScore = 0;
  scores.map((score) => {
    addScore = score.score + addScore;
    return null;
  });
  if (addScore) {
    totalScore = Math.round(addScore / scores.length);
  }

  const postNewScore = () => {
    postScore(newScore, pid)
      .then((res) => {
        if (res.status === 204) {
          message.success('评分成功');
        }
      })
      .catch((e) => {
        if (e.response.status === 401) {
          message.error('请先登录');
        } else if (e.response.status === 409) {
          message.error('请勿重复评分');
        } else {
          message.error('评分失败');
        }
      });
  };

  // 根据登录状态改变内容
  const login = !checkLoginStatus();

  return (
    <>
      <div className="new-score-button">
        <Popconfirm title="确认评分吗？" disabled={login} onConfirm={postNewScore}>
          <Button type="danger" disabled={login}>
            增加评分
          </Button>
        </Popconfirm>
      </div>
      <div className="new-score">
        <Slider
          className="slider"
          defaultValue={80}
          onChange={(score) => {
            setNewScore(score);
          }}
        />
      </div>

      <div>
        当前总分：
        <span className="totalScore">{totalScore || '暂无评分'}</span>
      </div>
    </>
  );
}

export default Score;
