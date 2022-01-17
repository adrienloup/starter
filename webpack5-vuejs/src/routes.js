import AppHome from './components/AppHome.vue';
import AppAbout from './components/AppAbout.vue';
import AppUser from './components/AppUser.vue';
import AppError from './components/AppError.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
	  {
        path: '/about',
        name: 'About',
        component: AppAbout
    },
	  {
        path: '/users',
        name: 'Web API',
        component: AppUser
    },
	  {
        path: '/*',
        name: 'Secret',
        component: AppError
    }
];

export default routes;
