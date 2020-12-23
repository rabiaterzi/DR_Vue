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
        <script type="text/javascript"> $(".tab-style:eq(0) li:eq(0)").addClass("active");</script>
        <script type="text/javascript"> $(".sub-sections:eq(0) li:eq(0)").addClass("active");</script>
        </section>
        <section class="account-info">
            <div class="container">
                <header>
                    <h2>Hesap Bilgilerim</h2>
                </header>
                <div class="half">
                    <h4>E-Posta</h4>
                    <p>{{authUser.email}}</p>
                      
                    <input type="hidden" id="eMail1" name="eMail1" title="Lütfen e-posta adresinizi giriniz" value="" maxlength="50" disabled="disabled">

                    
                </div>

                <div class="half">
                    <form>
                    <h4>Şifre</h4>
                 
                    <a class="btn grey update-password-switch" href="#">Şifre Güncelle</a>
                    <div class="update-password">
                        <div class="form-row">
                            <label for="old-pass">Eski Şifreniz</label>
                            <input type="password" id="oldPassword" class="ncFormInputStyle" name="oldPassword" title="Sisteme kayıtlı olan şifrenizi yazınız." maxlength="25">
                        </div>
                        <div class="form-row">
                            <label for="new-pass">Yeni Şifreniz</label>
                            <input type="password" id="newPassword" class="ncFormInputStyle" name="newPassword" title="Yeni şifrenizi yazınız." maxlength="25">
                        </div>
                        <div class="form-row">
                            <label for="new-pass-repeat">Yeni Şifreniz Tekrar</label>
                            <input type="password" id="newPassword2" class="ncFormInputStyle" name="newPassword2" title="Yeni şifrenizi yazınız." maxlength="25">
                        </div>
                        <input type="button" class="btn grey" onclick="return SavePassword.CheckPassword();" value="Güncelle" />
                    </div>
                </form>

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
                        <input type="text" id="name" maxlength="25" autocomplete="off" />
            
                    </div>
                    <div class="form-row">
                        <label for="name">Soyad</label>
                        <input type="text" id="surname" value="Tokos" maxlength="25" autocomplete="off" />
                              
                    </div>
    
                    
   

      

                        <div class="form-row">
                   
                      <input data-val="true" data-val-required="&#39;Newsletter&#39; değeri boş olamaz." id="Newsletter" name="Newsletter" type="checkbox" value="true" /><input name="Newsletter" type="hidden" value="false" />  Turkuvaz Müzik Kitap Mağazacılık Pazarlama A.Ş tarafıma ticari elektronik ileti göndermesi için
<a href="/hesapsozlemesi" class="fancybox" data-fancybox-type="ajax">burada</a> da belirtilenlere iznim vardır.
                        
                    </div>
                </div>
                <div class="half">
                  
                    <div class="form-row">
                        <label for="phone">Telefon</label>
                        <input type="tel" id="phone" maxlength="15" autocomplete="off" placeholder="(XXX)XXX XX XX"/>
                    </div>
                    <div class="form-row">
                        <label for="mobile">Cep Telefonu</label>
                        <input type="tel" id="mobile" maxlength="15" autocomplete="off" placeholder="(5XX)XXX XX XX"/>
                    </div>
                  
                    
                </div>
                <div class="full">
                    <div class="half"></div>
                    <div class="half">
                        <a class="btn grey" href="javascript:;" onclick="return SaveCustomerInfo.SendThisCustomerInfo();">Bilgilerimi Güncelle</a>
                    </div>
                </div>
            </div>
        </section>
    







    </div>
</template>

<script>
  export default {
    computed:{
       authUser(){
         return this.$store.getters.takeuser
       }
     }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
</style>