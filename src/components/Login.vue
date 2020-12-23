<template>
    <section class="user-landing">
                <div class="container" >
                    <div class="half">
                        <div class="content">
                            <h3>Üye Girişi</h3>
                            <hr />
                            <p>D&R Eğlence dünyasına hoşgeldiniz!</p>
                          <form @submit.prevent="signIn">
                            <div class="form-row">
                                
                                <label for="e-mail"><label for="Email">E-Posta Adresi</label></label>
                                
                                <input v-model="email" autofocus="autofocus" data-val="true" data-val-email="Hatalı E-posta" data-val-required="E-Posta adresi zorunlu" id="EmailField" maxlength="500" name="Email" title="Sisteme kayıtlı olan mail adresinizi yazınız!" type="text" value="" />
                            </div>
                            <div class="form-row">
                                
                                <label for="Password">Şifre</label>
                                
                                <input v-model="password" id="PasswordField" maxlength="40" name="Password" title="Lütfen şifrenizi giriniz!" type="password" />
                            </div>
                             <div class="form-row">
                                <input type="checkbox" id="remember_me"/>
                                <label for="remember">Beni Hatırla</label> | 
                                 <a href="/Customer/CustomerPasswordRecovery" class="fancybox" data-fancybox-type="ajax">Şifremi Unuttum</a>
                            </div>
                             <div class="form-row">
                                 <a href="/Customer/PrivacyPolicy" class="fancybox" data-fancybox-type="ajax">Gizlilik İlkesi</a>
                            </div>
                            <div class="form-row">
                            <button class="btn grey" name="login_btn" id="login_btn" >GİRİŞ YAP</button>
                               
                           </div>
                           </form>
                        </div>
                    </div>
                    <div class="half" >
                        <div class="content">
                            <h3>Üye Ol</h3>
                            <hr />
                            <p class="login-bottom-head">Üye değil misiniz?</p>
                            <p class="login-bottom-head">Hemen üye olun, D&R Kültür, sanat ve eğlence dünyası avantajlarından faydalanın!</p>
                            <div class="form-row">
                                <img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/general/uye-ol-bg.jpg" alt="Üye Ol"/>
                            </div>
                            <div class="form-row">
                               <nuxt-link to="/Customer/Register"> <input class="btn grey" type="button" value="ÜYE OLMAK İSTİYORUM"/></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
  export default {
    name: 'LoginPage',
    data(){
        return{
            email:'',
            password:'',
            authUser:''
        }
    },
    methods:{
        async signIn(){
            await this.$fire.auth.signInWithEmailAndPassword(this.email,this.password)
            .then(()=>console.log(' ... ')).catch(error=>alert(error.message))
        },
       /* signIn(){
            this.$store.dispatch('takeUser',{email:this.email,password:this.password})
            .then(()=>{
                this.email=""
                this.password=""
            })
        },*/
        /*sendUser(){
            this.$store.dispatch('takeUser',this.authUser)
        },*/
        signOut(){
            this.$fire.auth.signOut()
        }
    },
    created(){
        this.$fire.auth.onAuthStateChanged(user=>{
            this.authUser=user
            this.$store.dispatch('takeUser',user)
            })
    },
    computed:{
        products(){
            //return this.$fire.database.ref('/products/0/name')
        }
    }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
.user-landing{
    position: absolute;
    top: 100px;
}
</style>