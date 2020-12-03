<template>
        <section class="product-details" id="prod">
        <div class="head-cta">
            <div class="container">
                <div class="product-details">
                        <figure>
                            <img src="https://i.dr.com.tr/cache/69x69-0/originals/0001889645001-1.jpg" title="Son C&#252;ret" alt="Son C&#252;ret" />
                        </figure>
                    <div class="product-name"><h3>Son C&#252;ret</h3></div>
                </div>                  
                <div id="sta0" class="hidden">
                    <div class="product-price"><p><span>(KDV Dahil)</span> 25,20 ₺</p></div>
                    <a class="btn red" href="javascript:;" onclick="PrepareAndAddToBasket();">SEPETE EKLE</a>
                </div>
                <div id="sta1" class="hidden">
                    <span class="product-status">Satışa Hazır</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="head">
                <div class="col-half">
                    <h1 class="product-name">{{product[this.$route.params.id-1].name}}
                    <!-- yeni resmi-->
                       <span class="newItem"><img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/new-item.png"></span> 
                       
                    </h1>
                </div>              
<div class="col-half" style="text-align:right">
    <ul class="rate three">
         <!-- 5 star-->
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  <link rel="stylesheet" type="text/css" href="style.css">
  <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
        <span>0/10 - 0 Kişi</span>
       <a href="/Login" class="add-to-favorites"> <a href=""> <span style="font-size: 140%; color: black;">&hearts;</span> </a> FAVORİLERİME EKLE</a>
</div>
            </div>
            <div class="all-details">
<div class="images">
    <figure class="big-image">
                <a href="javascript:" class="showZoomable">
                    <img alt="Son C&#252;ret" :src="product[this.$route.params.id-1].img" title="Son C&#252;ret" itemprop="image" id="main-product-img" class="img-responsive" />
                </a>
    </figure>
    <div style="clear: both;"></div>
</div>
<div class="zoomableOverlay">
    <div class="productZoomSliderWrapper">
        <button class="closeButton">X</button>
        <div class="productZoomSlider owl-carousel">
                <div class="item">
                    <span class="zoomable">
                        <img class="lazyload proSliderImg" data-src="https://i.dr.com.tr/cache/600x600-0/originals/0001889645001-1.jpg" data-thumb="https://i.dr.com.tr/cache/64x64-0/originals/0001889645001-1.jpg" alt="Son C&#252;ret">
                    </span>
                    <div class="thumbnail-content" hidden aria-hidden="true"> <img src="https://i.dr.com.tr/cache/600x600-0/originals/0001889645001-1.jpg" /> </div>
                </div>
        </div>
    </div>
</div>          
<div class="specs">
                
    <div class="author">Yazar: 
            <span><a href="/Yazar/yilmaz-ozdil/s=265160"><span class="name">{{product[this.$route.params.id-1].author}}</span></a></span>
    </div>                 
                <div class="author">Yayınevi : <h2><a href="/Yayinevi/sia/s=10004611"><span class="name" id="publisherName">{{product[this.$route.params.id-1].publisher}}</span></a> </h2></div>
                    <div class="spec-box" id="priceBox">
                        <div id="result" class="variants-wrapper">
                            <div class="variant">
                                <h3></h3>
                                <div class="variant-content">
                                    <ul id="value1Div">
                                        <li class="">
                                            <input type="radio" value="Ciltli" name="Medya Tipi" id="chars1_0" onclick="GetSelectSkuValue('Ciltli')">
                                            <label for="chars1_0">Ciltli</label></li><li class=""><input type="radio" value="İnce Kapak" name="Medya Tipi" checked="" id="chars1_1" onclick="GetSelectSkuValue('İnce Kapak')">
                                            <label for="chars1_1">İnce Kapak</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <div id="statusDiv"></div>
                            <div id="priceDiv" class="book-active">
                                
<div class="prices">
    <div class="full">
        <div class="price"><span id="salePrice"></span><span class="price-currency">{{product[this.$route.params.id-1].price}} TL</span></div>
        <div class="quantity">
            <input id="decrease" type="button" @click="btnDecrase()" value="-">
            <input id="qty" type="text" onclick="QtyChange();" :value="count" />
            <input id="increase" type="button" @click="count += 1" value="+">
        </div>
    </div>
    <div class="full">
        <div class="old-price"><span id="oldPrice"></span><span id="oldPriceCurrency" class="price-currency">{{product[this.$route.params.id-1].pricewd}} TL</span></div>
        <span class="discount">-%{{product[this.$route.params.id-1].discount}}</span>
    </div>
</div>

<input type="hidden" id="hdnDiscount" data-discount="40" />

                                <div class="cta">
                                    <a class="btn red" href="javascript:;" @click="addProductToCart(product[$route.params.id-1])">SEPETE EKLE</a>
                                    <a class="btn white fancybox" href="/Themes/DR/Content/assets/partials/fiyati-dusunce-uyar.html?ver=643" id="openAlarm" data-fancybox-type="ajax">FİYATI DÜŞÜNCE UYAR</a>
                                </div>
                            </div>
                        <div class="clear"></div>
                        <div class="shipmentTimeFrame">
                                                            <div class="col-xs-12 col-md-4">
                                    <div class="tbox">
                                        <strong> Hızlı Teslimat</strong>
                                        <div class="timeCell">31 Ekim </div>
                                    </div>
                                </div>
                                                       <div class="col-xs-12 col-md-4">
                                <div class="tbox">
                                    <strong> Standart Teslimat</strong>
                                    <div class="timeCell">
                                   02 - 05 Kasım
                                   </div>
                                    <div class="t-free">* 100 TL üzeri bedava!</div>
                                </div>
                            </div>
                          
                       </div>
                    </div>
                </div>
            </div>
        </div>  
        <CommentC/>  
        </section>       
</template>


<script>
                       /* $( document ).ready(function() {
                            $('#sta0').removeClass("hidden");
                        });*/
                    </script>
<script>
    var container = $(".product-details .rate"),
       beginClass = container.attr("class"),
       posX,
       posRange,
       posNum;
    container.on("mousemove", function (e) {
        container.attr("class", "rate");
        posX = Math.floor(e.clientX - container.offset().left);
        posRange = Math.floor(container.width() / 10);
        posNum = Math.floor(posX / posRange);

        switch (posNum) {
            case 1:
                container.addClass("half");
                break;
            case 2:
                container.addClass("one");
                break;
            case 3:
                container.addClass("one-half");
                break;
            case 4:
                container.addClass("two");
                break;
            case 5:
                container.addClass("two-half");
                break;
            case 6:
                container.addClass("three");
                break;
            case 7:
                container.addClass("three-half");
                break;
            case 8:
                container.addClass("four");
                break;
            case 9:
                container.addClass("four-half");
                break;
            case 10:
                container.addClass("five");
                break;
        }
    });
    container.on("mouseout", function () {
        container.attr("class", beginClass);
    });

    container.on("click", function () {
        rate(posNum);
    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#main-product-img-lightbox-anchor-1251728').magnificPopup(
        {
            type: 'image',
            removalDelay: 300,
            gallery: {
                enabled: true
            }
        });
        $('.thumb-popup-link').click(function () {
            $('#main-product-img').attr('src', $(this).data('im2'));

        });
        

        $(".product-images-thumbs").owlCarousel({
            navigation : true,
            navigationText : ["",""],
            items : 5,
            itemsTablet: [768,3],
            itemsMobile : [479,3]
        });

         var settings = {
				paginationNumbers: false,
                items: 1,
                navigation : true,
                navigationText : ['', ''],
                mouseDrag: false,
                touchDrag: false,
				thumbnailSelector: '.thumbnail-content',
				singleItem: true
			};
			OwlThumbs.Plugin.applyTo(settings);
			$('.productZoomSlider').owlCarousel(settings);

        // Zoom
        $('.zoomable').zoom();
        $("html").on('click', function(){
            $(".zoomableOverlay").fadeOut("slow").removeClass("zoomFlex");
            $("section.product-details .head-cta").css("z-index", "89");
        });
        $(".showZoomable").click(function (e) {
            e.stopPropagation();
            $(".zoomableOverlay").addClass("zoomFlex").fadeIn("slow");
            $("section.product-details .head-cta").css("z-index", "100");
             var owlItemLength = $(".productZoomSlider .owl-item").length;
             var owlSliderImg = $(".proSliderImg").clone(); 
             var pageWidth = $(window).width();  
             if (pageWidth < 768){
                 if (owlItemLength < 2){
                    $(".productZoomSlider .owl-buttons").hide();
                    $(".productZoomSlider .owl-pagination").css("opacity","0");
                }
             } else {
                 setTimeout(function(){
                    if (owlItemLength < 2){
                        $(".owl-page").html(owlSliderImg[0]);
                     $(".productZoomSlider .owl-buttons").hide();
                    }
                }, 500);
             }    
                        
        });
        $(".productZoomSliderWrapper").click(function (e) {
            e.stopPropagation();
        });   

        $(".closeButton").click(function () {
            $(".zoomableOverlay").fadeOut("slow").removeClass("zoomFlex");
            $("section.product-details .head-cta").css("z-index", "89");
        });
    });
</script>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>
<script>
import { mapMutations } from 'vuex'
import Index from './index'
import store from '../store/index'
import CommentC from '../src/components/Comment'
  export default {
    name: 'ProductPage',
    components:{
        Index,
        CommentC
    },
    props:{/*
        product:{
            type:Object,
            default:()=>{}
        }*/
    },
    async fetch(){
      this.products=await fetch(
      'https://my-json-server.typicode.com/rabiaterzi/DR_Vue/products'
    ).then((res)=>res.json())
    },
    data(){
      return{
          
          count:1,
          name:this.$route.params.id,
          products:[],
          product:[
              {"id":1,"name":"Koronadan Korunmak Mümkün","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001895541001-1.jpg","author":"Dr. Ümit Aktaş","publisher":"Alfa Yayıncılık","kapak":"İnce Kapak","pricewd":19.00 ,"price":13.30  ,"discount":30},
    {"id":2,"name":"Dürüst Yalancı","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894524001-1.jpg","author":"Tove Jansson","publisher":"Siren Yayınları","kapak":"İnce Kapak","pricewd":24.00 ,"price":18.00 ,"discount":25},
    {"id":3,"name":"Camları Kırın Kuşlar Kurtulsun","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001893223001-1.jpg","author":"Fatoş Güney","publisher":"İthaki Yayınları","kapak":"İnce Kapak","pricewd":38.00 ,"price":23.94 ,"discount":37},
    {"id":4,"name":"Mutsuz Olan Cennete Gidemez","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894661001-1.jpg","author":"Zaza Yurtsever","publisher":"Destek Yayınları","kapak":"İnce Kapak","pricewd":29.00 ,"price":21.75 ,"discount":25},
    {"id":5,"name":"Terapi Odasında İyileşen İlişkiler","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001894011001-1.jpg","author":"Bahar Tezcan","publisher":"Küsurat","kapak":"İnce Kapak","pricewd":34.00 ,"price":20.40 ,"discount":40},
    {"id":6,"name":"Pinball 1973","img":"https://i.dr.com.tr/cache/154x170-0/originals/0001895640001-1.jpg","author":"Ömer Yenici","publisher":"Nemesis Kitap","kapak":"İnce Kapak","pricewd":32.00 ,"price":23.36,"discount":27}]
              //{id:1,name:"Son Cüret",img:"https://i.dr.com.tr/cache/500x400-0/originals/0001889645001-1.jpg",author:"Yılmaz Özdil",publisher:"Sia",pricewd:42.00,price:25.20,discount:40},
              //{id:2,name:"Deneme",img:"https://i.dr.com.tr/cache/500x400-0/originals/0001889645001-1.jpg",author:"Yılmaz Özdil",publisher:"Sia",pricewd:42.00,price:25.20,discount:40}
          
      }
    },
    computed:{
       /* product(){
            
           // this.product=Index.products.product
           // return this.products.find(product=>product.name===this.name)
           //return this.products.find(product=>product.name===Index.products.name)
        }*/
    },
    methods:{
        btnDecrase(){
            if(this.count>1)
            {
                this.count--;
            }
        },
        addProductToCart(product)
        {
           // product.discount= this.$store.state.count
            this.$store.dispatch('addProductToCart',product)
        },
        artir(){
            this.$store.commit('increment')
        },
        denemefonk(id){
           addProductToCart(this.product[id-1])
        }
    }
  }
</script>

<style scoped lang="scss">
@import "../src/css/dynamic-banner.css";
@import "../src/css/dr-custom.css";
@import "../src/css/style.css";
</style>



<style scoped>
ul{
    position: absolute;
    top: 100px;
    left: 180px;
}
*{
    margin: 0;
    padding: 0;
}
.rate {
   
    height: 40px;
   
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:20px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: gray;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: gray;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: gray;
}
</style>