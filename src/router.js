import VueRouter from 'vue-router';
import Basket from './components/Basket.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path:"/ornek",
            name:"ornek",
            component: Basket
        }
    ]
})
