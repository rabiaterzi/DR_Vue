<template>
    <div>
    


<div id="fb-root"></div>
        <section class="full-content">
        <div class="container">
        <h2>Hesabım</h2>
        <hr />
        
<ul class="tab-style customerTab">
    <li><a href="/Customer/Info/">Kişisel Bilgilerim</a></li>
    <li><a href="/Order/CustomerOrders">Sipariş Bilgilerim</a></li>
    <li><a href="/Customer/KoboBooks/">Dijital Ürünler</a></li>
    <li><a href="/ShoppingCart/Wishlist/">Listelerim</a></li>
        
</ul>






        </div>    
        <!--<script type="text/javascript"> $(".tab-style:eq(0) li:eq(0)").addClass("active");</script>
        <script type="text/javascript"> $(".sub-sections:eq(0) li:eq(0)").addClass("active");</script>-->
        </section>
        <section class="account-info">
            <div class="container">
                <header>
                    <h2>Hesap Bilgilerim</h2>
                </header>
                <div class="half">
                    <h4>E-Posta</h4>
                    <p v-if="authUser">{{authUser.email}}</p>
                    
                    <input type="hidden" id="eMail1" name="eMail1" title="Lütfen e-posta adresinizi giriniz" value="" maxlength="50" disabled="disabled">

                    
                </div>

                <div class="half">
                   
                    <h4>Şifre</h4>
                  <p>-</p>
                    <button class="btn grey update-password-switch" @click="openupdate" id="updatebuton">Şifre Güncelle</button>
                    
                    <div  id="guncelle">
                        <div class="form-row">
                            <label for="old-pass">Eski Şifreniz</label>
                            <input type="password" v-model="oldpassword" id="oldPassword" class="ncFormInputStyle" name="oldPassword" title="Sisteme kayıtlı olan şifrenizi yazınız."  maxlength="25">
                        </div>
                        <div class="form-row">
                            <label for="new-pass">Yeni Şifreniz</label>
                            <input type="password" v-model="password" id="newPassword" class="ncFormInputStyle" name="newPassword" title="Yeni şifrenizi yazınız." minlength="8" maxlength="25">
                        </div>
                        <div class="form-row">
                            <label for="new-pass-repeat">Yeni Şifreniz Tekrar</label>
                            <input type="password" v-model="passwordtekrar" id="newPassword2" class="ncFormInputStyle" minlength="8" name="newPassword2" title="Yeni şifrenizi yazınız." maxlength="25">
                        </div>
                        <input type="button" class="btn grey" @click="updatePassword" value="Güncelle" />
                    </div>
                

                </div>
            </div>
        </section>
        <section class="personal-info">
            <div class="container">
                <header>
                    <h2>Kişisel Bilgilerim</h2>
                </header>
                <div class="half">
                    <div class="form-row">
                        <label for="name">Ad</label>
                        <input type="text" id="name" maxlength="25" autocomplete="off" v-model="iisim" />
            
                    </div>
                    <div class="form-row">
                        <label for="name">Soyad</label>
                        <input type="text" id="surname" v-model="ssoyisim" maxlength="25" autocomplete="off"/>
                              
                    </div>
    
                    
   

      

                        <div class="form-row">
                   
                      <input data-val="true" data-val-required="&#39;Newsletter&#39; değeri boş olamaz." id="Newsletter" name="Newsletter" type="checkbox" value="true" /><input name="Newsletter" type="hidden" value="false" />  Turkuvaz Müzik Kitap Mağazacılık Pazarlama A.Ş tarafıma ticari elektronik ileti göndermesi için
<a href="/hesapsozlemesi" class="fancybox" data-fancybox-type="ajax">burada</a> da belirtilenlere iznim vardır.
                        
                    </div>
                </div>
                <div class="half">
                  
                    <div class="form-row">
                        <label for="phone">Telefon</label>
                        <input  type="tel" id="phone" maxlength="15" autocomplete="off" v-model="pphone"/>
                    </div>
                    <div class="form-row">
                        <label for="mobile">Cep Telefonu</label>
                        <input  type="tel" id="mobile" maxlength="15" autocomplete="off" v-model="mmobilephone"/>
                    </div>
                  
                    
                </div>
                <div class="full">
                    <div class="half"></div>
                    <div class="half">
                        <a class="btn grey" @click="updateInfo">Bilgilerimi Güncelle</a>
                    </div>
                </div>
            </div>
        </section>
    







    </div>
</template>

<script>
  export default {
      data(){
          return{
              oldpassword:'',
              password:'',
              passwordtekrar:'',
              authuser:'',
              pssword:'',
              iisim:'',
              ssoyisim:'',
              pphone:'',
              mmobilephone:''
          }
      },
    computed:{
       authUser(){
          this.authuser=this.$store.getters.takeuser
          if(this.authuser){
              this.$fire.database.ref('/users/'+this.authuser.uid+'/Name').on('value',(snapshot)=>{      
                this.iisim=snapshot.val()
            })
            this.$fire.database.ref('/users/'+this.authuser.uid+'/Surname').on('value',(snapshot)=>{      
                this.ssoyisim=snapshot.val()
            })
            this.$fire.database.ref('/users/'+this.authuser.uid+'/Phone').on('value',(snapshot)=>{      
                this.pphone=snapshot.val()
            })
            this.$fire.database.ref('/users/'+this.authuser.uid+'/Mobilephone').on('value',(snapshot)=>{      
                this.mmobilephone=snapshot.val()
            })
            this.pssword=this.authuser.password
          }
          return this.authuser
       }
     },
     methods:{
         openupdate(){
             if(document.getElementById('guncelle').style.visibility==='visible')
            {
                document.getElementById('guncelle').style.visibility='hidden'
            }
            else document.getElementById('guncelle').style.visibility='visible'

            document.getElementById('updatebuton').style.display='none'
         },
         updatePassword(){
             if(this.oldpassword&&this.password&&this.passwordtekrar){
                 if(document.getElementById("newPassword").value.search(/[0-9]/)!=-1 && document.getElementById("newPassword").value.search(/[a-z]/)!=-1 && document.getElementById("newPassword").value.search(/[A-Z]/)!=-1&&this.password.length>7){
                     if(this.password==this.passwordtekrar){
                       //if(this.oldpassword==this.pssword){
                           this.authuser.updatePassword(this.password)
                           alert('Şifreniz güncellendi')
                       //}
                       //else {alert('Girmiş olduğunuz eski şifreniz hatalıdır !')}
                     }
                     else {alert('Girdiğiniz yeni şifre bilgileri birbirleri ile uyuşmuyor')}
                 }
                  else {alert('Şifreniz en az 1 sayı ve küçük/büyük harf içermelidir,en az 8 karakter olmalıdır!')} 
             }
             else {alert('Lütfen tüm alanları doldurunuz !')}
         },
        updateInfo(){
            this.$fire.database.ref('/users/'+this.authUser.uid).update({
                Phone:this.pphone,
                Mobilephone:this.mmobilephone,
                Name:this.iisim,
                Surname:this.ssoyisim
             })
             alert('Bilgileriniz başarıyla güncellendi !')
        }
     }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";

#guncelle{
    visibility: hidden;
}
</style>