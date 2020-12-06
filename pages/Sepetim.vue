<template>
<div>
  <div v-if="quantitytotal==0">

<div id="cartList">
        <section class="basketContentFrame">
            <div class="emptyBasketFrame">
                <div class="container">
                    <div class="emptyCartMessage">
                        <h3 class="subpage-header">
                            Alışveriş Sepetiniz Boş
                        </h3>
                        <p>
                            Biraz gezinmeye ne dersin?<br>
                            <strong>432.000</strong> ürün içinden sana uygun bir şeyler olduğuna eminiz.
                        </p>
                        <div class="emptyImg"> <img src="https://www.dr.com.tr/Themes/DR/Content/NewTheme/images/empty-basket.png" alt="" /> </div>
                    </div>
                    <h3 class="subpage-header">
                        Nasıl Alışveriş Yapabilirsiniz?
                    </h3>
                    <p class="text-center font-500"> Alışveriş yapmak için üye girişi yapmalısınız. Sipariş vermek için aşağıdaki adımları izlemelisiniz.</p>
                    <ol class="bulletList dark" style="margin: 20px 0px;">
                        <li>İncelediğiniz ürünü sepetinize ekleyiniz.</li>
                        <li>“Sepetim” sayfasında ürün bilgilerinizi kontrol ediniz. Değişiklik yapmak istediğiniz alanlar varsa güncelleyiniz.</li>
                        <li>Ödeme yapmak için “devam et” butonuna basınız.</li>
                        <li> Teslimat ve fatura adresinizi seçiniz. “yeni adres ekle” seçeneği ile farklı bir teslimat adresi girebilirsiniz.</li>
                        <li>“Fatura ürün ile birlikte gelsin” seçeneğini tıkladığınızda, teslimat adresinize fatura kesilecektir.</li>
                        <li> Farklı bir adres ve kişiye/kuruma fatura kesilecek ise; tiki kaldırmanız gerekmektedir. Bu durumda yeni adres bilgilerini ekleyebilirsiniz.</li>
                        <li>Devam et butonuna basarak “Ödeme” sayfasına gelerek ödeme tipini seçiniz.</li>
                        <li>“Mesafeli Satış” ve “Ön Bilgilendirme” kabul sözleşmelerini onayladıktan sonra “satın al” seçeneği ile siparişinizi tamamlayınız.</li>
                    </ol>
                    <div class="note-widget">
                        Siparişler, Sipariş İptali, Teslimat ve Kargo, Fatura ve İade İşlemleriniz için daha detaylı bilgi almak için lütfen <a href="/yardim">Yardım</a> sayfamızı ziyaret ediniz.
                    </div>
                </div>
            </div>
            <div class="text-center"> <nuxt-link to="/" class="redBtn" style="margin-top: 20px;">ALIŞVERİŞE BAŞLA</nuxt-link></div>


        </section>
        <input type="hidden" id="ebookError">
        <input type="hidden" id="ebookErrorHtml" value=''>
</div>
  </div>
  <div v-else>
<Basket style="margin-left:175px"/>
<SProduct/>
  </div>
  
</div>

</template>

<script>
import Basket from '../src/components/Basket';
import SProduct from '../src/components/SProduct';
export default {
  components: {
    Basket,
    SProduct
  },
  computed:{
        quantitytotal(){
            return this.$store.getters.totalQuantity
        }
    },
};
</script>
<!-- -->
<style scoped lang="scss">
@import "../src/css/dynamic-banner.css";
@import "../src/css/dr-custom.css";
@import "../src/css/style.css";
@import "../src/css/basket-page.css";
</style>