import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from 'antd';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import './style.scss';

function Search() {
  const { k } = useParams(); // 路由参数

  const [keyword, setKeyword] = useState(''); // 搜索关键字
  const [target, setTarget] = useState(''); // api 请求地址

  useEffect(() => {
    // 根据路由参数或表单参数进行搜索
    if (!k && !keyword) {
      return;
    }
    setTarget(`/api/tags/${keyword || k}`);
  }, [keyword]);

  return (
    <>
      <Menu />
      <div className="search">
        <div className="search-bar">
          <Input.Search
            placeholder="搜索标签"
            enterButton="搜索"
            onSearch={(value) => setKeyword(value)}
          />
        </div>
        {target && <Gallery target={target} showNav={false} />}
      </div>
      <Footer />
    </>
  );
}

export default Search;
