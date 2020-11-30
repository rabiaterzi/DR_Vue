<template>


    <div>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  
<div class="container">
  
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
        <img :src="images[0].img" alt="Los Angeles" style="width:100%;">
        <div class="carousel-caption">
         
        </div>
      </div>

      <div class="item">
        <img :src="images[1].img" alt="Chicago" style="width:100%;">
        <div class="carousel-caption">
          
        </div>
      </div>
    
      <div class="item">
        <img :src="images[2].img" alt="New York" style="width:100%;">
        <div class="carousel-caption">

              </div>
      </div>

            <div class="item">
        <img :src="images[3].img" alt="New York" style="width:100%;">
        <div class="carousel-caption">

              </div>
      </div>

            <div class="item">
        <img :src="images[4].img" alt="New York" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[5].img" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[6].img" alt="New York" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[7].img" alt="New York" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[8].img" alt="New York" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
      <div class="item">
        <img :src="images[9].img"  style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img  :src="images[10].img" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img  :src="images[11].img" style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[12].img"  style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[13].img"  style="width:100%;">
        <div class="carousel-caption">
  </div>
      </div>
            <div class="item">
        <img :src="images[14].img"  style="width:100%;">
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
   async fetch(){
      this.images=await fetch(
      'https://my-json-server.typicode.com/rabiaterzi/DR_Vue/images'
    ).then((res)=>res.json())
    },   
    data(){
        return{
            images:[],
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


