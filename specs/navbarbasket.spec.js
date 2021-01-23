import { mount,shallowMount } from '@vue/test-utils'
import NavBar from '../src/components/Navbar.vue'
import BasketProduct from '../src/components/BasketProduct.vue'
import Store from '../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import * as $fire from 'firebase';
Vue.use(Vuex)

test('are basket products loaded', () => {
    const store=new Vuex.Store(Store)
    const wrappernb=mount(NavBar,{store})
    const wrapperbp=mount(BasketProduct,{store})
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

        var nbtotalq=wrappernb.find('#totalquantity').value
        var bptotalq=wrapperbp.find('#totalquantity').value
        var bptotalp=wrapperbp.find('#totalprice').value
        var linumber=wrapperbp.find('#products').lastChild.find('#index').innerHTML
        expect(nbtotalq).toEqual(totalquantityy)
        expect(bptotalq).toEqual(totalquantityy)
        expect(bptotalp).toEqual(totalprice)
        expect(linumber).toEqual(quantitytotal)  
})

test('is basketproduct vueinstance',()=>{
    const store=new Vuex.Store(Store)
    const wrappernb=mount(BasketProduct,{store})
    expect(wrappernb.isVueInstance()).toBe(true)
})

test('does basket product contain tages',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(BasketProduct,{store,data:{denemequan:1}})
    //wrapperbp.setData({denemequan:1})
    expect(wrapperbp.contains('div')).toBe(true)
    /*expect(wrapperbp.contains('p')).toBe(true)
    expect(wrapperbp.contains('span')).toBe(true)
    expect(wrapperbp.contains('ul')).toBe(true)*/
})

test('has the expected html structure',()=>{
    const store=new Vuex.Store(Store)
    const wrapperbp=mount(BasketProduct,{store})
    expect(wrapperbp.element).toMatchSnapshot()
})

describe('BasketProduct',()=>{
    it('has functions',()=>{
        expect(typeof BasketProduct.data).toBe('function')
    })
})