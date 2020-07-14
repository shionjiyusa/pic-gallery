import Homepage from './pages/Homepage';
import Picture from './pages/Picture';

const router = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/picture/:pid',
    component: Picture,
  },
];

export default router;
