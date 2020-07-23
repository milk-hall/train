import Popular from '@/pages/Popular';
import Battle from '@/pages/Battle';
import BattleResult from '@/pages/BattleResult';
import BattleContainer from '@/components/BattleContainer';

const routes = [
  {
    path: '/popular',
    exact: true,
    component: Popular,
  },
  {
    path: '/battle',
    component: BattleContainer,
    routes: [
      {
        path: '/battle/index',
        component: Battle,
      },
      {
        path: '/battle/result',
        component: BattleResult,
      },
    ],
  },
];
export default routes;
