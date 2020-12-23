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
            <a v-if="!$store.state.user" href="/Login" class="btn grey">YORUM YAPMAK İÇİN GİRİŞ YAPMALISINIZ!</a>
            <a v-if="$store.state.user" href="/Login" class="btn grey">YORUM YAZ</a>
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
   computed:{
      commentss(){
        return this.$store.state.comments
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
</style>