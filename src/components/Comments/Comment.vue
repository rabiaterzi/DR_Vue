<template>
    <section class="comments">
    <div class="container">
        <header>
            <h2>Yorumlar <span class="comment-count">{{commentss.length}}</span></h2>
                <a id="showAllComments" href="javascript:;" @click="showAllComments()">TÜM YORUMLARI GÖSTER</a>
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
  export default {
    name: 'CommentPage',
   components:{
       Comments,
   },
   created(){
       
   },
   methods:{
       showAllComments(){
           
       }
   },
   data(){
        return{
            commentss:[
                {productId:1,yorum_id:1,comment_title:'Hayat cesurlara torpil gecer',comment:'En güzel hediye,defalarca okunasi bir kitap',comment_date:'28.09.2020'},
                {productId:1,yorum_id:2,comment_title:'Özel',comment:'Bircan hanımın bu özel kitabını sabırsızlıkla bekliyorum',comment_date:'21.09.2020'},
                {productId:1,yorum_id:3,comment_title:'Hayat yörüngesi',comment:'Ne yapacağını bilmeyenler için yol gösterici',comment_date:'20.09.2020'},
                {productId:1,yorum_id:4,comment_title:'Heyecanla',comment:'Okumayı sabırsızlıkla bekliyorum',comment_date:'26.08.2020'},
                {productId:1,yorum_id:5,comment_title:'Dönüşüm başlasın',comment:'Ben böyle bir kitap görmedim ne kadar güzel ve anlamli. Şimdi tekrar ablama alicam.',comment_date:'06.08.2020'} 
            ]      
        }
    }
  }
</script>

<style scoped lang="scss">
@import "/src/css/dynamic-banner.css";
@import "/src/css/dr-custom.css";
@import "/src/css/style.css";
</style>