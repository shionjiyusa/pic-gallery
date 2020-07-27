import React from 'react';

function Score(props) {
  const { scores } = props;

  return scores.map((score) => (
    <div key={score.score_id} title="yusa" color="red" closable>
      {score.score}
    </div>
  ));
}

export default Score;
