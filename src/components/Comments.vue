<template>
    <section class="comments">
    <div class="container">
            <div id="commentss">
                <ul>
                    <li v-for="(comment,index) in commentss"  v-bind:key="comment">
                      <div v-if="index<3">
                        <div class="comment">
                          <div class="comment-content">
                            <strong>{{comment.comment_title}}</strong>
                            <p>{{comment.comment}}</p>
                          </div>
                          <div class="comment-details">
                            <p>{{comment.comment_date}}</p>
                          </div>
                        </div>
                        </div>
                    </li>
                </ul>            
            </div>
    </div>
    </section>
</template>

<script>
//import Comment from './Comment';
  export default {
    name:'Comments',
    /*
    components:{
      Comment
    },*/
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
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
</style>