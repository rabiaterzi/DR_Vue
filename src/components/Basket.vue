<template>
    
    <div class="container" style="margin-top:40px;width:100%">
                    <div class="row">
                            <div class="container">
    </div>     
                        <div class="col-xs-12 subHeader blackColor">
                            <h1> Sepetim </h1> <span>( {{productquantity}} Ürün )</span>
                        </div>

                        <div class="basketContentFrame">

                            <div class="basketLeftFrame col-md-7 col-lg-8" style="float:left;width:750px">

                                <div class="basketProductSummary">

                                    <div class="basketHead row col-hidden">
                                        <div class="col-1 col-sm-1">
                                            <label class="control control-checkbox">
                                                <input type="checkbox" id="checkall" class="newChk" />
                                                <span class="control-indicator"></span>
                                            </label>
                                        </div>
                                        <div class="col-11 col-sm-5">ÜRÜN </div>
                                        <div class="col-sm-1"> &nbsp; </div>
                                        <div class="col-sm-2">ADET </div>
                                        <div class="col-sm-3 text-right">FİYAT </div>
                                    </div>
                                    <ul class="urunler">
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
                    <input class="basketChk newChk productItemChk" type="checkbox" id="check" value="113409924" />
                    <span class="control-indicator"></span>
                </label>
            </div>
         </div>
                                            <div class="col-8 col-sm-6 secondColumn">
                                                <div class="cell">
                                                    <nuxt-link :to="{name:'id',params:{id:item.id}}"><div class="basketImg"><img :src="item.img" alt="" /></div></nuxt-link>
                                                    <div class="basketProductInfo">
                                                        <div class="name product-name" data-id="113409924" data-q="1" data-pid="1251728">
                                                            <nuxt-link to="/${item.id}">{{item.name}}</nuxt-link>
                                                        </div>
                                                        <div class="author">{{item.author}}</div>
                                                        <div class="mediaType"></div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-4 col-sm-5 flexCol">
                                                <div class="row flex xs-flex-row xs-height100">
                                                    <div class="col-12 col-sm-6 flexOrderLast">
                                                        <div class="cell xs-flex-end">
                                                            <div class="quantityGroup  ">
                                                                <div class="input-counter"><span class="number-minus disabled" @click="Decrase(item.quantity)"></span>
                                                                <input type="text" id="qty-113409924" class="basketCounter" readonly="" :value="item.quantity">
                                                                <span class="number-plus"  @click="item.quantity+=1"></span></div>
                                                                    <div class="qupdate"> <a href="javascript:;" class="updateQuantity" data="113409924"> Güncelle </a> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 text-right lastColumn">
                                                        <div class="cell">
                                                                <div class="discountGroup">
                                                                    <span>%{{item.discount}} indirim</span>
                                                                    <span>{{item.pricewd}} TL</span>
                                                                </div>
                                                            
                                                            <div class="basketPrice"> {{(item.price*item.quantity).toFixed(2)}} TL</div>
                                                            <div class="actionGroup">
                                                                <a href="javascript:;" class="actionLink addFav" onclick="addFavoriteShoppingCart(113409924);">Favorilere Ekle</a>
                                                                <span class="tooltipBtn right xs-left" data-tooltip="Favorilerinize Hesabım ekranından ulaşabilirsiniz."><img src="https://www.flaticon.com/svg/static/icons/svg/864/864381.svg" height="15px" width="15px"/></span>
                                                                <a href="javascript:;" class="actionLink" @click="urunusil(item.id)" style="margin-left:7px">Sil</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
   </div> 
    </li>
</ul>
                                </div>
                                <!-- basketProductSummary End *******-->
<div class="giftPackage">
    <div class="chooseRow">
        <img src="https://www.flaticon.com/svg/static/icons/svg/1161/1161667.svg" height="20px" width="20px" style="margin-right:15px"/>
        <span class="gift-text"> Hediye Paketi İstiyorum</span>
        <span class="editGiftText">Düzenle</span>
        <span id="removeGiftText" class="removeGiftText" >Sil</span>
        <div class="editableGiftText">
            <strong>Hediye Notu:</strong>
            <span id="displayGiftMessage"></span>
        </div>
    </div>
</div>
                                <!-- giftPackage end -->
                                <div class="totalActions col-hidden">
                                    <a class="totalRemove" href="javascript:;"> Sil</a>
                                    <a class="totalAddFav" href="javascript:;"> Favorilerime Ekle</a>
                                </div>
                                <!-- totalActions end -->
                            </div>
                            <!--**** basketLeftFrame End ****-->
                            <div class="basketRightFrame col-md-5 col-lg-4" style="width:400px; height:300px">
                                <div class="checkoutCartDetails">

                                    <div class="orderSummaryTop">
                                        <h4 class="orderTitle">Sipariş Özeti</h4>
                                        <div class="orderQuantity">{{totalquantityy}} Ürün</div>
                                        <div class="priceCell">
                                            <span class="label">Ara Tutar (KDV Dahil)</span>
                                            <span class="total">{{total.toFixed(2)}} TL</span>
                                        </div>
                                        <div class="btnHolder">
                                            <button id="checkout" name="checkout" value="checkout" class="actionBtn" @click="dnm" >SATIN AL</button>
                                        </div>
                                    </div>
                                    <!-- orderSummaryTop End -->
                                    <div class="orderSummaryBottom">
                                        <div class="summaryRow">
                                            <span class="txt">Ara Toplam</span>
                                            <span class="txt">{{total.toFixed(2)}} TL</span>
                                        </div>
                                    </div>
                                    <!-- orderSummaryBottom End -->
                                </div>
                                <!-- checkoutCartDetails end -->
                            </div>
                            <!--**** basketRightFrame End ****-->
                        </div>
                        <!-- basketContentFrame End -->
                    </div>
                    <div>{{quantitytotal}}</div>
                </div>
</template>

<script>
import store from '../../store/index'
  export default {
    name: 'BasketPage',
    data(){
        return{
            count:1,
            dcount:1,
            productquantity:0,
            basketitems:[],
            basketitemss:[],
            total:0,
            totalquantityy:0
    }       
    },
    computed:{
       /* basketitems(){
            //return this.$store.getters.cartProducts
        },*/
        /*total(){
            //return this.$store.getters.cartTotal
        },*/
        quantitytotal(){
            var sayi=0
            var toplam=0
            //return this.$store.getters.productQuantity
            if(this.authUser){
                this.$fire.database.ref('/users/'+this.authUser.uid+'/basketitems').on('value',(snapshot)=>{      
                this.basketitemss=snapshot.val()
                this.productquantity=Object.keys(this.basketitemss).length
                if(this.productquantity>0){
                    snapshot.forEach((element) => {
                        sayi+=element.val().quantity
                        toplam+=element.val().quantity*element.val().price
                    })
                    this.totalquantityy=sayi
                    this.total=toplam
                } 
                //this.productquantity=this.basketitems.length
                })
                if(this.basketitemss){
                    this.basketitems=this.basketitemss
                   // this.productquantity=this.basketitems.length
                }
            } 
        },
        authUser(){     
          return this.$store.getters.takeuser
      }
    },
    methods:{
        Decrase(sayi){
            if(sayi>1)
            {
                sayi--;
            }
        },
        urunusil(pindex){
            alert("Seçilen ürünler silindi")
            this.$store.dispatch('removeProduct',{id:pindex,user:this.authUser})
        }
    },
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
.container{
   margin-left: 170px;
}

</style>