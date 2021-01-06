<template> 
<div id="register-page">
    <div class="container">
         <div class="register-form">
        <div class="full buttons">
            <div class="login-btn">Zaten Üyeyim! <nuxt-link to="/login">Giriş Yap</nuxt-link></div>
            
            
            <span class="line"><span>veya</span></span>
        </div>
         <form @submit.prevent="createUser">
        <div class="full">
            <div class="form-row left-halft">
                <label for="name" class="txt">Ad *</label>
                <input type="text" pattern="[a-zA-Z]*" v-model="ad" id="name" maxlength="20" name="name" title="Lütfen Adınızı Giriniz" class="form-control" />
            </div>
            <div class="form-row right-halft">
                <label for="surNameField" class="txt">Soyad *</label>
                <input type="text" pattern="[a-zA-Z]*" v-model="soyad" id="surNameField" maxlength="20" name="surNameField" title="Lütfen Soyadnızı Giriniz." class="form-control" />
            </div>
        </div>
       
        <div class="full">
            <div class="form-row">
                <label for="e-mail" class="txt">E-posta *</label>
                <input type="email" v-model="email" id="e-mail" title="Lütfen e-posta adresinizi giriniz" maxlength="500" name="e-mail" class="form-control" />
            </div>
             <div class="form-row">
                <label for="e-mailcheck" class="txt">E-posta (Tekrar)*</label>
                <input type="text" v-model="emailtekrar" id="e-mailcheck" title="Lütfen tekrardan e-posta adresinizi giriniz" maxlength="500" name="e-mailcheck" class="form-control" />
            </div>
            
        </div>
    
    
     


        <div class="full">
            <div class="form-row left-halft">
                <label for="password" class="txt">Parola *</label>
                <input type="password" pattern="[a-zA-Z0-9]*" v-model="password" id="password" name="password" maxlength="40" minlength="8" title="En Az 8 karakter olmalıdır" class="form-control" />
            </div>
            <div class="form-row right-halft">
                <label for="password-repeat" class="txt">Parola Tekrar *</label>
                <input type="password" pattern="[a-zA-Z0-9]*" v-model="parolatekrar" id="password-repeat" name="password-repeat" maxlength="40" minlength="8" title="En Az 8 karakter olmalıdır" class="form-control" />
            </div>
        </div>
        
        <div class="full contract">
            <div class="form-row">
                <p>
                    <input type="checkbox" id="eBultenCheck" name="eBultenCheck" class="ncFormCheckboxDiv" title="Güncel gelişmelerden kolayca haberdar olmak için e-bültenimize üye olun." />
                    <span style="visibility:hidden">-----</span>Turkuvaz Müzik Kitap Mağazacılık Pazarlama A.Ş tarafıma ticari elektronik ileti göndermesi için <a href="/hesapsozlemesi" class="fancybox" data-fancybox-type="ajax">burada</a> da belirtilenlere iznim vardır.
                </p>
                <p>
                    <input type="checkbox" id="contractCheck" name="contractCheck" title="Üyelik Sözleşmesi'ni okudum, onaylıyorum." />
                    <label><a href="/Customer/MembershipAgreement"  data-fancybox-type="ajax" class="contractLink fancybox" id="contractLink1" title="Üyelik Sözleşmesi"><strong>Üyelik Sözleşmesi</strong></a>'ni okudum, onaylıyorum.</label>
                </p>

                <p>
                    <input type="checkbox" id="membershipCheck" name="membershipCheck" title="Üyelik Sözleşmesi'ni okudum, onaylıyorum." />
                    <label><a href="/Customer/CustomerWidthDescription"  data-fancybox-type="ajax" class="contractLink fancybox" id="contractLink1" title="D&R Üyeliği Aydınlatma Metni"><strong>D&R Üyeliği Aydınlatma Metni</strong></a>'ni okudum, anladım.</label>
                </p>

            </div>
        </div>
        <div class="full buttons">
            <button @click="createUser" class="btn red" name="signup" id="btnAddNewCustomer" title="Üyeliği Tamamla">ÜYELİĞİ TAMAMLA</button>
        </div>
    </form>
    </div>
         <div class="register-info">
        <img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/general/dr-logo-large.png" alt="D&R Kültür, Sanat ve Eğlence Dünyası">
        <h1>D&R Kültür, Sanat ve Eğlence Dünyası <br><strong>sizleri bekliyor!</strong></h1>
        <p>
            <strong>Üyelik formu</strong>ndaki boş alanları doldurarak hemen üye olabilirsiniz.
Bu sayfadan oluşturacağınız üyelik kaydı ile tüm <strong>D&R uygulamalarına</strong> da giriş yapabilirsiniz.
        </p>
    </div>
    </div>
</div>
</template>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0c9a38G_8L7k09tqHmrmU2Hk_CeUBhEQ",
    authDomain: "dr-firebase-9de85.firebaseapp.com",
    projectId: "dr-firebase-9de85",
    storageBucket: "dr-firebase-9de85.appspot.com",
    messagingSenderId: "602632802158",
    appId: "1:602632802158:web:f59e6d568054f7f743fb7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<script>
/*import * as firebase from 'firebase/app';
import 'firebase/auth'*/
/*import firebase from '@firebase/app';
require('firebase/auth');*/

  export default {
      data(){
          return{
          ad:'',
          soyad:'',
          email:'',
          emailtekrar:'',
          parolatekrar:'',
          password:'',
          authUser:''
          }
      },
      methods:{
          register(){
              firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
          },
          async createUser() {
              console.log('üye ola basıldı')
              var emailIsValid=false
              var passwordIsValid=false
              var everythingIsFull=false
              var checkboxIsChecked=false
            
          if(!document.getElementById("contractCheck").checked){
              alert('Lütfen üyelik sözleşmesini onaylayınız!')
          }
          else if(!document.getElementById("membershipCheck").checked){
              alert('Lütfen Üyelik Aydınlatma Metnini onaylayınız!')
          }
          else {
              if(this.ad&&this.soyad&&this.email&&this.emailtekrar&&this.password&&this.parolatekrar){
                if(this.email!=this.emailtekrar){
                alert('Girdiğiniz epostalar eşleşmiyor')
                }
                else {emailIsValid=true}
                if(document.getElementById("password").value.search(/[0-9]/)!=-1 && document.getElementById("password").value.search(/[a-z]/)!=-1 && document.getElementById("password").value.search(/[A-Z]/)!=-1)
                {
                    if(this.password!=this.parolatekrar){
                    alert('Girdiğiniz yeni şifre bilgileri birbirleri ile uyuşmuyor')
                    }
                    else {passwordIsValid=true}
                }
                else{alert('Şifreniz en az 1 sayı ve küçük/büyük harf içermelidir')}

                everythingIsFull=true
                }
              else{ alert('Lütfen tüm alanları doldurunuz')}

              checkboxIsChecked=true
          }    
    
          const formIsValid=checkboxIsChecked&&everythingIsFull&&emailIsValid&&passwordIsValid
          if(formIsValid){
            try {
             await this.$fire.auth.createUserWithEmailAndPassword(this.email,this.password)
             //await this.$store.dispatch('signUp',{email:this.email,password:this.password})
             console.log('üye oluştu')
             alert('Üyelik başarılı !')
            } 
            catch (e) {
            console.log(e)
             }     
          }
          if(this.authUser){
              this.$fire.database.ref('/users/'+this.authUser.uid).set({
                 Uid:this.authUser.uid,
                 Name:this.ad,
                 Surname:this.soyad
              })    
          }             
    }
      },
      created(){
          this.$fire.auth.onAuthStateChanged(user=>{this.authUser=user})
      },
      computed:{
          /*authUser(){     
            return this.$store.getters.takeuser
       },*/
      }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
@import "../css/customerPages.css";
.txt{
    font-family:'Arial Narrow Bold', sans-serif;
}
</style>