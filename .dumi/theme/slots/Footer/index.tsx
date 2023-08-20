import { GithubOutlined, IssuesCloseOutlined } from '@ant-design/icons';
import { Footer } from 'dumi-theme-antd-style';
import React from 'react';

export default () => {
  const footer = [
    {
      title: '相关资源',
      items: [
        {
          title: 'Ant Design',
          url: 'https://ant.design',
          openExternal: true,
        },
        {
          title: 'Ant Design Pro',
          url: 'https://pro.ant.design',
          openExternal: true,
        },
        {
          title: 'Ant Design Pro Components',
          url: 'https://procomponents.ant.design',
          openExternal: true,
        },
        {
          title: 'Umi',
          description: 'React 应用开发框架',
          url: 'https://umijs.org',
          openExternal: true,
        },
        {
          title: 'Dumi',
          description: '组件/文档研发工具',
          url: 'https://d.umijs.org',
          openExternal: true,
        },
      ],
    },
    {
      title: '帮助',
      items: [
        {
          icon: <GithubOutlined />,
          title: 'GitHub',
          url: 'https://github.com/hootrhino',
          openExternal: true,
        },
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
