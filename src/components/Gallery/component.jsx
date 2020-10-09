import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Space, Spin, Empty } from 'antd';
import './style.scss';

function GalleryView(props) {
  const { list, total, limit, currentPage = 1, pageChange, loading, error } = props;
  if (loading) {
    return (
      <Space size="large">
        <Spin size="large" />
      </Space>
    );
  }
  if (error) {
    return <Empty description="加载失败" />;
  }
  if (total === 0) {
    return <Empty description="无数据" />;
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
        defaultCurrent={currentPage}
        pageSize={20}
        total={total}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
    </div>
  );
}

export default GalleryView;
