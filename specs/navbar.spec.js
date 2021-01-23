import { mount} from '@vue/test-utils'
import NavBar from '../src/components/Navbar.vue'
import Categories from '../src/components/Categories.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

test('can menu be opened', () => {
    const store=new Vuex.Store(Store)
    const wrappernb=mount(NavBar,{store})
    var category=wrappernb.find('#category')

    wrappernb.find('#menuackapa').trigger('click')
    expect(category.isVisible()).toBe(true)
})

test('can basket be opened', () => {
    const store=new Vuex.Store(Store)
    const wrappernb=mount(NavBar,{store})
    var basket=wrappernb.find('#sepet')

    wrappernb.find('#sepetackapa').trigger('click')
    expect(basket.isVisible()).toBe(true)
})

test('is navbar vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(NavBar,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('are navbar tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(NavBar,{store})
    const ul=wrappernb.find('ul')
    expect(ul.name()).toBe('ul')
    const span=wrappernb.find('span')
    expect(span.name()).toBe('span')
    const input=wrappernb.find('input')
    expect(input.name()).toBe('input')
})

test('are categories tages true',()=>{
    const wrapperc=mount(Categories)
    const ul=wrapperc.find('ul')
    expect(ul.name()).toBe('ul')
    const span=wrapperc.find('span')
    expect(span.name()).toBe('span')
    const li=wrapperc.find('li')
    expect(li.name()).toBe('li')
})

test('does categories contain tages',()=>{
    const wrapperc=mount(Categories)
    expect(wrapperc.contains('div')).toBe(true)
    expect(wrapperc.contains('ul')).toBe(true)
    expect(wrapperc.contains('li')).toBe(true)
    expect(wrapperc.contains('span')).toBe(true)
})

test('does navbar contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(NavBar,{store})
    expect(wrappernb.contains('div')).toBe(true)
    expect(wrappernb.contains('ul')).toBe(true)
    expect(wrappernb.contains('li')).toBe(true)
    expect(wrappernb.contains('input')).toBe(true)
    expect(wrappernb.contains('button')).toBe(true)
    expect(wrappernb.contains('img')).toBe(true)
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(NavBar,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('NavBar',()=>{
    it('has functions',()=>{
        expect(typeof NavBar.methods.menuackapa).toBe('function')
        expect(typeof NavBar.methods.sepetackapa).toBe('function')
        expect(typeof NavBar.methods.signOut).toBe('function')
        expect(typeof NavBar.data).toBe('function')
    })
})