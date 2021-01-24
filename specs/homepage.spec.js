import { mount,shallowMount } from '@vue/test-utils'
import HomePage from '../pages/index.vue'
import Store from '../store/index.js'
import Vue from 'vue'
import Vuex from 'vuex'
import * as $fire from 'firebase';
Vue.use(Vuex)

test('are tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(HomePage,{store,$fire})
    const div=wrappernb.find('div')
    expect(div.name()).toBe('div')
    const span=wrappernb.find('span')
    expect(span.name()).toBe('span')
    const a=wrappernb.find('a')
    expect(a.name()).toBe('a')
})

test('does navbar contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(HomePage,{store,$fire})
    expect(wrappernb.contains('div')).toBe(true)
    expect(wrappernb.contains('span')).toBe(true)
    expect(wrappernb.contains('section')).toBe(true)
    expect(wrappernb.contains('a')).toBe(true)
    expect(wrappernb.contains('h2')).toBe(true)
    expect(wrappernb.contains('img')).toBe(true)
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(HomePage,{store,$fire})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('HomePage',()=>{
    it('has functions',()=>{
        expect(typeof HomePage.data).toBe('function')
    })
})