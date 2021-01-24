import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Basket from '../src/components/Basket.vue'
import Login from '../src/components/Login.vue'
import Store from '../store/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Basket.vue', () => {
    let actions
    let store
  
    beforeEach(() => {
      actions = {
        removeProduct: jest.fn()
      }
      store = new Vuex.Store({
        actions
      })
    })
  
    it('calls store action "removeProduct" when button is clicked', () => {
      const wrapper = shallowMount(Basket, { store, localVue })
      wrapper.vm.urunusil(5)
      expect(actions.removeProduct).toHaveBeenCalled()
    })
  })

  describe('Login.vue', () => {
    let actions
    let store
  
    beforeEach(() => {
      actions = {
        signIn: jest.fn()
      }
      store = new Vuex.Store({
        actions
      })
    })
  
    it('calls store action "signIn" when button is clicked', () => {
      const wrapper = shallowMount(Login, { store, localVue })
      wrapper.find('#login_btn').trigger('click')
      expect(actions.signIn).toHaveBeenCalled()
    })
  })

