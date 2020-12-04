<template>


    <div>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  
<div class="container" style="width:95%">
  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
      <li data-target="#myCarousel" data-slide-to="7"></li>
      <li data-target="#myCarousel" data-slide-to="8"></li>
      <li data-target="#myCarousel" data-slide-to="9"></li>
      <li data-target="#myCarousel" data-slide-to="10"></li>
      <li data-target="#myCarousel" data-slide-to="11"></li>
      <li data-target="#myCarousel" data-slide-to="12"></li>
      <li data-target="#myCarousel" data-slide-to="13"></li>
      <li data-target="#myCarousel" data-slide-to="14"></li>
      
  
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <a href="">
        <img :src="images[0].img" alt="Los Angeles" style="width:100%;">
        </a>
        <div class="carousel-caption">
         
        </div>
      </div>

      <div class="item">
        <a href="">
        <img :src="images[1].img" alt="Chicago" style="width:100%;">
        </a>
        <div class="carousel-caption">
          
        </div>
      </div>
    
      <div class="item">
        <a href="">
        <img :src="images[2].img" alt="New York" style="width:100%;"></a>
        <div class="carousel-caption">

              </div>
      </div>

            <div class="item">
              <a href="">
        <img :src="images[3].img" alt="New York" style="width:100%;"></a>
        <div class="carousel-caption">

              </div>
      </div>

            <div class="item">
              <a href="">
        <img :src="images[4].img" alt="New York" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[5].img" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[6].img" alt="New York" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[7].img" alt="New York" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[8].img" alt="New York" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
      <div class="item">
        <a href="">
        <img :src="images[9].img"  style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img  :src="images[10].img" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img  :src="images[11].img" style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[12].img"  style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[13].img"  style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
              <a href="">
        <img :src="images[14].img"  style="width:100%;"></a>
        <div class="carousel-caption">
  </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
    </div>
</template>


<script>
  export default {
    name: 'Sliderindex',
   /*async fetch(){
      this.images=await fetch(
      'https://my-json-server.typicode.com/rabiaterzi/DR_Vue/images'
    ).then((res)=>res.json())
    },  */ 
    data(){
        return{
            images:[{"sliderid":1,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0420_d_u_x_851x373_lego_cocukluk_hayalim.jpg"},
    {"sliderid":2,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_t_13_851x373_dogan_yayin.jpg"},
    {"sliderid":3,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_haftanin_yazari_buket_uzuner.jpg"},
    {"sliderid":4,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_t_5_851x373_egitim_ve_test_kitaplari.jpg"},
    {"sliderid":5,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_lego_adult_rev.jpg"},
    {"sliderid":6,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/851x373_MUHIT.png"},
    {"sliderid":7,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_t_9_851x373_peppa_pig.jpg"},
    {"sliderid":8,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/thumbnail_1020_d_u_x_851x373_harry_potter_dragon_alley.jpg"},
    {"sliderid":9,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1020_d_u_x_851x373_haftanin_firsati_indigo.jpg"},
    {"sliderid":10,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/851x373_KitaplariKurtaranKedi.png"},
    {"sliderid":11,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/S_ablon-Ana-Sayfa-2.jpg"},
    {"sliderid":12,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/ekim_dergiler_851x873_2.png"},
    {"sliderid":13,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/1219_d_t_34_851x373_ozel_kitaplar.jpg"},
    {"sliderid":14,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/851x373_POP_Ekim_PARAF_AXESS_851x373.jpg"},
    {"sliderid":15,"img":"https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/taksit-sevenekleri-yeni.jpg"}],
        }
    }
  }
</script>
  <!--
<Carousel :perPage="1" :autoplay="true" :navigationEnabled="true">
  <Slide v-for="image in images" v-bind:key="image">
    <img :src="image.img">
  </Slide>
</Carousel>-->


