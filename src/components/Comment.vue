<template>
    <section class="comments">
    <div class="container">
        <header> 
            <h2>Yorumlar <span class="comment-count"  >{{commentss[productId=urunid].sum}}</span></h2>
                <a id="showAllComments" href="javascript:;" @click="showAllComments()">TÜM YORUMLARI GÖSTER</a>
        </header>
        <section class="comments">
    <div class="container">
            <div id="commentss">
                <ul>
                    <li v-for="(comment) in commentss"  v-bind:key="comment">
                      <div v-if="comment.productId==urunid">
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
        <div class="text-center"> 
            <div class="combtnHolder"> </div>
            <a href="/Login" class="btn grey">YORUM YAPMAK İÇİN GİRİŞ YAPMALISINIZ!</a>
        </div>
    </div>
    </section>
</template>

<script>

  export default {
    name: 'CommentPage',
   components:{
      
   },
   props:{
     urunid:{
       default:()=>{}
     }
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
                {"productId":1,"yorum_id":1,"comment_title":"Büşra","comment":"Faydalı, bilinçli olabilmek adına mutlaka okumasi gereken bir kitap","comment_date":"18.11.2020","sum":2},
                {"productId":1,"yorum_id":2,"comment_title":"Yorumum","comment":"Hızlıca elime ulaştı çok memnunum","comment_date":"16.11.2020","sum":2},
                {"productId":2,"yorum_id":1,"comment_title":"Harika","comment":"Çok güzel bir kitap","comment_date":"17.11.2020","sum":1},
                {"productId":3,"yorum_id":1,"comment_title":"Oyun","comment":"Çok güzel kesinkikle tavsiye ederim.","comment_date":"14.11.2020","sum":1},
                {"productId":4,"yorum_id":1,"comment_title":"Karamsarlığa kapıldığında başvurulacak bir başucu kitabı","comment":"Bu kitap, mutluluğu ararken, daha önce hiç bakmadığım yerlere bakmamı sağladı.","comment_date":"01.12.2020","sum":2},
                {"productId":4,"yorum_id":2,"comment_title":"Meraklısı","comment":"İnsanı aydınlatan bir rehber.","comment_date":"20.11.2020","sum":1},
                {"productId":5,"yorum_id":1,"comment_title":"Beğendim","comment":"Harika bir kitap tavsiye ediyorum.","comment_date":"20.11.2020","sum":1} ,
                {"productId":6,"yorum_id":1,"comment_title":"pinball","comment":"İyi bir roman","comment_date":"20.11.2020","sum":1} 
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