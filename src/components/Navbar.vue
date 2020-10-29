<template>
    <header style="height:90px">
            <div class="header-new">
                <figure class="logo">
                    <a href="/"><img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/general/head-logo.png" alt="D&R" /></a>
                </figure>
                <div class="head-menu ">
                    <ul>
                        <li class="giris" onclick="eventClick(this);" data-id="uye-girisi-click" style="height:80px" ><a href="/login">ÜYE GİRİŞİ</a></li>
                        <li class="separator"></li>
                        <li class="sepet" onclick="eventClick(this);" data-id="sepetim-click">
                            <a href="#">SEPETİM</a>
                            <i src="https://www.flaticon.com/svg/static/icons/svg/1/1983.svg" class="icon-sepet" ></i>
                            <span class="items-count">0</span>
                        </li>
                    </ul>
                    
            <div class="head-cart">
                
                 <div class="sum">
                     <p class="sum-detail">Sepetinizde Ürün Bulunmamaktadır.</p>
                     <hr />
                 </div>
                 <input class="btn red" value="SEPETE GİT" type="button" onclick="window.location.href = '/Sepetim';">
            </div>
                </div>
                <div class="category-tab" style="height:65px" >
                    <img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/general/kategori-tab-bg.png" style="text-align: center;"/>
                    <label>MENÜ</label>
                </div>
            
                <div class="search-bar " style="height:60px" >
                    <i id="menuSrc" class="fal fa-search"></i>
                    <i id="menuCls" class="icon-close">X</i>
                    <input type="text" class="searchInput" maxlength="60" placeholder="HANGİ ÜRÜNÜ ARIYORSUN?" autocomplete="off" />
                    <input type="button" value="ARA" id="searchIcon" />
                    <div class="search-suggests">          
                        <ul class="product"></ul>
                        <ul class="category"></ul>
                        <ul class="author"></ul>
                        <ul class="brand"></ul>
                    </div>
                </div>
                <div class="categories">
                    <div class="mmenu-close">X</div>
                    <ul>
                        <li onclick="eventClick(this);" data-id="kitap-click"><a href="/kategori/Kitap"><i class="icon-kitap"></i></a> <a href="/kategori/Kitap"><span>Kitap</span></a></li>
                        <li onclick="eventClick(this);" data-id="ekitap-click"><a href="/kategori/EKitap"><i class="kobo-logo"></i></a> <a href="/kategori/EKitap"><span>E-Kitap</span></a></li>
                        <li onclick="eventClick(this);" data-id="elektronik-click"><a href="/kategori/Elektronik"><i class="icon-elektronik"></i></a> <a href="/kategori/Elektronik"><span>Elektronik</span></a></li>
                        <li onclick="eventClick(this);" data-id="hobioyuncak-click"><a href="/kategori/Hobi-Oyuncak"><i class="icon-oyuncak"></i></a> <a href="/kategori/Hobi-Oyuncak"><span>Hobi & Oyuncak</span></a></li>
                        <li onclick="eventClick(this);" data-id="kirtasiye-click"><a href="/kategori/Kirtasiye"><i class="icon-kirtasiye"></i></a> <a href="/kategori/Kirtasiye"><span>Kırtasiye</span></a></li>
                        <li onclick="eventClick(this);" data-id="oyunkonsol-click"><a href="/kategori/Oyun-Konsol"><i class="icon-oyun"></i></a> <a href="/kategori/Oyun-Konsol"><span>Oyun & Konsol</span></a></li>
                        <li onclick="eventClick(this);" data-id="muzik-click"><a href="/kategori/Muzik"><i class="icon-muzik"></i></a> <a href="/kategori/Muzik"><span>Müzik</span></a></li>
                        <li onclick="eventClick(this);" data-id="dergi-click"><a href="/kataloglar_/turkuvaz-dergiler/7007#/page=1/sort=soldcount,desc/categoryid=0/clog=7007/parentId=0/price=-1,-1"><i class="icon-dergi"></i></a> <a href="/kataloglar_/turkuvaz-dergiler/7007#/page=1/sort=soldcount,desc/categoryid=0/clog=7007/parentId=0/price=-1,-1"><span>Dergi</span></a></li>
                        <li onclick="eventClick(this);" data-id="kisisel-click"><a href="/kategori/Kisisel-Urunler"><i class="icon-kisisel_urun"></i></a> <a href="/kategori/Kisisel-Urunler"><span>Hediyelik Eşyalar</span></a></li>
                        <li onclick="eventClick(this);" data-id="sporoutdoor-click"><a href="/kategori/Spor-Outdoor"><i class="icon-spor_outdoor"></i></a> <a href="/kategori/Spor-Outdoor"><span>Spor & Outdoor</span></a></li>
                        <li onclick="eventClick(this);" data-id="coksatan-click"><a href="/LP-top20"><i class="icon-cok-satan"></i></a> <a href="/LP-top20"><span>Çok Satanlar</span></a></li>
                        <li onclick="eventClick(this);" data-id="yenicikan-click"><a href="/Kategori_/Kitap/En-Yeniler/10001/3"><i class="icon-yeni-cikan"></i></a> <a href="/Kategori_/Kitap/En-Yeniler/10001/3"><span>Yeni Çıkan Kitaplar</span></a></li>
                        <li onclick="eventClick(this);" data-id="yazarlar-click"><a href="/yazarlar"><i class="icon-yazarlar"></i></a> <a href="/yazarlar"><span>Yazarlar</span></a></li>
                        <li onclick="eventClick(this);" data-id="yayinevleri-click"><a href="/yayinevleri"><i class="icon-yayinevleri"></i></a> <a href="/yayinevleri"><span>Yayınevleri</span></a></li>
                    </ul>
                </div>
            </div>
        </header>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
</style>
