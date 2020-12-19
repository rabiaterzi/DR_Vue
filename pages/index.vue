<template>
  <div>
          <div class="container" style="margin-top:30px">
  <div class="row">
<div style="float: left;">
 <Slider />
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
    
  </div>   
</template>

<script>
import Slider from '../src/components/Slider'
//import store from '../store/index'

export default {
    components:{
      Slider,
    },
    computed:{
      products(){
        return this.$store.state.products
      }
    }
};
</script>

<style scoped>
@import "../src/css/dynamic-banner.css";
@import "../src/css/dr-custom.css";
@import "../src/css/style.css";

  .images{
    margin-left: 100px;
  }
</style>