import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, message } from 'antd';
import './style.scss';

function GalleryView(props) {
  const { list, total, limit, pageChange, error } = props;
  if (error) {
    message.error('加载失败');
  }
  if (total === 0) {
    return <div>无数据</div>;
  }

  return (
    <div className="gallery-wrapper">
      <ul className="gallery">
        {list.map((picture) => {
          const { picture_id: id, thumb_url: url, collection_count: star } = picture;
          return (
            <Link to={limit ? `/picture/${id}/limit` : `/picture/${id}`} key={id}>
              <li key={id} data-collection={star}>
                <img src={url} alt={id} />
              </li>
            </Link>
          );
        })}
      </ul>
      <Pagination
        defaultCurrent={1}
        pageSize={20}
        total={total}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
    </div>
  );
}

export default GalleryView;
