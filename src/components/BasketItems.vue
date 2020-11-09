<template>
<ul>
    <li v-for="item in basketitems" v-bind:key="item">
        <div class="basketRow row" id="113409924" data-id="113409924"> 
        <input type="hidden" id="basketProductName" value="Son C&#252;ret">
        <input type="hidden" id="basketItemManufacturer" value="">
        <input type="hidden" id="basketItemCategory" value="">
        <input type="hidden" id="basketPersonProduct" value="Yılmaz &#214;zdil">
        <input type="hidden" id="basketItemPrice" value="25,2">
        <input type="hidden" id="basketItemMediaType">
        <div class="col-1 col-sm-1 firstColumn col-hidden">
            <div class="cell">
                <label class="control control-checkbox">
                    <input class="basketChk newChk productItemChk" type="checkbox" value="113409924" />
                    <span class="control-indicator"></span>
                </label>
            </div>
         </div>
                                            <div class="col-8 col-sm-6 secondColumn">
                                                <div class="cell">
                                                    <div class="basketImg"><a href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001"><img :src="item.img" alt="" /></a></div>
                                                    <div class="basketProductInfo">
                                                        <div class="name product-name" data-id="113409924" data-q="1" data-pid="1251728">
                                                            <a href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">{{item.name}}</a>
                                                        </div>
                                                        <div class="author">{{item.author_name}}</div>
                                                        <div class="mediaType"></div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-4 col-sm-5 flexCol">
                                                <div class="row flex xs-flex-row xs-height100">
                                                    <div class="col-12 col-sm-6 flexOrderLast">
                                                        <div class="cell xs-flex-end">
                                                            <div class="quantityGroup  ">
                                                                <div class="input-counter"><span class="number-minus disabled" @click="Decrase()"></span><input type="text" id="qty-113409924" class="basketCounter" readonly="" :value="count" step="1" min="1" max="50"><span class="number-plus"  @click="count += 1"></span></div>
                                                                    <div class="qupdate"> <a href="javascript:;" class="updateQuantity" data="113409924"> Güncelle </a> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 text-right lastColumn">
                                                        <div class="cell">
                                                                <div class="discountGroup">
                                                                    <span>%{{item.discount}} indirim</span>
                                                                    <span>{{item.price_w_d}} TL</span>
                                                                </div>
                                                            
                                                            <div class="basketPrice"> {{(item.price)*count}} TL</div>
                                                            <div class="actionGroup">
                                                                <a href="javascript:;" class="actionLink addFav" onclick="addFavoriteShoppingCart(113409924);">Favorilere Ekle</a>
                                                                <span class="tooltipBtn right xs-left" data-tooltip="Favorilerinize Hesabım ekranından ulaşabilirsiniz."><img src="https://www.flaticon.com/svg/static/icons/svg/864/864381.svg" height="15px" width="15px"/></span>
                                                                <a href="javascript:;" class="actionLink" onclick="deleteShoppingCart(113409924);" style="margin-left:7px">Sil</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
   </div> 
    </li>
</ul>
    
</template>
                   
<script>
  export default {
    name: 'BasketItems',
    data(){
        return{
            count:1,
            basketitems:[
                {urunid:1,img:"https://i.dr.com.tr/cache/82x82-0/originals/0001889645001-1.jpg",name:"Son Cüret",author_name:"Yılmaz Özdil",discount:40,price_w_d:42.00,price:25.20},
                //{urunid:2,img:"https://i.dr.com.tr/cache/82x82-0/originals/0001893554001-1.jpg",name:"Ev",author_name:"Nermin Yıldırım",discount:35,price_w_d:27.00,price:7.90}
            ]
        }
    },
     methods:{
        Decrase(){
            if(this.count>1)
            {
                this.count--;
            }
        }
    }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
@import "../css/cartSlickSlider.css";
@import "../css/basket-page.css";
@import "../css/form-ui.css";
@import "../css/order-summary.css";
</style>