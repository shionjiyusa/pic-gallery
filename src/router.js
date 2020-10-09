import { lazy } from 'react';

// 页面使用懒加载
const Homepage = lazy(() => import(/* webpackChunkName: "homepage" */ './pages/Homepage'));
const Picture = lazy(() => import(/* webpackChunkName: "picture" */ './pages/Picture'));
const User = lazy(() => import(/* webpackChunkName: "user" */ './pages/User'));
const Login = lazy(() => import(/* webpackChunkName: "login" */ './components/Menu/Login'));
const Register = lazy(() =>
  import(/* webpackChunkName: "register" */ './components/Menu/Register')
);
const Upload = lazy(() => import(/* webpackChunkName: "upload" */ './components/Upload'));
const Search = lazy(() => import(/* webpackChunkName: "search" */ './components/Search'));

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
    path: '/user/:uid',
    component: User,
  },
  {
    path: '/picture/:pid/:limit',
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
  {
    path: '/upload',
    component: Upload,
  },
  {
    path: '/search/:k?',
    component: Search,
  },
];

export default router;
