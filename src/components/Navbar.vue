<template>
<div class="nav">
    <header style="height:90px;width:100%;"><div>{{basketitems}}</div>
            <div class="header-new">
                <figure class="logo">
                    <nuxt-link to="/"><img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/general/head-logo.png" alt="D&R" /></nuxt-link>
                </figure>
                <div class="head-menu ">
                   <ul> 
                        <li v-if="$store.state.user" class="giris"><nuxt-link to="/Customer/info">HESABIM</nuxt-link></li> 
                        
                        <nuxt-link to="/"><li v-if="$store.state.user" class="giris"><button @click="signOut" style="border-style:none"> ÇIKIŞ </button></li></nuxt-link>
                        <li v-if="!$store.state.user"  class="giris" data-id="uye-girisi-click" ><nuxt-link to="/login">ÜYE GİRİŞİ</nuxt-link></li>
                        <li class="sepet" @click="sepetackapa()" data-id="sepetim-click">
                            <a>SEPETİM</a>
                            <a> <img src="https://www.flaticon.com/svg/static/icons/svg/1/1983.svg" width="25" height="25" > </a>
                            <span class="items-count">{{totalquantityy}}</span>
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
                
                    <button id="buton" class="category-tab" style="height:65px;" @click="menuackapa()">                  
                        <img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/general/kategori-tab-bg.png" width="23" height="28" style="margin-right:-45px; margin-left:20px"/>
                        <label>MENÜ</label>                                      
                    </button>
                
                
            
                <div class="search-bar " style="height:60px" >
                    <!--
                    <i id="menuSrc" class="fal fa-search"></i>
                    <i id="menuCls" class="icon-close">X</i>
                    -->
                   <a href="">  <img src="https://cdn4.iconfinder.com/data/icons/mayssam/512/search-256.png" width="30" height="30" ></a>
            
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
        <Categories id="category"/>
        <BasketProduct id="sepet"/>
</div>
</template>

<script>
import Categories from './Categories';
import BasketProduct from './BasketProduct'
import store from '../../store/index'

  export default {
    name: 'Navbar',
    components:{
        Categories,
        BasketProduct
    },
    data(){
        return{
            basketproductss:[],
            quantitytotal:0,
            totalquantityy:0
        }
    },
    computed:{
        basketitems(){
            var sayi=0 
           if(this.authUser){
            this.$fire.database.ref('/users/'+this.authUser.uid+'/basketitems').on('value',(snapshot)=>{      
                this.basketproductss=snapshot.val()
                this.quantitytotal=Object.keys(this.basketproductss).length
                if(this.quantitytotal>0){
                    snapshot.forEach((element) => {
                        sayi+=element.val().quantity        
                    })
                    this.totalquantityy=sayi
                } 
            })
           }  
       },
        authUser(){     
          return this.$store.getters.takeuser
       }
    },
    methods:{
        menuackapa(){
            
            if(document.getElementById('category').style.visibility==='visible')
            {
                document.getElementById('category').style.visibility='hidden'
            }
            else document.getElementById('category').style.visibility='visible'
            
        },
        sepetackapa(){
            if(document.getElementById('sepet').style.visibility==='visible')
            {
                document.getElementById('sepet').style.visibility='hidden'
            }
            else document.getElementById('sepet').style.visibility='visible'
        },
        signOut(){
            //this.$fire.auth.signOut()
            this.$store.dispatch('signOut')
            console.log('çıkış yapıldı')
        }
    }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
.nav{
    margin: 0;
}
.category-tab{   
    background-color: transparent;
    display: flex;
    align-items: center;
    //justify-content: center;
}
#category{
    position: absolute;
    visibility: hidden;
    z-index: 1;
}
#sepet{
    position: absolute;
    right: 40px;
    top: 90px;
    visibility: hidden;
    z-index: 1;
}
</style>
