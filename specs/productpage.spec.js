import { mount,shallowMount,createLocalVue } from '@vue/test-utils'
import ProductPage from '../pages/_id.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import SignIn from '../src/components/Login.vue'

Vue.use(Vuex)

test('does button click works',()=>{
    const wrapper=mount(ProductPage)
    var qty=wrapper.find('#qty').value

    expect(qty).toBe(1)
    wrapper.find('increase').trigger('click')
    expect(qty).toBe(2)
    wrapper.find('decrease').trigger('click')
    expect(qty).toBe(1)
})

test('is product page vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(ProductPage,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('are tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(ProductPage,{store})
    const ul=wrappernb.find('ul')
    expect(ul.name()).toBe('ul')
    const label=wrappernb.find('label')
    expect(label.name()).toBe('label')
    const input=wrappernb.find('input')
    expect(input.name()).toBe('input')
})

test('does navbar contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(ProductPage,{store})
    expect(wrappernb.contains('div')).toBe(true)
    expect(wrappernb.contains('ul')).toBe(true)
    expect(wrappernb.contains('li')).toBe(true)
    expect(wrappernb.contains('input')).toBe(true)
    expect(wrappernb.contains('button')).toBe(true)
    expect(wrappernb.contains('img')).toBe(true)
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(ProductPage,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('ProductPage',()=>{
    it('has functions',()=>{
        expect(typeof ProductPage.methods.btnDecrase).toBe('function')
        expect(typeof ProductPage.methods.addProductToCart).toBe('function')
        expect(typeof ProductPage.data).toBe('function')
    })
})