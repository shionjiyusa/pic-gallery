import React, { useState } from 'react';
import { Slider, Button, Popconfirm, message } from 'antd';
import { postScore } from '../../service';

function Score(props) {
  const { scores, pid } = props;
  const [newScore, setNewScore] = useState(80);

  const postNewScore = () => {
    postScore(newScore, pid)
      .then((res) => {
        if (res.status === 204) {
          message.success('评分成功');
        }
      })
      .catch(() => {
        message.error('评分失败');
      });
  };

  return (
    <>
      <div className="titleWrapper">
        当前总分：
        {/* <span className="totalScore"></span> */}
      </div>
      <div className="titleWrapper">
        {/* 展示所有评分 */}
        {scores.map((score) => (
          <div key={score.score_id}>{score.score}</div>
        ))}
      </div>
      <div className="newScore">
        <Slider
          className="slider"
          defaultValue={80}
          onChange={(score) => {
            setNewScore(score);
          }}
        />
        <Popconfirm title="确认评分吗？" onConfirm={postNewScore}>
          <Button type="danger">增加评分</Button>
        </Popconfirm>
      </div>
    </>
  );
}

export default Score;
