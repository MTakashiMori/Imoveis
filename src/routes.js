import Home from 'components/Home.vue'
import About from 'components/About.vue'

const routes = new VueRouter([
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
])