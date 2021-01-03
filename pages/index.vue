<template>
  <div>
          <div class="container" style="margin-top:30px">
  <div class="row">
<div style="float: left;">
 <Slider/>
</div>
<div style="float: right;" >
  <a href="">
<img  src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/thumbnail_1120_d_u_x_273x313_epsilon_yayinlari_lp.jpg"></a>
</div>
    </div>
    </div>
      <div>
    
    <section class="shelf">
    <div class="container">
        <header>
            <h2>Kitap</h2>
            <a href="/Sectiklerimiz/Kitap">TÜMÜNÜ GÖRÜNTÜLE</a>
        </header>
  <ul>
   
   <li v-for="product in products" v-bind:key="product"> 
      <nuxt-link :to="{name:'id',params:{id:product.id}}">
        <div class="column">
<div class="cell">
    <div class="content">
        <a>
            <figure>
               
   <img class="lazyload" :src="product.img"/>                
     <div class="p-info"></div>
            </figure>
        </a>
        <a class="item-name">
        <ul class="rate ">
        </ul>
        
            <h3 class="ellipsis">{{product.name}}</h3>
        </a>
        <hr>
 <a href="/Yazar/dr--umit-aktas/s=325030" class="who"></a>     {{product.author}}   <div class="media-type">
{{product.kapak}}       </div>
        <div class="media-type">
                <a href="/Yayinevi/alfa-yayincilik/s=436" class="who mb10">{{product.publisher}}</a>
        </div>
            <span class="old-price">{{product.pricewd}} TL</span>
            <span class="discount-category">%{{product.discount}}</span>
            <span class="price">{{product.price.toFixed(2)}} TL </span>

    </div>
    </div>
</div>  
</nuxt-link> 
</li>
  
</ul>

</div>
</section>

  </div>
    <div class="images">
        <br/><br/><br/><br/>       
        <a href=""><img style="margin-left:80px" src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/image-19-06-20-02-04.jpeg"/></a>
        <nuxt-link to="/Sectiklerimiz"><img style="margin-left:20px" src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_364x178_sizin_icin_sectiklerimiz_rev.jpg"/></nuxt-link>
        <a href=""><img style="margin-left:20px" src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/thumbnail_0920_d_t_x_364x178_tum_kitap_kampanyalari_v3.jpg"/></a>
    </div>
    <br><br><br><br><br>
    <div v-for="product in sproducts" v-bind:key="product" style="margin-left:155px">          
                <div class="prd" style="margin-left:30px">
                    <div class="product-img">
                        <nuxt-link :to="{name:'id',params:{id:product.id}}">
                            <img class="lazyload" :src="product.img">
                        </nuxt-link>
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
    <div id="denemeid" >{{getProducts}}</div>
  </div>   
</template>

<script>
import Slider from '../src/components/Slider'

export default {
    components:{
      Slider,
    },
    data(){
      return{
        products:[],
        sliders:[],
        sproducts:[],
        count:1
      }
    },
    computed:{
        getProducts(){
             this.$store.dispatch('getProducts')
             this.products= this.$store.getters.urunlerigetir
             this.$fire.database.ref('/sproducts').on('value',(snapshot)=>{      
            this.sproducts=snapshot.val()
       })
        },
        authUser(){
          return this.$store.getters.takeuser
      }
    },
    methods:{
      addProductToCart(product)
        {
          if(this.authUser){
            this.$store.dispatch('addProductToBasket',{product:product,user:this.authUser,count:this.count})
          }
          else{alert('Ürünü sepete ekleyebilmek için giriş yapınız!')}
        }
    }
};
</script>

<style scoped>
@import "../src/css/dynamic-banner.css";
@import "../src/css/dr-custom.css";
@import "../src/css/style.css";
@import "../src/css/cartSlickSlider.css";
  .images{
    margin-left: 100px;
  }
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