<template>
    <section class="comments">
    <div class="container">
        <header>
            <h2>Yorumlar <span class="comment-count">{{sayi}}</span></h2>
                <a id="showAllComments" href="javascript:;" onclick="showAllComments();">TÜM YORUMLARI GÖSTER</a>
        </header>
        <Comments/>
        <div class="text-center"> 
            <div class="combtnHolder"> </div>
            <a href="/Login" class="btn grey">YORUM YAPMAK İÇİN GİRİŞ YAPMALISINIZ!</a>
        </div>
    </div>
    </section>
</template>

<script>
import Comments from "./Comments";
var dizi=Comments.data();

  export default {
    name: 'CommentPage',
   components:{
       Comments,
   },
   data(){
       return{
          sayi:dizi[dizi.length-1].yorum_id
   }
  }
  }
</script>

<style scoped lang="scss">
@import "/src/css/dynamic-banner.css";
@import "/src/css/dr-custom.css";
@import "/src/css/style.css";
</style>