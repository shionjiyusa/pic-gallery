import Homepage from './pages/Homepage';
import Picture from './pages/Picture';
import Login from './components/Menu/Login';
import Register from './components/Menu/Register';

const router = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/picture/:pid',
    component: Picture,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

export default router;
