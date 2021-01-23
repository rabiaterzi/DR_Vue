import { mount} from '@vue/test-utils'
import Sectiklerimiz from '../pages/Sectiklerimiz.vue'
import rankingbar from '../src/components/RankingBar.vue'
import Login from '../pages/login.vue'
import login from '../src/components/Login.vue'
import Navbar from '../src/components/Navbar.vue'
import Categories from '../src/components/Categories.vue'
import BasketProduct from '../src/components/BasketProduct.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

test('does login page contain components',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Login,{store})
    expect(wrappernb.contains(login)).toBe(true)
})

test('does Sectiklerimiz page contain components',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Sectiklerimiz,{store})
    expect(wrappernb.contains(rankingbar)).toBe(true)
})

test('does navbar contain components',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Navbar,{store})
    expect(wrappernb.contains(Categories)).toBe(true)
    expect(wrappernb.contains(BasketProduct)).toBe(true)
})

test('has the expected html structure',()=>{
    const wrapperbp=mount(rankingbar)
    expect(wrapperbp.element).toMatchSnapshot()
    
    const wrapperc=mount(Categories)
    expect(wrapperc.element).toMatchSnapshot()
})
