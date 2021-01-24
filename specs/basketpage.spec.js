import { mount,shallowMount } from '@vue/test-utils'
import NavBar from '../src/components/Navbar.vue'
import Basket from '../src/components/Basket.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
//import firebase from 'firebase/app';
//import 'firebase/database';
Vue.use(Vuex)

test('is basketpage vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Basket,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('are tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Basket,{store})
    const span=wrappernb.find('span')
    expect(span.name()).toBe('span')
    const label=wrappernb.find('label')
    expect(label.name()).toBe('label')
    const input=wrappernb.find('input')
    expect(input.name()).toBe('input')
})

test('does basket page contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Basket,{store})
    expect(wrappernb.contains('div')).toBe(true)
    expect(wrappernb.contains('label')).toBe(true)
    expect(wrappernb.contains('span')).toBe(true)
    expect(wrappernb.contains('a')).toBe(true)
    expect(wrappernb.contains('h1')).toBe(true)
    expect(wrappernb.contains('button')).toBe(true)
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(Basket,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('Basket',()=>{
    it('has functions',()=>{
        expect(typeof Basket.methods.Decrase).toBe('function')
        expect(typeof Basket.methods.urunusil).toBe('function')
        expect(typeof Basket.data).toBe('function')
    })
})