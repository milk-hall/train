import React from 'react';
import Loadable from 'react-loadable';
import Popular from '@/pages/Popular';

const routes = [
  {
    path: '/popular',
    exact: true,
    component: Popular,
  },
  {
    path: '/battle',
    component: Loadable({
      loader: () => import('@/components/BattleContainer'),
      loading: () => <div />,
    }),
    routes: [
      {
        path: '/battle/index',
        component: Loadable({
          loader: () => import('@/pages/Battle'),
          loading: () => <div />,
        }),
      },
      {
        path: '/battle/result',
        component: Loadable({
          loader: () => import('@/pages/BattleResult'),
          loading: () => <div />,
        }),
      },
    ],
  },
];
export default routes;
