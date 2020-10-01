import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import getCollections from './service';

function Section(props) {
  const { menu } = props; // 菜单类型
  const [listData, setListData] = useState([]);

  const { data, error, loading } = useRequest(getCollections);

  return data;
}

export default Section;
