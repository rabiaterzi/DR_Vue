import { mount } from '@vue/test-utils'
import Store from '../store/index'
import NavBar from '../src/components/Navbar.vue'
import Basket from '../src/components/Basket.vue'
import BasketProduct from '../src/components/BasketProduct.vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const firebase = jest.genMockFromModule('firebase');

firebase.initializeApp = jest.fn();
//{ name: 'data' }
const products = [{"id":1,"name":"Koronadan Korunmak Mümkün","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001895541001-1.jpg","author":"Dr. Ümit Aktaş","publisher":"Alfa Yayıncılık","kapak":"İnce Kapak","pricewd":19.9 ,"price":13.3  ,"discount":30},
{"id":2,"name":"Dürüst Yalancı","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894524001-1.jpg","author":"Tove Jansson","publisher":"Siren Yayınları","kapak":"İnce Kapak","pricewd":24.9 ,"price":18.9 ,"discount":25},
{"id":3,"name":"Camları Kırın Kuşlar Kurtulsun","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001893223001-1.jpg","author":"Fatoş Güney","publisher":"İthaki Yayınları","kapak":"İnce Kapak","pricewd":38.9 ,"price":23.9 ,"discount":37},
{"id":4,"name":"Mutsuz Olan Cennete Gidemez","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894661001-1.jpg","author":"Zaza Yurtsever","publisher":"Destek Yayınları","kapak":"İnce Kapak","pricewd":29.9 ,"price":21.7 ,"discount":25},
{"id":5,"name":"Terapi Odasında İyileşen İlişkiler","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894011001-1.jpg","author":"Bahar Tezcan","publisher":"Küsurat","kapak":"İnce Kapak","pricewd":34.9 ,"price":20.4 ,"discount":40},
{"id":6,"name":"Pinball 1973","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001895640001-1.jpg","author":"Ömer Yenici","publisher":"Nemesis Kitap","kapak":"İnce Kapak","pricewd":32.9 ,"price":23.3,"discount":27}]

var snapshot = { val: () => products, exportVal: () => products, exists: jest.fn(() => true) };

firebase.database = jest.fn().mockReturnValue({
  ref: jest.fn().mockReturnThis(),
  on: jest.fn((eventType, callback) => callback(snapshot))
});

test('home page products',()=>{
      var products=[]
      var quantitytotal=0
    firebase.database().ref('/products').on('value',(snapshot)=>{      
        products=snapshot.val()
        quantitytotal=Object.keys(products).length
    })
        expect(quantitytotal).toBe(6)
        expect(products[0].name).toBe('Koronadan Korunmak Mümkün')
  })

  const onAuthStateChanged = jest.fn();
  const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
  const initializeApp = jest // eslint-disable-line no-unused-vars
  .spyOn(firebase, 'initializeApp')
  .mockImplementation(() => ({
    auth: () => ({
      signInWithEmailAndPassword
    }),
  }));

  jest.spyOn(firebase, 'auth').mockImplementation(() => ({
    onAuthStateChanged
  }));
    test('can user sign in',()=>{
      var userr
      firebase.auth().signInWithEmailAndPassword('fatmaercan@gmail.com','Fatmaercan1')
      firebase.auth().onAuthStateChanged(user=>{
        userr=user
        })    
      expect(userr).toBe(true)
    })


    const addProduct = {
    template: `
      <div>
        <button id="ekle" @click="addProductToBasket(product)">Add product</button>
      </div>
    `,
    data() {
      return {product:{id:9,name:'Vezir Gambiti',author:'Walter Tevis',img:'https://i.dr.com.tr/cache/500x400-0/originals/0001900705001-1.jpg',
      kapak:'İnce Kapak',price:22.04,pricewd:38.00,discount:42,publisher:'İthaki Yayınları'} }
    },
    methods:{
        addProductToBasket(product){
            var cartItem;
            var quantityy;
            var useruid='iXedtLz6GuO16hoXPhHg9WqYZQD3'
            firebase.database().ref('/users/'+useruid+'/basketitems/'+product.id).on('value',(snapshot)=>{      
               cartItem=snapshot.val()
           })
           firebase.database().ref('/users/'+useruid+'/basketitems/'+product.id+'/quantity').on('value',(snapshot)=>{      
            quantityy=snapshot.val()
       })
         if(!cartItem){
             firebase.database().ref('/users/'+useruid+'/basketitems/'+product.id).set({
                 id:product.id,
                 img:product.img,
                 name:product.name,    
                 author:product.author,
                 kapak:product.kapak, 
                 pricewd:product.pricewd,
                 price:product.price, 
                 discount:product.discount,
                 quantity:count
             })
         }
         else {
             firebase.database().ref('/users/'+useruid+'/basketitems/'+product.id).update({
                 quantity:quantityy+1
             })
         }
        }
    }
  }

  test('can product added to basket',()=>{
    const wrapper = mount(addProduct)
    const button = wrapper.find('button')
    var cartItem;
    var quantity=0
    var useruid='iXedtLz6GuO16hoXPhHg9WqYZQD3'
    
    firebase.database().ref('/users/'+useruid+'/basketitems/'+9).on('value',(snapshot)=>{      
        cartItem=snapshot.val()
        quantity=Object.keys(cartItem).length
    })
    expect(quantity).toBe(0)
    button.trigger('click')
    expect(quantity).toBe(1)
  })

  

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
    firebase.database().ref('/users/'+useruid+'/basketitems').on('value',(snapshot)=>{      
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

test('can product remove from basket',()=>{
  const store=new Vuex.Store(Store)
  const wrapperb=mount(Basket,{store})
  var cartItem={}
  //productId=5
  store.dispatch('signIn',{email:'nisademir@gmail.com',password:'Nisademir1'})
  var user=store.state.user
  var useruid='iXedtLz6GuO16hoXPhHg9WqYZQD3'
  firebase.database().ref('/users/'+useruid+'/basketitems/'+5).on('value',(snapshot)=>{      
      cartItem=snapshot.val()})
  store.dispatch('removeproduct',{id:5,user:user})
  expect(cartItem).toBe(false)
})

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
  firebase.database().ref('/users/'+useruid+'/basketitems').on('value',(snapshot)=>{      
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
