import React, { useState, useEffect } from 'react';
import myAxios from 'utils/myAxios';
import SectionView from './component';

function Section(props) {
  const [dataList, setDataList] = useState([]);
  const [count, setCount] = useState(0);
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const { menu, uid } = props; // 菜单类型, 用户 id

  useEffect(() => {
    let uri = '';
    // 根据不同菜单获取不同数据列表
    switch (menu) {
      default:
      case 'collection':
        uri = `/api/users/${uid}/collections?page=${page}&per_page=${pageSize}`;
        break;
      case 'upload':
        uri = `/api/users/${uid}/uploads?page=${page}&per_page=${pageSize}`;
        break;
      case 'follow':
        uri = `/api/users/${uid}/following?page=${page}&per_page=${pageSize}`;
        break;
      case 'follower':
        uri = `/api/users/${uid}/followers?page=${page}&per_page=${pageSize}`;
        break;
    }
    myAxios
      .get(uri)
      .then((res) => {
        setDataList(res.data.rows);
        setCount(res.data.count);
      })
      .catch((error) => setErr(error.response.data));
    return () => {
      // 清除错误信息
      setErr(null);
    };
  }, [menu, page, uid]);

  const pageChange = (pageVal, pageSizeVal) => {
    setPage(pageVal);
    setPageSize(pageSizeVal);
  };

  return (
    <SectionView
      dataList={dataList}
      count={count}
      err={err}
      currentPage={page}
      pageChange={pageChange}
    />
  );
}

export default Section;
