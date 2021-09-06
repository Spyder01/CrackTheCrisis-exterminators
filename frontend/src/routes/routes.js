import Auth from '../views/Auth'
import Login from '../views/Login'

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
    }

]

export default routes;