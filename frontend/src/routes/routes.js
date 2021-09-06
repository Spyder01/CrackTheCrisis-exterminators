import Auth from '../views/Auth'
import Login from '../views/Login'
import Home from '../views/Home'

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
    }

]

export default routes;