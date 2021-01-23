import { mount,shallowMount } from '@vue/test-utils'
import NavBar from '../src/components/Navbar.vue'
import Basket from '../src/components/Basket.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import * as $fire from 'firebase';
Vue.use(Vuex)

test('are basket products loaded', () => {
    const store=new Vuex.Store(Store)
    const wrapperb=mount(Basket,{store})
    store.dispatch('signIn',{email:'nisademir@gmail.com',password:'Nisademir1'})
    var user=store.state.user
    var cart=[]
    var quantitytotal=0
    var totalquantityy=0
    var totalprice=0
    var useruid='iXedtLz6GuO16hoXPhHg9WqYZQD3'
    $fire.database.ref('/users/'+useruid+'/basketitems').on('value',(snapshot)=>{      
        cart=snapshot.val()
        quantitytotal=Object.keys(cart).length
        if(quantitytotal>0){
            snapshot.forEach((element) => {
                sayi+=element.val().quantity
                toplam+=element.val().quantity*element.val().price          
            })
            totalquantityy=sayi
            totalprice=toplam
        }
      })  
        var bptotalq=wrapperb.find('#totalquantity').value
        var bptotalp=wrapperb.find('#totalprice').value
        var linumber=wrapperb.find('#products').lastChild.find('#index').innerHTML
        expect(bptotalq).toEqual(totalquantityy)
        expect(bptotalp).toEqual(totalprice)
        expect(linumber).toEqual(quantitytotal)  
})

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

test('can product remove from basket',()=>{
    const store=new Vuex.Store(Store)
    const wrapperb=mount(Basket,{store})
    var cartItem={}
    //productId=5
    store.dispatch('signIn',{email:'nisademir@gmail.com',password:'Nisademir1'})
    var user=store.state.user
    this.$fire.database.ref('/users/'+user.uid+'/basketitems/'+5).on('value',(snapshot)=>{      
        cartItem=snapshot.val()})
    store.dispatch('removeproduct',{id:5,user:user})
    expect(cartItem).toBe(false)
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