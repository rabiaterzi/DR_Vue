import { mount,shallowMount } from '@vue/test-utils'
import NavBar from '../src/components/Navbar.vue'
import BasketProduct from '../src/components/BasketProduct.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import * as $fire from 'firebase';
Vue.use(Vuex)

test('is basketproduct vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(BasketProduct,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('does basket product contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(BasketProduct,{store,data:{denemequan:1}})
    //wrapperbp.setData({denemequan:1})
    expect(wrapperbp.contains('div')).toBe(true)
    /*expect(wrapperbp.contains('p')).toBe(true)
    expect(wrapperbp.contains('span')).toBe(true)
    expect(wrapperbp.contains('ul')).toBe(true)*/
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(BasketProduct,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('BasketProduct',()=>{
    it('has functions',()=>{
        expect(typeof BasketProduct.data).toBe('function')
    })
})