

export const state =()=>({
    products:[{"id":1,"name":"Koronadan Korunmak Mümkün","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001895541001-1.jpg","author":"Dr. Ümit Aktaş","publisher":"Alfa Yayıncılık","kapak":"İnce Kapak","pricewd":19.00 ,"price":13.30  ,"discount":30},
    {"id":2,"name":"Dürüst Yalancı","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894524001-1.jpg","author":"Tove Jansson","publisher":"Siren Yayınları","kapak":"İnce Kapak","pricewd":24.00 ,"price":18.00 ,"discount":25},
    {"id":3,"name":"Camları Kırın Kuşlar Kurtulsun","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001893223001-1.jpg","author":"Fatoş Güney","publisher":"İthaki Yayınları","kapak":"İnce Kapak","pricewd":38.00 ,"price":23.94 ,"discount":37},
    {"id":4,"name":"Mutsuz Olan Cennete Gidemez","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894661001-1.jpg","author":"Zaza Yurtsever","publisher":"Destek Yayınları","kapak":"İnce Kapak","pricewd":29.00 ,"price":21.75 ,"discount":25},
    {"id":5,"name":"Terapi Odasında İyileşen İlişkiler","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894011001-1.jpg","author":"Bahar Tezcan","publisher":"Küsurat","kapak":"İnce Kapak","pricewd":34.00 ,"price":20.40 ,"discount":40},
    {"id":6,"name":"Pinball 1973","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001895640001-1.jpg","author":"Ömer Yenici","publisher":"Nemesis Kitap","kapak":"İnce Kapak","pricewd":32.00 ,"price":23.36,"discount":27}
             ],
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
        },
        urunusil(context,pindex)
        {
            //const cartItem = context.state.cart.find(item=>item.id===product.id)
            context.commit('removeproduct',pindex)
        }
}
export const getters={
    cartProducts(state){
        return state.cart.map(cartItem=>{
            const product = state.products.find(product=>product.id===cartItem.id)
            return{
                img:product.img,
                name:product.name,    
                author:product.author,
                kapak:product.kapak, 
                pricewd:product.pricewd,
                price:product.price, 
                discount:product.discount,
                quantity:cartItem.quantity,
                pprice:product.price*cartItem.quantity
            }
        })
    },
    cartTotal(state,getters){
        return getters.cartProducts.reduce((total,product)=>total+product.price*product.quantity,0)
    },
    totalQuantity(state,getters){
        return getters.cartProducts.reduce((total,product)=>total+product.quantity,0)
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
    },
    removeproduct(state,pindex)
    {
        state.cart.splice(pindex,1)
       
    }
}
