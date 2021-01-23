import { mount,shallowMount } from '@vue/test-utils'
import Slider from '../src/components/Slider.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import Store from '../store/index'
Vue.use(Vuex)

test('is navbar vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Slider,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('are categories tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrapperc=mount(Slider,{store})
    const ol=wrapperc.find('ol')
    expect(ol.name()).toBe('ol')
    const span=wrapperc.find('span')
    expect(span.name()).toBe('span')
    const li=wrapperc.find('li')
    expect(li.name()).toBe('li')
})

test('does categories contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrapperc=mount(Slider,{store})
    expect(wrapperc.contains('div')).toBe(true)
    expect(wrapperc.contains('ol')).toBe(true)
    expect(wrapperc.contains('li')).toBe(true)
    expect(wrapperc.contains('img')).toBe(true) 
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(Slider,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})