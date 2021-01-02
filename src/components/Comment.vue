<template>
    <section class="comments">
    <div class="container">
        <header> 
            <h2>Yorumlar</h2>
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
            <a v-if="!$store.state.user" href="/Login" class="btn grey">YORUM YAPMAK İÇİN GİRİŞ YAPMALISINIZ!</a>
            <a v-if="$store.state.user" @click="openform" id="yorumyaz" class="btn grey">YORUM YAZ</a>
        </div>
       <div class="comment-form active" id="commentform">
                <div class="form">
                    <div class="row">
                        
                        <div class="full">
                            <label for="header">Başlık</label>
                            <input type="text" id="header" v-model="baslik">
                        </div>
                    </div>
                    <div class="full">
                        <label for="message">Yorum</label>
                        <textarea name="message" id="message" v-model="yorum"></textarea>
                    </div>
                    <div class="text-center"><input @click="sendComment" class="btn blue" type="button" value="GÖNDER"></div>
                </div>
        </div>
    </div>
    <div>{{getComments}}</div>
    </section>
</template>

<script>

  export default {
    name: 'CommentPage',
   components:{
      
   },
   data(){
     return{
       baslik:'',
       yorum:'',
       tarih:'',
       commentss:[]
     }
   },
   props:{
     urunid:{
       default:()=>{}
     }
   },
   computed:{
      /*commentss(){
        return this.$store.state.comments
      },*/
      getComments(){
              this.$fire.database.ref('/comments').on('value',(snapshot)=>{      
                this.commentss=snapshot.val()
          })
        }
    },//
    methods:{
      openform(){
          if(document.getElementById('commentform').style.visibility==='visible')
            {
                document.getElementById('commentform').style.visibility='hidden'
            }
            else {
              document.getElementById('commentform').style.visibility='visible'
              document.getElementById('yorumyaz').style.visibility='hidden'
            }
      },
      sendComment(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy;
        if(this.commentss){
           var sayi = this.commentss[this.commentss.length-1].yorum_id+1
        }
        else{var sayi=1}
        if(this.baslik&&this.yorum){
          this.$fire.database.ref('/comments/'+sayi).set({
          comment:this.yorum,
          comment_title:this.baslik,
          comment_date:today,
          productId:this.urunid,
          yorum_id:sayi
          })
        }
        else {alert('Başlık ve yorum alanları doldurulmalıdır!')}
        
        document.getElementById('commentform').style.visibility='hidden'
        document.getElementById('yorumyaz').style.visibility='visible'
      }
    }//
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";

#commentform{
  visibility: hidden;
}
</style>