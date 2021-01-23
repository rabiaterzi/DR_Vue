import { mount,shallowMount,createLocalVue } from '@vue/test-utils'
import ProductPage from '../pages/_id.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import SignIn from '../src/components/Login.vue'

Vue.use(Vuex)

var product={id:9,name:'Vezir Gambiti',author:'Walter Tevis',img:'https://i.dr.com.tr/cache/500x400-0/originals/0001900705001-1.jpg',
            kapak:'İnce Kapak',price:22.04,pricewd:38.00,discount:42,publisher:'İthaki Yayınları'}
var count=1
var cartItem=[]
test('can product added to basket', () => {
    const store=new Vuex.Store(Store)
    const wrapperr=mount(SignIn,{store})
    store.dispatch('signIn',{email:'nisademir@gmail.com',password:'Nisademir1'})
    var user=store.state.user
    const wrapper=mount(ProductPage,{store})
    wrapper.vm.addProductToBasket({product:product,user:user,count:count})
    this.$fire.database.ref('/users/'+user.uid+'/basketitems/'+product.id).on('value',(snapshot)=>{      
        cartItem=snapshot.val()
    })
    expect(cartItem).toBe(true)
})

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