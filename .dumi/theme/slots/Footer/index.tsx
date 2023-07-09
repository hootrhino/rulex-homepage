import { Footer } from 'dumi-theme-antd-style';
import React from 'react';
import './index.less';

export default () => {
  const footer = [
    {
      title: '资源',
      items: [],
    },
    {
      title: '社区',
      items: [],
    },
    {
      title: '帮助',
      items: [],
    },
  ];
  return (
    <Footer columns={footer} bottom={'RULEX是一个轻量级边缘网关开发框架'} />
  );
};
