import { mount,shallowMount,createLocalVue } from '@vue/test-utils'
import Comments from '../src/components/Comment.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import * as $fire from 'firebase';
Vue.use(Vuex)

test('are signin tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Comments,{store})
    const section=wrappernb.find('section')
    expect(section.name()).toBe('section')
    const div=wrappernb.find('div')
    expect(div.name()).toBe('div')
    const header=wrappernb.find('header')
    expect(header.name()).toBe('header')
  })
  
  test('does signin contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(Comments,{store})
    expect(wrappernb.contains('div')).toBe(true)
    expect(wrappernb.contains('section')).toBe(true)
    expect(wrappernb.contains('header')).toBe(true)
    expect(wrappernb.contains('ul')).toBe(true)
    expect(wrappernb.contains('a')).toBe(true)
  })
  
  test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(Comments,{store})
    expect(wrapperbp.element).toMatchSnapshot()
  })