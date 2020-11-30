/*export const state =()=>({
    counter:1
})

export const mutations={
    increment(state){
        state.counter++
    }
}*/

export const state =()=>({
    products:[],
    cart:[],
    count:1
})
export const actions={
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