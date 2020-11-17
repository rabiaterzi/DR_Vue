<template>
  <div>
      <div>
    
    <section class="shelf">
    <div class="container">
        <header>
            <h2>Kitap</h2>
            <a href="/Sectiklerimiz/Kitap">TÜMÜNÜ GÖRÜNTÜLE</a>
        </header>
  <ul>
   
   <li v-for="product in products" v-bind:key="product"> 
     
        <div class="column">
<div class="cell" onclick="productClick(this)" data-id="1263878" data-name="Koronadan Korunmak M&#252;mk&#252;n" data-brand="Alfa Yayıncılık" data-category="Kitap/Eğitim Başvuru/Sağlık/Beden Sağlığı" data-sku="0001895541001" >
    <div class="content">
        <a title="Koronadan Korunmak M&#252;mk&#252;n ">
            <figure>
               
    <nuxt-link v-bind:to="product.name"  ><img class="lazyload" :src="product.img"/></nuxt-link>                 
     <div class="p-info"></div>
            </figure>
        </a>
        <a title="Koronadan Korunmak M&#252;mk&#252;n" href="/Kitap/Koronadan-Korunmak-Mumkun/Dr-Umit-Aktas/Egitim-Basvuru/Saglik/Beden-Sagligi/urunno=0001895541001 " class="item-name">
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
            <span class="price">{{product.price}} TL </span>

    </div>
    </div>
</div>  

</li>
  
</ul>
</div>
</section>

  </div>
    <div class="images">
        <br/><br/><br/><br/>       
        <img style="margin-left:80px" src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/image-19-06-20-02-04.jpeg"/>
        <nuxt-link to="/Sectiklerimiz"><img style="margin-left:20px" src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_364x178_sizin_icin_sectiklerimiz_rev.jpg"/></nuxt-link>
        <img style="margin-left:20px" src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/thumbnail_0920_d_t_x_364x178_tum_kitap_kampanyalari_v3.jpg"/>
    </div>
  </div>   
</template>

<script>
export default {
    components:{

    },
    data(){
      return{
          
          products:[
              {id:1,name:"Koronadan Korunmak Mümkün",img:"https://i.dr.com.tr/cache/154x170-0/originals/0001895541001-1.jpg",author:"Dr. Ümit Aktaş",publisher:"Alfa Yayıncılık",kapak:"İnce Kapak",pricewd:19.00 ,price:13.30  ,discount:30},
              {id:2,name:"Dürüst Yalancı",img:"https://i.dr.com.tr/cache/154x170-0/originals/0001894524001-1.jpg",author:"Yılmaz Özdil",publisher:"Siren Yayınları",kapak:"İnce Kapak",pricewd:24.00 ,price:18.00 ,discount:25},
              {id:3,name:"Camları Kırın Kuşlar Kurtulsun",img:"https://i.dr.com.tr/cache/154x170-0/originals/0001893223001-1.jpg",author:"İthaki Yayınları",publisher:"Sia",kapak:"İnce Kapak",pricewd:38.00 ,price:23.94 ,discount:37},
              {id:4,name:"Mutsuz Olan Cennete Gidemez",img:"https://i.dr.com.tr/cache/154x170-0/originals/0001894661001-1.jpg",author:"Destek Yayınları",publisher:"Sia",kapak:"İnce Kapak",pricewd:29.00 ,price:21.75 ,discount:25},
              {id:5,name:"Terapi Odasında İyileşen İlişkiler",img:"https://i.dr.com.tr/cache/154x170-0/originals/0001894011001-1.jpg",author:"Küsurat",publisher:"Sia",kapak:"İnce Kapak",pricewd:34.00 ,price:20.40 ,discount:40},
              {id:6,name:"Pinball 1973",img:"https://i.dr.com.tr/cache/154x170-0/originals/0001895640001-1.jpg",author:"Yılmaz Özdil",publisher:"Doğan Kitap",kapak:"İnce Kapak",pricewd:32.00 ,price:23.36,discount:27}
              
          ]
      }
    },
    
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