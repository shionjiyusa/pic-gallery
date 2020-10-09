import React, { useState, useEffect } from 'react';
import myAxios from 'utils/myAxios';
import Nav from './Nav';
import GalleryView from './component';
import './style.scss';

function Gallery(props) {
  let { target } = props; // api 请求地址
  const { showNav = true } = props; // 是否显示导航菜单

  const [pictures, setPictures] = useState([]); // 图片列表
  const [total, setTotal] = useState(1); // 分页总数
  const [orderType, setOrderType] = useState(''); // 排序方式
  const [currentPage, setCurrentPage] = useState(1); // 当前所在页数
  const [limit, setLimit] = useState(false);
  const [loading, setLoading] = useState(false); // 等待加载界面
  const [error, setError] = useState(''); // 错误信息

  const pageChange = (page = 1, pageSize = 20) => {
    if (limit) {
      target += '/limit';
    }

    setLoading(true);
    setCurrentPage(page);
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
          setLoading(false);
        } else {
          setError('加载失败');
          setLoading(false);
        }
      })
      .catch(() => {
        setError('加载失败');
        setLoading(false);
      });
  };

  useEffect(() => {
    setPictures([]);
    setError('');
    pageChange();
  }, [limit, orderType, target]);

  // 切换排序方式
  const setOrder = (type) => {
    setPictures([]);
    setError('');
    setOrderType(type);
  };

  // Nav 组件切换状态
  const limitHandle = (navLimit) => {
    setPictures([]);
    setError('');
    setLimit(navLimit);
  };

  return (
    <div className="gallery-wrapper">
      {showNav && <Nav limitHandle={limitHandle} setOrder={setOrder} />}
      <GalleryView
        list={pictures}
        total={total}
        limit={limit}
        currentPage={currentPage}
        pageChange={pageChange}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Gallery;
