import React from 'react';
import { Slider, Button } from 'antd';

function Score(props) {
  const { scores } = props;

  const setNewScore = (score) => {
    console.log(score);
  };

  return (
    <>
      <div className="titleWrapper">
        当前总分：
        <span className="totalScore">100</span>
      </div>
      <div className="titleWrapper">
        {/* 展示所有评分 */}
        {scores.map((score) => (
          <div>{score.score}</div>
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
        <Button type="danger">增加评分</Button>
      </div>
    </>
  );
}

export default Score;
