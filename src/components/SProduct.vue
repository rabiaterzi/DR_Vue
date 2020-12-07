<template>
    <div class="konteynır">
        <div class="subHeader blackColor">
            <h2 class="text-center d-block"> İlginizi &#199;ekebilecek &#220;r&#252;nler...  <span class="tooltipBtn right" data-tooltip="Tek tıkla sepetinize taşıyabileceğiniz ürünler..."></span> </h2>
        </div>
        <div v-for="product in products" v-bind:key="product">
             <div style="margin-left:170px">
                <div class="prd" data-id="1259753" data-name="İlginizi &#199;ekebilecek &#220;r&#252;nler..." data-sku="0001893536001">
                    <div class="product-img">
                        <a href="/Kitap/Kral-Sakir-9-Muhtisim-Dedektifler/Varol-Yasaroglu/Cocuk-ve-Genclik/Genclik-10-Yas/Roman-Oyku/urunno=0001893536001">
                            <img class="lazyload" :src="product.img" alt="Kral Şakir 9 - Muhtişim Dedektifler!">
                        </a>
                    </div>
                    <a class="prd-name" href="/Kitap/Kral-Sakir-9-Muhtisim-Dedektifler/Varol-Yasaroglu/Cocuk-ve-Genclik/Genclik-10-Yas/Roman-Oyku/urunno=0001893536001"> {{product.name}}</a>
                    <div class="prd-price-wrapper dr-flex flex-wrap">
                        <div class="prd-price font-weight-bold fs-7">
                            {{product.price}}<span> TL</span>
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
    </div>
</template>

<script>
import store from '../../store/index'
  export default {
    name: 'SProduct',
   components:{
      
   },
   methods:{
       addProductToCart(product)
        {
           // product.discount= this.$store.state.count
            this.$store.dispatch('addProductToCart',product)
        }
   },
   computed:{
      products(){
        return this.$store.state.sproducts
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
