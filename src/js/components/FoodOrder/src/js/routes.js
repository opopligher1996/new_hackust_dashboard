import React from 'react';
import Loadable from 'react-loadable';
// import Home from './containers/Home';
// import About from './containers/About';
// import Demo from './containers/Demo';
// import Login from './containers/Login';
// import Details from './containers/BookingFlow/Details';
// import Intro from './containers/BookingFlow/Intro';
// import Payment from './containers/BookingFlow/Payment';
// import Basics from './containers/ListingFlow/Basics';
// import Experience from './containers/ListingFlow/Experience';
import { Redirect } from 'react-router-dom';

const Loading = () => <div>Loading</div>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ './containers/Home'),
  loading: Loading,
  modules: ['./containers/Home'],
  webpack: () => [require.resolveWeak('./containers/Home')],
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "About" */ './containers/About'),
  loading: Loading,
  modules: ['./containers/About'],
  webpack: () => [require.resolveWeak('./containers/About')],
});

const Demo = Loadable({
  loader: () => import(/* webpackChunkName: "Demo" */ './containers/Demo'),
  loading: Loading,
  modules: ['./containers/Demo'],
  webpack: () => [require.resolveWeak('./containers/Demo')],
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */ './containers/Login'),
  loading: Loading,
  modules: ['./containers/Login'],
  webpack: () => [require.resolveWeak('./containers/Login')],
});

const Details = Loadable({
  loader: () => import(/* webpackChunkName: "Details" */ './containers/BookingFlow/Details'),
  loading: Loading,
  modules: ['./containers/BookingFlow/Details'],
  webpack: () => [require.resolveWeak('./containers/BookingFlow/Details')],
});

const Intro = Loadable({
  loader: () => import(/* webpackChunkName: "Intro" */ './containers/BookingFlow/Intro'),
  loading: Loading,
  modules: ['./containers/BookingFlow/Intro'],
  webpack: () => [require.resolveWeak('./containers/BookingFlow/Intro')],
});

const Payment = Loadable({
  loader: () => import(/* webpackChunkName: "Payment" */ './containers/BookingFlow/Payment'),
  loading: Loading,
  modules: ['./containers/BookingFlow/Payment'],
  webpack: () => [require.resolveWeak('./containers/BookingFlow/Payment')],
});

const Finish = Loadable({
  loader: () => import(/* webpackChunkName: "Payment" */ './containers/BookingFlow/Finish'),
  loading: Loading,
  modules: ['./containers/BookingFlow/Finish'],
  webpack: () => [require.resolveWeak('./containers/BookingFlow/Finish')],
});

const Basics = Loadable({
  loader: () => import(/* webpackChunkName: "Basics" */ './containers/ListingFlow/Basics'),
  loading: Loading,
  modules: ['./containers/ListingFlow/Basics'],
  webpack: () => [require.resolveWeak('./containers/ListingFlow/Basics')],
});

const Experience = Loadable({
  loader: () => import(/* webpackChunkName: "Experience" */ './containers/ListingFlow/Experience'),
  loading: Loading,
  modules: ['./containers/ListingFlow/Experience'],
  webpack: () => [require.resolveWeak('./containers/ListingFlow/Experience')],
});

const ListingIntro = Loadable({
  loader: () => import(/* webpackChunkName: "ListingIntro" */ './containers/ListingFlow/Intro'),
  loading: Loading,
  modules: ['./containers/ListingFlow/Intro'],
  webpack: () => [require.resolveWeak('./containers/ListingFlow/Intro')],
});

const Pricing = Loadable({
  loader: () => import(/* webpackChunkName: "Pricing" */ './containers/ListingFlow/Pricing'),
  loading: Loading,
  modules: ['./containers/ListingFlow/Pricing'],
  webpack: () => [require.resolveWeak('./containers/ListingFlow/Pricing')],
});

const Publish = Loadable({
  loader: () => import(/* webpackChunkName: "Publish" */ './containers/ListingFlow/Publish'),
  loading: Loading,
  modules: ['./containers/ListingFlow/Publish'],
  webpack: () => [require.resolveWeak('./containers/ListingFlow/Publish')],
});

const Search = Loadable({
  loader: () => import(/* webpackChunkName: "Experience" */ './containers/Search'),
  loading: Loading,
  modules: ['./containers/Search'],
  webpack: () => [require.resolveWeak('./containers/Search')],
});

const ActivityDetail = Loadable({
  loader: () => import(/* webpackChunkName: "Experience" */ './containers/ActivityDetail'),
  loading: Loading,
  modules: ['./containers/ActivityDetail'],
  webpack: () => [require.resolveWeak('./containers/ActivityDetail')],
});

export default [
    {
        path: "/",
        name: 'Home',
        component: Home,
        exact: true,
        showOnNav: true
    },
    {
        path: "/about",
        name: 'About',
        component: About,
        exact: true,
        showOnNav: true
    },
    {
        path: "/demo",
        name: 'Demo',
        component: Demo,
        exact: true,
        showOnNav: true
    },
    {
        path: "/login",
        name: 'Login',
        component: Login,
        exact: true,
        showOnNav: false
    },
    {
        path: "/booking",
        component: () => <Redirect to='/booking/detail' />,
        exact: true,
        showOnNav: false
    },
    {
        path: "/booking/detail",
        component: Details,
        exact: true,
        showOnNav: false
    },
    {
        path: "/booking/intro",
        component: Intro,
        exact: true,
        showOnNav: false
    },
    {
        path: "/booking/payment",
        component: Payment,
        exact: true,
        showOnNav: false
    },
    {
        path: "/booking/finish",
        component: Finish,
        exact: true,
        showOnNav: false
    },
    {
        path: "/listing",
        component: () => <Redirect to='/listing/basics' />,
        exact: true,
        showOnNav: false
    },
    {
        path: "/listing/basics",
        component: Basics,
        exact: true,
        showOnNav: false
    },
    {
        path: "/listing/experience",
        component: Experience,
        exact: true,
        showOnNav: false
    },
    {
        path: "/listing/intro",
        component: ListingIntro,
        exact: true,
        showOnNav: false
    },
    {
        path: "/listing/pricing",
        component: Pricing,
        exact: true,
        showOnNav: false
    },
    {
        path: "/listing/publish",
        component: Publish,
        exact: true,
        showOnNav: false
    },
    {
        path:"/search",
        component: Search,
        exact: true,
        showOnNav: false
    },
    {
        path:"/activity",
        component: ActivityDetail,
        exact: true,
        showOnNav: false
    }
];
