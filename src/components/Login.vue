<template>
    <section class="user-landing">
                <div class="container" >
                    <div class="half">
                        <div class="content">
                            <h3>Üye Girişi</h3>
                            <hr />
                            <p>D&R Eğlence dünyasına hoşgeldiniz!</p>
            
                            <div class="form-row">
                                
                                <label for="e-mail"><label for="Email">E-Posta Adresi</label></label>
                                
                                <input autofocus="autofocus" data-val="true" data-val-email="Hatalı E-posta" data-val-required="E-Posta adresi zorunlu" id="EmailField" maxlength="500" name="Email" title="Sisteme kayıtlı olan mail adresinizi yazınız!" type="text" value="" />
                            </div>
                            <div class="form-row">
                                
                                <label for="Password">Şifre</label>
                                
                                <input id="PasswordField" maxlength="40" name="Password" title="Lütfen şifrenizi giriniz!" type="password" />
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
                            <nuxt-link to="/"><input class="btn grey" type="button" name="login_btn" id="login_btn" value="GİRİŞ YAP"/></nuxt-link>
                               
                           </div>
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
                                <input class="btn grey" type="button" value="ÜYE OLMAK İSTİYORUM" onclick="javascript: window.location = '/Customer/Register'" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>
  export default {
    name: 'LoginPage'
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