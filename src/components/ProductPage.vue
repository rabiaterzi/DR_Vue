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
                    <h1 class="product-name">Son C&#252;ret
                    
                       <span class="newItem"><img src="/Themes/DR/Content/assets/images/new-item.png"></span> 
                    </h1>
                </div>
                
<div class="col-half" style="text-align:right">
    <ul class="rate three">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <span>6/10 - 19 Kişi</span>
       <a href="/Login" class="add-to-favorites">FAVORİLERİME EKLE</a>
</div>



            </div>
            <div class="all-details">
                

<div class="images">
    <figure class="big-image">
                <a href="javascript:" class="showZoomable">
                    <img alt="Son C&#252;ret" src="https://i.dr.com.tr/cache/500x400-0/originals/0001889645001-1.jpg" title="Son C&#252;ret" itemprop="image" id="main-product-img" class="img-responsive" />
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
            <span><a href="/Yazar/yilmaz-ozdil/s=265160"><span class="name">Yılmaz &#214;zdil</span></a></span>
    </div>



                    

                    
                                            <div class="author">Yayınevi : <h2><a href="/Yayinevi/sia/s=10004611"><span class="name" id="publisherName">Sia</span></a> </h2></div>
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
        <div class="price"><span id="salePrice"></span><span class="price-currency">25.20 TL</span></div>
        <div class="quantity">
            <input id="decrease" type="button" onclick="BtnDecrase();" value="-">
            <input id="qty" type="text" onclick="QtyChange();" value="1" />
            <input id="increase" type="button" onclick="BtnIncrease();" value="+">
        </div>
    </div>
    <div class="full">
        <div class="old-price"><span id="oldPrice"></span><span id="oldPriceCurrency" class="price-currency">42.00 TL</span></div>
        <span class="discount">-%40</span>
    </div>
</div>

<input type="hidden" id="hdnDiscount" data-discount="40" />

                                <div class="cta">
                                    <a class="btn red" href="javascript:;" onclick="PrepareAndAddToBasket();">SEPETE EKLE</a>
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
        //    .magnificPopup(
        //{
        //    type: 'image',
        //    removalDelay: 300,
        //    gallery: {
        //        enabled: true
        //    }
        //});

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

<script>
  export default {
    name: 'ProductPage'
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
</style>