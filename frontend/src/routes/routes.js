import Auth from '../views/Auth'
import Login from '../views/Login'
import Home from '../views/Home'
import Jobs from '../views/Jobs';

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
    }

]

export default routes;