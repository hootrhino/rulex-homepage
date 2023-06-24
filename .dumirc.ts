import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';

import { featuresZh } from './config/features';

const themeConfig: SiteThemeConfig = {
  name: 'RULEX',
  logo: '',
  hero: {
    description: '轻量级边缘网关框架',
    actions: [
      {
        type: 'primary',
        text: '开始了解',
        link: '/about',
      },
      {
        text: 'Github',
        link: 'https://github.com/hootrhino/rulex',
        openExternal: true,
      },
    ],
    features: featuresZh,
  },
  socialLinks: { github: 'https://github.com/hootrhino' },
};

export default defineConfig({
  themeConfig,
  favicons: [''],
  // extraBabelPlugins: ['@emotion'],
  styles: [
    `html, body { background: transparent;}
     @media (prefers-color-scheme: dark) {
     html, body { background: #0E1116; }
  }`,
  ],
  mfsu: false,
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
});
