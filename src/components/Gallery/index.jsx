import React, { useState, useEffect } from 'react';
import myAxios from 'utils/myAxios';
import Nav from './Nav';
import GalleryView from './component';
import './style.scss';

function Gallery(props) {
  let { target } = props; // api 请求地址

  const [pictures, setPictures] = useState([]); // 图片列表
  const [total, setTotal] = useState(1); // 分页总数
  const [orderType, setOrderType] = useState(''); // 排序方式
  const [limit, setLimit] = useState(false);
  const [error, setError] = useState(''); // 错误信息

  const pageChange = (page = 1, pageSize = 20) => {
    if (limit) {
      target += '/limit';
    }

    myAxios(target, { params: { page, per_page: pageSize, order_type: orderType } })
      .then((res) => {
        if (res.status === 200) {
          let list = res.data.rows;
          // 当查看项目为 tag 时，更换响应数据格式
          if (list[0] && 'tag' in list[0]) {
            list = list.map((row) => row.picture);
          }

          setPictures(list);
          setTotal(res.data.count);
        } else {
          setError('加载失败');
        }
      })
      .catch(() => {
        setError('加载失败');
      });
  };

  useEffect(() => {
    pageChange();
  }, [limit, orderType, target]);

  // 切换排序方式
  const setOrder = (type) => {
    setOrderType(type);
  };

  // Nav 组件切换状态
  const limitHandle = (navLimit) => {
    setLimit(navLimit);
    setPictures([]);
  };

  return (
    <div className="gallery-wrapper">
      <Nav limitHandle={limitHandle} setOrder={setOrder} />
      <GalleryView
        list={pictures}
        total={total}
        limit={limit}
        pageChange={pageChange}
        error={error}
      />
    </div>
  );
}

export default Gallery;
