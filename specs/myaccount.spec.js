import { mount} from '@vue/test-utils'
import MyAccount from '../src/components/Hesabim.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

test('is myaccount page vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(MyAccount,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('does myaccount page contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(MyAccount,{store})
    expect(wrappernb.contains('div')).toBe(true)
    expect(wrappernb.contains('ul')).toBe(true)
    expect(wrappernb.contains('li')).toBe(true)
    expect(wrappernb.contains('input')).toBe(true)
    expect(wrappernb.contains('label')).toBe(true)
    expect(wrappernb.contains('section')).toBe(true)
})

test('are myaccount page tages true',()=>{
    const store=new Vuex.Store(Store)
    const wrapperc=mount(MyAccount,{store})
    const ul=wrapperc.find('ul')
    expect(ul.name()).toBe('ul')
    const button=wrapperc.find('button')
    expect(button.name()).toBe('button')
    const li=wrapperc.find('li')
    expect(li.name()).toBe('li')
    const input=wrapperc.find('input')
    expect(input.name()).toBe('input')
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(MyAccount,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('MyAccount',()=>{
    it('has functions',()=>{
        expect(typeof MyAccount.methods.updatePassword).toBe('function')
        expect(typeof MyAccount.methods.openupdate).toBe('function')
        expect(typeof MyAccount.methods.updateInfo).toBe('function')
        expect(typeof MyAccount.data).toBe('function')
    })
})