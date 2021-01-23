import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Basket from '../src/components/Basket.vue'
import Login from '../src/components/Login.vue'
import Store from '../store/index'
import * as $fire from 'firebase';

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

describe('action addProductToBasket',()=>{
  /*let actions
  let store

  beforeEach(() => {
    actions = {
      addProductToBasket: jest.fn(),
      signIn:jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })*/

  var userr
  var cartItem
  var uid='GzZHFDXCKxMJcf9UMKxpia4RvUt2'
  Store.actions.signIn('fatmaercan@gmail.com','Fatmaercan1')
  this.$fire.auth.onAuthStateChanged(user=>{
      userr=user
    }) 
  var product={id:9,name:'Vezir Gambiti',author:'Walter Tevis',img:'https://i.dr.com.tr/cache/500x400-0/originals/0001900705001-1.jpg',
            kapak:'İnce Kapak',price:22.04,pricewd:38.00,discount:42,publisher:'İthaki Yayınları'}
  it('does action "addProductToBasket" work',()=>{
    Store.actions.addProductToBasket(product,userr,1)
    $fire.database.ref('/users/'+uid+'/basketitems/'+product.id).on('value',(snapshot)=>{      
      cartItem=snapshot.val()
  })
  expect(cartItem).toBe(true)
  })
})
