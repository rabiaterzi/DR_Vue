<template>
    <div class="konteynır"><div>{{getproducts}}</div>
        <div class="subHeader blackColor">
            <h2 class="text-center d-block"> İlginizi &#199;ekebilecek &#220;r&#252;nler...  <span class="tooltipBtn right" data-tooltip="Tek tıkla sepetinize taşıyabileceğiniz ürünler..."></span> </h2>  
        </div> 
           <div v-for="product in sproducts" v-bind:key="product" style="margin-left:60px">          
                <div class="prd" >
                    <div class="product-img">
                        <a>
                            <img class="lazyload" :src="product.img">
                        </a>
                    </div>
                    <a class="prd-name"> {{product.name}}</a>
                    <div class="prd-price-wrapper dr-flex flex-wrap">
                        <div class="prd-price font-weight-bold fs-7">
                            {{product.price.toFixed(2)}}<span> TL</span>
                        </div>
                    </div>
                    <div class="prd-buttons">
                        <a @click="addProductToCart(product)" class="btn">
                            SEPETE EKLE
                        </a>
                    </div>
                </div>
           </div>       
    </div>
</template>

<script>
import store from '../../store/index'
  export default {
    name: 'SProduct',
    data(){
        return{
            sproducts:[],
            count:1
        }
    },
   components:{
      
   },
   methods:{
       addProductToCart(product)
        {
            this.$store.dispatch('addProductToBasket',{product:product,user:this.authUser,count:this.count})
        }
   },
   computed:{
      /*products(){
        return this.$store.state.sproducts
      },*/
      getproducts(){      
              this.$fire.database.ref('/products').on('value',(snapshot)=>{      
                this.sproducts=snapshot.val()
          })
      },
      authUser(){
        return this.$store.getters.takeuser
      }
   },     
}

</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
@import "../css/cartSlickSlider.css";
.prd{
    width: 200px;
    float: left;
}
.product-img{
    height: 200px;
}
.prd-name{
    font-size: 13px;
}
.prd-price{
    font-size: 13px;
}
.konteynır{
    margin-left: 50px;
}
</style>
