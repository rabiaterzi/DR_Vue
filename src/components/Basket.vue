<template>
    <div class="container">
                    <div class="row">
                            <div class="container">
    </div>     
                        <div class="col-xs-12 subHeader blackColor">
                            <h1> Sepetim </h1> <span>( {{basketitems.length}} Ürün )</span>
                        </div>

                        <div class="basketContentFrame">

                            <div class="basketLeftFrame col-md-7 col-lg-8">

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
                                    <BasketItems/>
                                </div>
                                <!-- basketProductSummary End *******-->
<div class="giftPackage">
    <div class="chooseRow">
        <img src="https://www.flaticon.com/svg/static/icons/svg/1161/1161667.svg" height="20px" width="20px" style="margin-right:15px"/>
        <span class="gift-text"> Hediye Paketi İstiyorum</span>
        <span class="editGiftText">Düzenle</span>
        <span id="removeGiftText" class="removeGiftText">Sil</span>
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
                            <div class="basketRightFrame col-md-5 col-lg-4" style="width:600px">
                                <div class="checkoutCartDetails">

                                    <div class="orderSummaryTop">
                                        <h4 class="orderTitle">Sipariş Özeti</h4>
                                        <div class="orderQuantity">1 Ürün</div>
                                        <div class="priceCell">
                                            <span class="label">Ara Tutar (KDV Dahil)</span>
                                            <span class="total">{{basketitems[0].price}} TL</span>
                                        </div>
                                        <div class="btnHolder">
                                            <button id="checkout" name="checkout" value="checkout" class="actionBtn">SATIN AL</button>
                                        </div>
                                    </div>
                                    <!-- orderSummaryTop End -->
                                    <div class="orderSummaryBottom">
                                        <div class="summaryRow">
                                            <span class="txt">Ara Toplam</span>
                                            <span class="txt">{{basketitems[0].price}} TL</span>
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
                </div>
</template>

<script>
import BasketItems from './BasketItems';
  export default {
    name: 'BasketPage',
    components:{
        BasketItems
    },
    data(){
        return{
            basketitems:[
                {urunid:1,img:"https://i.dr.com.tr/cache/82x82-0/originals/0001889645001-1.jpg",name:"Son Cüret",author_name:"Yılmaz Özdil",discount:40,price_w_d:42.00,price:25.20},
                //{urunid:2,img:"https://i.dr.com.tr/cache/82x82-0/originals/0001893554001-1.jpg",name:"Ev",author_name:"Nermin Yıldırım",discount:35,price_w_d:27.00,price:7.90}
        ]
    }
    },
    //pnumber:this.$BasketItems.getters.basketitems.length
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