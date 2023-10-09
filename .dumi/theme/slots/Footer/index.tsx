import { IssuesCloseOutlined } from '@ant-design/icons';
import { Footer } from 'dumi-theme-antd-style';
import React from 'react';

export default () => {
  const footer = [
    {
      title: '相关资源',
      items: [
        {
          title: 'GitHub',
          url: 'https://github.com/hootrhino',
          openExternal: true,
        },
      ],
    },
    {
      title: '帮助',
      items: [
        {
          icon: <IssuesCloseOutlined />,
          title: '讨论',
          url: 'https://github.com/hootrhino/rulex/issues',
          openExternal: true,
        },
      ],
    },
    {
      title: '更多产品',
      items: [
        {
          icon: <img src="./logo.svg" alt="eekit" />,
          title: 'EEKIT',
          url: '#',
          description: '轻量级边缘网关框架',
          openExternal: true,
        },
      ],
    },
  ];
  return (
    <Footer
      columns={footer}
      bottom={
        <div>
          Copyright © {new Date().getFullYear()} Made with{' '}
          <span style={{ color: '#e25555' }}>♥</span> by HootRhino Team
          <br />
          陇ICP备2023001865号
        </div>
      }
    />
  );
};
