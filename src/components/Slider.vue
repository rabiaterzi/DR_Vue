<template>
 <div  class="container">
<div class="slideshow-container" > 
<Carousel :perPage="1" :autoplay="true" :navigationEnabled="true">
  <Slide v-for="image in images" v-bind:key="image">
    <img :src="image.img">
  </Slide>
</Carousel>
</div>
  <a href="/ayin-yayinevi-alfa-yayin-grubu" title="Ayın Yayınevi: Alfa Yayın Grubu" >
        <picture>
            <source media="(max-width: 766px)" srcset="//i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0920_d_u_x_273x313_ayin_yayinevi_alfa_grubu35e.jpg">
            <source media="(min-width: 767px)" srcset="//i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0920_d_u_x_273x313_ayin_yayinevi_alfa_grubu35e.jpg">
            <img src="//i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0920_d_u_x_273x313_ayin_yayinevi_alfa_grubu35e.jpg" style="width:auto;">
        </picture>
  </a>    
</div> 
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'Slider', 
    components:{
       Carousel,
       Slide
    },
    data(){
        return{
            images:[
              {sliderid:1,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_haftanin_firsati_april_yayincilik2.jpg"},
              {sliderid:2,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_t_13_851x373_dogan_yayin.jpg"},
              {sliderid:3,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_haftanin_yazari_buket_uzuner.jpg"},
              {sliderid:4,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_t_5_851x373_egitim_ve_test_kitaplari.jpg"},
              {sliderid:5,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_lego_adult_rev.jpg"},
              {sliderid:6,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/851x373_MUHIT.png"},
              {sliderid:7,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_t_9_851x373_peppa_pig.jpg"},
              {sliderid:8,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/thumbnail_1020_d_u_x_851x373_harry_potter_dragon_alley.jpg"},
              {sliderid:9,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_haftanin_firsati_indigo.jpg"},
              {sliderid:10,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/851x373_KitaplariKurtaranKedi.png"},
              {sliderid:11,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/S_ablon-Ana-Sayfa-2.jpg"},
              {sliderid:12,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/ekim_dergiler_851x873_2.png"},
              {sliderid:13,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1219_d_t_34_851x373_ozel_kitaplar.jpg"},
              {sliderid:14,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/851x373_POP_Ekim_PARAF_AXESS_851x373.jpg"},
              {sliderid:15,img:"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/taksit-sevenekleri-yeni.jpg"},
            ]
        }
    }
    }
</script>


<style scoped>

.slideshow-container {
  max-width: 800px;
  position: relative;
  margin: auto;
  float: left;
}
a{
  margin-left: 30px;
}
</style>