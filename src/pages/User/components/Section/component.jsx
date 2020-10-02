import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import './style.scss';

function SectionView(props) {
  const { err, dataList, count, currentPage, pageChange } = props;

  if (err) {
    return <div>{err.message}</div>;
  }
  if (count === 0) {
    return <div>无</div>;
  }

  return (
    <div className="user-section">
      <ul>
        {dataList.map((item) => {
          if ('id' in item) {
            const { user } = item;
            const { uid, name, email, avatar_url: avatar, headline } = user;
            return (
              <li className="user-item" key={item.id}>
                <Link to={`/user/${uid}`}>
                  <img src={avatar || 'http://img.sena.moe/favicon.ico'} alt={name || email} />
                </Link>
                <div>
                  <h2>{name || email}</h2>
                  <div>{headline}</div>
                </div>
              </li>
            );
          }
          if ('collection_id' in item) {
            const { collection_id: cid, picture } = item;
            const { limit, picture_id: pid, thumb_url: thumb } = picture;
            return (
              <li className="collection-item" key={cid}>
                <Link to={limit ? `/picture/${pid}/limit` : `/picture/${pid}`}>
                  <img src={thumb} alt={cid} />
                </Link>
              </li>
            );
          }
          const { limit, picture_id: pid, thumb_url: thumb } = item;
          return (
            <li className="collection-item" key={pid}>
              <Link to={limit ? `/picture/${pid}/limit` : `/picture/${pid}`}>
                <img src={thumb} alt={pid} />
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination
        defaultCurrent={currentPage}
        pageSize={12}
        total={count}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
    </div>
  );
}

export default SectionView;
