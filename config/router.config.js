import { example } from './routerConfigs/example';

let routes = [
  {
    path: '/', component: '../layouts/index', title: 'ep-cli', // 全局布局
    routes: [
      example
    ],
  }
];

export { routes };
