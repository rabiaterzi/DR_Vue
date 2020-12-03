<template>
    <div>
        <div class="subHeader blackColor">
            <h2 class="text-center d-block"> İlginizi &#199;ekebilecek &#220;r&#252;nler...  <span class="tooltipBtn right" data-tooltip="Tek tıkla sepetinize taşıyabileceğiniz ürünler..."></span> </h2>
        </div>
        <div v-for="product in products" v-bind:key="product">
             <div>
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
                        <a href="javascript:;" variationid="1259753" OnClick="AddToBasketForShoppingCart(1259753);OnVisilabsLoaded_AddToBasket('1259753', '27,0');" class="btn">
                            SEPETE EKLE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'SProduct',
   components:{
      
   },
       data(){
        return{
            products:[
                {productid:1,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001893536001-1.jpg",name:"Kral Şakir 9 - Muhtişim Dedektifler!",price:27.00},
                {productid:2,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001889645001-1.jpg",name:"Son Cüret",price:24.36},
                {productid:3,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001893554001-1.jpg",name:"Ev",price:27.30},
                {productid:4,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001891772001-1.jpg",name:"CLK 3 Katlı Cerrahi Maske 50'li Paket",price:50.00},
                {productid:5,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001893245001-1.jpg",name:"Kitapları Kurtaran Kedi",price:14.00},
                {productid:6,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001893221001-1.jpg",name:"Dune Sapkınları-Bilim Kurgu Klasikleri",price:42.00}
                /* {productid:7,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001836986001-1.jpg",name:"Kör Adım",price:3.90},
                 {productid:8,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001893244001-1.jpg",name:"Yara İzleri",price:30.00},
                {productid:9,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001891210002-1.jpg",name:"Fifa 21",price:540.00},
                {productid:10,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001887334001-1.jpg",name:"CLK 3 Katlı Cerrahi Maske 10'lu",price:10.00},
                {productid:11,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001784820001-1.jpg",name:"Beyaz Zambaklar Ülkesinde",price:5.90},
                {productid:12,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001886768001-1.jpg",name:"Crown Pikap Çantalı C0453",price:699.00},
                {productid:13,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001764013001-1.jpg",name:"Fantastik Arkadaşlar-Vlad-Dünyanın En Beceriksiz Vampiri 2",price:5.90},
                {productid:14,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001891652001-1.jpg",name:"Sus Barbatus! - 2",price:29.40},
                {productid:15,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001892284001-1.jpg",name:"Börü 4 - Karanlığı Parçalayan",price:22.75},
                {productid:16,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001886767001-1.jpg",name:"Şampiyon Sözleri",price:24.50},
                {productid:17,img:"https://i.dr.com.tr/cache/154x170-0/originals/0001869125001-1.jpg",name:"Kozmos:Yeni Dünyalar",price:64.60},
                */
            ]
        }
    }
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
</style>
