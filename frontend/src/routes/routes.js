import Auth from '../views/Auth'
import Login from '../views/Login'
import Home from '../views/Home'
import Jobs from '../views/Jobs';
import Register from '../views/Register';

const routes = [
    { 
        path: '/', 
        component: Auth,
        exact: true
    },
    {
        path: '/login', 
        component: Login,
        exact: true
    },
    {
        path:'/home',
        component:Home,
        exact:true
    },
    {
        path:'/jobs',
        component:Jobs,
        exact:true
    },
    {
        path: '/register',
        component:Register,
        exact: true
    }

]

export default routes;