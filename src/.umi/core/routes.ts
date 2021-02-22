// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/zhangxueqing/Desktop/kk/ep-cli/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/zhangxueqing/Desktop/kk/ep-cli/src/layouts/index').default,
    "title": "ep-cli",
    "routes": [
      {
        "path": "/example",
        "component": require('/Users/zhangxueqing/Desktop/kk/ep-cli/src/layouts/level/index').default,
        "routes": [
          {
            "path": "/example/default",
            "component": require('/Users/zhangxueqing/Desktop/kk/ep-cli/src/pages/example').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
