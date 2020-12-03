/*export const state =()=>({
    counter:1
})

export const mutations={
    increment(state){
        state.counter++
    }
}*/
/*{ async fetch(){
        this.products=await fetch(
        'https://my-json-server.typicode.com/rabiaterzi/DR_Vue/products'
        ).then((res)=>res.json())}}*/
export const state =()=>({
    products:[{id:1,name:"Koronadan Korunmak Mümkün",kapak:'İnce Kapak',img:"https://i.dr.com.tr/cache/154x170-0/originals/0001895541001-1.jpg",price:13.30},
              {id:2,name:'Dürüst Yalancı',kapak:'İnce Kapak',img:'https://i.dr.com.tr/cache/154x170-0/originals/0001894524001-1.jpg',price:18.00},
              {id:3,name:'Camları Kırın Kuşlar Kurtulsun',kapak:'İnce Kapak',img:'https://i.dr.com.tr/cache/154x170-0/originals/0001893223001-1.jpg',price:23.94},
              {id:4,name:'Mutsuz Olan Cennete Gidemez',kapak:'İnce Kapak',img:'https://i.dr.com.tr/cache/154x170-0/originals/0001894661001-1.jpg',price:21.75},
              {id:5,name:'Terapi Odasında İyileşen İlişkiler',kapak:'İnce Kapak',img:'https://i.dr.com.tr/cache/154x170-0/originals/0001894011001-1.jpg',price:20.40},
              {id:6,name:'Pinball 1973',kapak:'İnce Kapak',img:'https://i.dr.com.tr/cache/154x170-0/originals/0001895640001-1.jpg',price:23.36}
             ],
    cart:[],
    count:1
})

export const actions={
        /*fetchProducts(){
            return{
            async fetch(){
                this.products=await fetch(
                'https://my-json-server.typicode.com/rabiaterzi/DR_Vue/products'
                ).then((res)=>res.json())}}
        },*/
        addProductToCart (context,product)
        {
           const cartItem = context.state.cart.find(item=>item.id===product.id)
           if(!cartItem){
                context.commit('pushProductToCart',product.id)
           }
           else{
                context.commit('incrementItemQuantity',cartItem)
           }
           
        },
        denemeaction(context){
            context.commit('denemeaction')
        }
}
export const getters={
    cartProducts(state){
        return state.cart.map(cartItem=>{
            const product = state.products.find(product=>product.id===cartItem.id)
            return{
                img:product.img,
                name:product.name,
                kapak:product.kapak,
                price:product.price
            }
        })
    }
}
export const mutations={
    setProducts(state,products){
        state.products=products
    },
    pushProductToCart(state,productId)
    {
        state.cart.push({
            id:productId,
            quantity:1
        })
    },
    incrementItemQuantity(state,cartItem)
    {
        cartItem.quantity++
    },
    denemeaction(state){
        state.count++
    }
}

/*import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vuex.Store({
    state:()=>({
        products:[],
        cart:[],
        count:1
    }),
    getters:{
        productsCount(){
            
        }
    },
    actions:{
        fetchProducts(){

        },
        addProductToCart (context,product)
        {
           const cartItem = context.state.cart.find(item=>item.id===product.id)
           if(!cartItem){
                context.commit('pushProductToCart',product.id)
           }
           else{
                context.commit('incrementItemQuantity',cartItem)
           }
           
        }
    },
    mutations:{
        setProducts(state,products){
            state.products=products
        },
        pushProductToCart(state,productId)
        {
            state.cart.push({
                id:productId,
                quantity:1
            })
        },
        incrementItemQuantity(state,cartItem)
        {
            cartItem.quantity++
        }
    }
})*/