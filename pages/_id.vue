<template>
        <section class="product-details" id="prod">
        <div class="head-cta">
            <div class="container">
                <div class="product-details">
                        <figure>
                            <img src="https://i.dr.com.tr/cache/69x69-0/originals/0001889645001-1.jpg" title="Son C&#252;ret" alt="Son C&#252;ret" />
                        </figure>
                    <div class="product-name"><h3>Son C&#252;ret</h3></div>
                </div>                  
                <div id="sta0" class="hidden">
                    <div class="product-price"><p><span>(KDV Dahil)</span> 25,20 ₺</p></div>
                    <a class="btn red" href="javascript:;" onclick="PrepareAndAddToBasket();">SEPETE EKLE</a>
                </div>
                <div id="sta1" class="hidden">
                    <span class="product-status">Satışa Hazır</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="head">
                <div class="col-half">
                    <h1 class="product-name">{{product[this.$route.params.id-1].name}}
                    <!-- yeni resmi-->
                       <span class="newItem"><img src="https://www.dr.com.tr/Themes/DR/Content/assets/images/new-item.png"></span> 
                       
                    </h1>
                </div>              
<div class="col-half" style="text-align:right">
    <ul class="rate three">
         <!-- 5 star-->
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  <link rel="stylesheet" type="text/css" href="style.css">
  <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
        <span>0/10 - 0 Kişi</span>
       <a href="/Login" class="add-to-favorites"> <a href=""> <span style="font-size: 140%; color: black;">&hearts;</span> </a> FAVORİLERİME EKLE</a>
</div>
            </div>
            <div class="all-details">
<div class="images">
    <figure class="big-image">
                <a href="javascript:" class="showZoomable">
                    <img alt="Son C&#252;ret" :src="images[this.$route.params.id-1].img" title="Son C&#252;ret" itemprop="image" id="main-product-img" class="img-responsive" />
                </a>
    </figure>
    <div style="clear: both;"></div>
</div>
<div class="zoomableOverlay">
    <div class="productZoomSliderWrapper">
        <button class="closeButton">X</button>
        <div class="productZoomSlider owl-carousel">
                <div class="item">
                    <span class="zoomable">
                        <img class="lazyload proSliderImg" data-src="https://i.dr.com.tr/cache/600x600-0/originals/0001889645001-1.jpg" data-thumb="https://i.dr.com.tr/cache/64x64-0/originals/0001889645001-1.jpg" alt="Son C&#252;ret">
                    </span>
                    <div class="thumbnail-content" hidden aria-hidden="true"> <img src="https://i.dr.com.tr/cache/600x600-0/originals/0001889645001-1.jpg" /> </div>
                </div>
        </div>
    </div>
</div>          
<div class="specs">
                
    <div class="author">Yazar: 
            <span><a href="/Yazar/yilmaz-ozdil/s=265160"><span class="name">{{product[this.$route.params.id-1].author}}</span></a></span>
    </div>                 
                <div class="author">Yayınevi : <h2><a href="/Yayinevi/sia/s=10004611"><span class="name" id="publisherName">{{product[this.$route.params.id-1].publisher}}</span></a> </h2></div>
                    <div class="spec-box" id="priceBox">
                        <div id="result" class="variants-wrapper">
                            <div class="variant">
                                <h3></h3>
                                <div class="variant-content">
                                    <ul id="value1Div" style="margin-top:20px;" class="ciltkapak">
                                        <li class="">
                                            <input type="radio" value="Ciltli" name="Medya Tipi" id="chars1_0" onclick="GetSelectSkuValue('Ciltli')">
                                            <label for="chars1_0">Ciltli</label></li><li class=""><input type="radio" value="İnce Kapak" name="Medya Tipi" checked="" id="chars1_1" onclick="GetSelectSkuValue('İnce Kapak')">
                                            <label for="chars1_1">İnce Kapak</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <div id="statusDiv"></div>
                            <div id="priceDiv" class="book-active">
                                
<div class="prices">
    <div class="full">
        <div class="price"><span id="salePrice"></span><span class="price-currency">{{product[this.$route.params.id-1].price.toFixed(2)}} TL</span></div>
        <div class="quantity">
            <input id="decrease" type="button" @click="btnDecrase()" value="-">
            <input id="qty" type="text" onclick="QtyChange();" :value="count" />
            <input id="increase" type="button" @click="count += 1" value="+">
        </div>
    </div>
    <div class="full">
        <div class="old-price"><span id="oldPrice"></span><span id="oldPriceCurrency" class="price-currency">{{product[this.$route.params.id-1].pricewd.toFixed(2)}} TL</span></div>
        <span class="discount">-%{{product[this.$route.params.id-1].discount}}</span>
    </div>
</div>

<input type="hidden" id="hdnDiscount" data-discount="40" />

                                <div class="cta">
                                    <a class="btn red" href="javascript:;" @click="addProductToCart(product[$route.params.id-1])">SEPETE EKLE</a>
                                    <a class="btn white fancybox" href="/Themes/DR/Content/assets/partials/fiyati-dusunce-uyar.html?ver=643" id="openAlarm" data-fancybox-type="ajax">FİYATI DÜŞÜNCE UYAR</a>
                                </div>
                            </div>
                        <div class="clear"></div>
                        <div class="shipmentTimeFrame">
                                                            <div class="col-xs-12 col-md-4">
                                    <div class="tbox">
                                        <strong> Hızlı Teslimat</strong>
                                        <div class="timeCell">25 Aralık </div>
                                    </div>
                                </div>
                                                       <div class="col-xs-12 col-md-4">
                                <div class="tbox">
                                    <strong> Standart Teslimat</strong>
                                    <div class="timeCell">
                                   26 - 29 Aralık
                                   </div>
                                    <div class="t-free">* 100 TL üzeri bedava!</div>
                                </div>
                            </div>
                          
                       </div>
                    </div>
                </div>
            </div>
        </div> 
        <!--kitap açıklamaları-->
        <div>
<v-if v-if="$route.params.id==1" >
<div>
       <div class="summary"  style="font-family: 'Open Sans', sans-serif;padding-left:80px;padding-right:80px;" >
                <h2 class="product-h2-title" >Koronadan Korunmak M&#252;mk&#252;n Kitap Açıklaması</h2>
                <p><p>Koronavirüs, yaşadığımız hayatları kökünden sarstı. Hayatla ilgili beklentilerimiz, yaşam tarzımız, iş alışkanlıklarımız tamamen değişti. Hepimizi korkuyla evlerimize hapsetti. Neredeyse başka bir şeyden konuşmaz olduk…<br />Oysa dünyamızda her zaman virüsler vardı. İnsanlık tarihi virüs salgınlarıyla dolu. Tüm bu salgınlara rağmen, insanoğlu her seferinde virüsleri yenmeyi başardı ve soyunu devam ettirdi.</p>
<p>Yine aynısı olacak: Bu salgını da yeneceğiz! COVID-19 değil, insanoğlu kazanacak! <br />Bağışıklık sistemimiz, her türlü hastalığı engelleme ve hastalık meydana geldiğinde tedavi edebilme yeteneğine sahip. <br />Bu kitapta size bağışıklık sisteminizi nasıl güçlendireceğinizi anlattım. Koronavirüsten korunmanız mümkün!</p>
<p>Koronavirüsten korunmak için nasıl beslenmeliyim? <br /> Hangi bitkileri kullanmalıyım? <br /> Ozonterapinin koronavirüs üzerindeki etkileri nedir? <br /> Bağışıklık sistemimi güçlendirmek için hangi takviyeleri almalıyım? <br /> Kendimi ve ailemi hastalıktan korumak için ne yapmalıyım? <br /> Aşı olmalı mıyım? <br /> Vitaminleri nasıl kullanmalıyım?<br />Koronavirüsten korkmayın. Bağışıklık sisteminizin zayıflamasından korkun. <br />En koruyucu maskeniz, kendi bağışıklık sisteminiz!</p>
<p> </p>
<p>(Tanıtım Bülteninden)</p>
<p> </p>
                                        <p><strong>Hamur Tipi : </strong>2. Hamur</p>
                        <p><strong>Sayfa Sayısı : </strong>144</p>
                        <p><strong>Ebat : </strong>13,5 x 21</p>
                        <p><strong>İlk Baskı Yılı : </strong>2020</p>
                        <p><strong>Baskı Sayısı : </strong>1. Basım</p>
                        <p><strong>Dil : </strong>T&#252;rk&#231;e</p>
                <p></p>
            </div>
 
</div>
</v-if>
<v-if v-else-if="$route.params.id==2">

 <div class="summary" style="font-family: 'Open Sans', sans-serif;padding-left:80px;padding-right:80px;" >
                <h2 class="product-h2-title">D&#252;r&#252;st Yalancı Kitap Açıklaması</h2>
                <p><p>Kuzey’in en parlak yıldızı Tove Jansson’dan kendimize ve diğerlerine söylediğimiz yalanlara dair bir roman: Dürüst Yalancı. Milyonlarca okura ulaşan çocuk kitaplarıyla tüm dünyada tanınan Jansson, yetişkinler için yazdığı bu romanda iki kadının kurduğu çıkar ilişkisini ele alıyor. Kuzey’de bir sahil köyünde tarifsiz bir ayaz kol gezerken Katri Kling adlı bir kadın, feraha çıkma umuduyla bir plan yapıyor ve ormanın gerisinde bir başına oturan çocuk kitabı yazarı Anna Aemelin’in yaşamına buzda yürürcesine adım atıyor. İki kişilik bir oyun bu ve kar hiç durmadan yağarken avla avcı, kurtla tavşan birbirine karışıyor.</p>
<p>Jansson, doğaya ve havaya neredeyse roman kahramanları kadar etkin bir rol biçiyor ve fırtınalarla dolu insan ruhunu olduğu gibi, belirsizlikleri ve tutarsızlıklarıyla resmediyor. Ağırlığı bir türlü silinmeyen geçmişin, ilişkilerin ezici doğasının ve sanatın sunduğu tesellinin hikâyesi bu anlatılan ve içinde bir yerlerde vahşi bir hayvan, belki bir kurt geziyor.</p>
<p>Dürüst Yalancı Tove Jansson’un dehasını yansıtan,minimalizmin ihtişamıyla duru, naif ve sarsıcı bir roman. </p>
<p>“Tove Jansson’un en iyi romanlarından biri… Sürükleyici, özgün, tuhaf.”</p>
<p>Sheila Heti, The New Yorker</p>
<p>“Hakikate, yalana ve hakikat ile kandırmaya dair mükemmelen kurgulanmış bir kitap, 2011’de En İyi Çeviri Kitap Ödülü’nü (Best Translated Book Award) almış olması şaşırtıcı değil.”</p>
<p>Publishers Weekly</p>
<p>“Bu yıl (2010) okuduğum en güzel ve en doyurucu roman.”</p>
<p>Ursula K. Le Guin, The Guardian</p>
<p> </p>
<p>(Tanıtım Bülteninden)</p>
<p> </p>
                                        <p><strong>Hamur Tipi : </strong>2. Hamur</p>
                        <p><strong>Sayfa Sayısı : </strong>152</p>
                        <p><strong>Ebat : </strong>13,5 x 19,5</p>
                        <p><strong>İlk Baskı Yılı : </strong>2020</p>
                        <p><strong>Baskı Sayısı : </strong>1. Basım</p>
                        <p><strong>Dil : </strong>T&#252;rk&#231;e</p>
                <p></p>
            </div>
          
</v-if>
<v-if v-else-if="$route.params.id==3">
 <div class="summary" style="font-family: 'Open Sans', sans-serif;padding-left:80px;padding-right:80px;" >
                <h2 class="product-h2-title">Camları Kırın Kuşlar Kurtulsun Kitap Açıklaması</h2>
                <p><p>Yılmaz Güney ve Fatoş Güney aşkı farklı bağlamlarda pek çok tartışmanın konusu oldu. Nice zorluklara göğüs gererek serpilen, cezaevi, sürgün, ayrılık gibi çetin süreçlerle daha da güçlenip büyüyen bu destansı sevgi ilk kez tüm detayları, tüm çıplaklığıyla kâğıda döküldü, bizzat Fatoş Güney tarafından.</p>
<p>Moda’da doğup büyümüş, burjuva kültürüyle yetişmiş ve kendi kozasından çıkmamış bir genç kızın hayatının altüst oluş hikâyesiyle başlıyor Camları Kırın Kuşlar Kurtulsun. Bu bireysel değişim ülkenin siyasi tarihi ve politik sarsıntılarla, Yılmaz Güney’in kendi yolunu bulma serüveniyle harmanlanarak eşsiz bir anlatı oluşturuyor. Fatoş Güney bu kitapta bizlere birlikte mücadele etmenin, birlikte olgunlaşmanın, birlikte direnmenin hikâyesini sunuyor.</p>
<p>Camları Kırın Kuşlar Kurtulsun Yılmaz Güney ve Fatoş Güney’in dillere pelesenk olan büyük aşkına, Türkiye politik sinemasına ve onun en özgün, öncü figürü olan Yılmaz Güney’in hayatına, darbeler tarihine; direnmeye, değiştirmeye inanmış bir kuşağın anlam dünyasına ışık tutuyor.</p>
<p>“…Fakat yılmamalıydım, sürdürmeliydim yazmayı çünkü biliyordum, hiçbir şey sonsuzlukta yok olup gitmek kadar acı olamazdı. Yazmak, ölümden bir şey koparmaktı!</p>
<p>(…) Geçmişin tüm birikimi, şimdiki zamanın gerçekliğiyle birleşecekti nihayet. Bu kez yeniden hatırlamanın, yeniden değerlendirmenin süzgecinden geçerek…”</p>
<p> </p>
<p>(Tanıtım Bülteninden)</p>
<p> </p>
                                        <p><strong>Hamur Tipi : </strong>2. Hamur</p>
                        <p><strong>Sayfa Sayısı : </strong>360</p>
                        <p><strong>Ebat : </strong>13,5 x 21</p>
                        <p><strong>İlk Baskı Yılı : </strong>2020</p>
                        <p><strong>Baskı Sayısı : </strong>1. Basım</p>
                        <p><strong>Dil : </strong>T&#252;rk&#231;e</p>
                <p></p>
            </div>
</v-if>
<v-if v-else-if="$route.params.id==4">
    <div class="summary" style="font-family: 'Open Sans', sans-serif;padding-left:80px;padding-right:80px;" >
                <h2 class="product-h2-title">Mutsuz Olan Cennete Gidemez Kitap Açıklaması</h2>
                <p><p>"Cennet, gidilecek bir yer değil, edinilebilecek bir bilinç durumudur" der Amerikalı yazar Stephen R. Covey. Cennete gitmek yerine, cenneti edinmeyi tercih etmek, insanlık açısından daha değerli bir devrimdir bu yüzden.</p>
<p>Cennet bilincinin ne olduğunu bilmek, cennet bilincini edinebilmek için çok önemli...</p>
<p>Bu kitap, bir yere varmayı değil, bir hale sahip olmayı nasıl başarabileceğimizin yol haritası...</p>
<p>Hatta bir hipnoz...</p>
<p>Kitap boyunca ritmik tekrarlar üzerine kurulu anlatım biçimi, okura cennet bilincini edinmesi yolunda zihinsel bir destek de sağlıyor.</p>
<p>İyi-kötü, dost-düşman, kurban-fail, suçlu-suçsuz ikileminden arınmayan bir zihnin cennet bilincini edinmesi imkânsız... Kuvvetli bir yargılama becerisine sahip zihinlerin cenneti inşa edebilmesinin tek yolu, düşünce sisteminde köklü bir devrim yapabilmektir... Nasıl mı?</p>
<p>Zaza Yurtsever'in kaleme aldığı Mutsuz Olan Cennete Gidemez tam da bu sorunun cevabını veriyor.</p>
<p>Hipnotik etkili bu yol haritası, cennete kavuşmayı dileyenler için değil, kendi cennetini inşa etmeye hazır olanlar için kaleme alındı.</p>
<p> </p>
<p>(Tanıtım Bülteninden)</p>
<p> </p>
                                        <p><strong>Hamur Tipi : </strong>2. Hamur</p>
                        <p><strong>Sayfa Sayısı : </strong>296</p>
                        <p><strong>Ebat : </strong>13,5 x 19,5</p>
                        <p><strong>İlk Baskı Yılı : </strong>2020</p>
                        <p><strong>Baskı Sayısı : </strong>1. Basım</p>
                        <p><strong>Dil : </strong>T&#252;rk&#231;e</p>
                <p></p>
            </div>
</v-if>
<v-if v-else-if="$route.params.id==5">
<div class="summary" style="font-family: 'Open Sans', sans-serif;padding-left:80px;padding-right:80px;" >
                <h2 class="product-h2-title">Terapi Odasında İyileşen İlişkiler Kitap Açıklaması</h2>
                <p><p>İlişkilerimizde her şeyin yolunda gittiğini düşünürken alabora olduk bazen. Bazılarımız göz göze geldiğimizde kalbimizi kıpır kıpır eden kişiye tutunmak istedik, yaralarımızı onunla birlikte sarabileceğimize inandık belki ama bir şeyi fark edemedik: İkimiz de boğuluyorduk. </p>
<p>Farklı geçmişlerle yorgun düşmüş iki kişi nasıl sarabilirdi birbirinin yarasını? Yahut sarabilir miydi? Kişi ancak kendi kendini mi iyileştirebilirdi? Tünelin ucunda hiç ışık yok muydu? Hep aldatacak ya da aldatılacak mıydık? İnsan gerçekten var olan ilişkide ihtiyaçları karşılanmadığı için mi başkasına yönelirdi yoksa ihtiyaçlarının sonu gelmediğinden mi? Sağlıklı bir ilişkide olmayı, korkmadan ve incitmeden bağlanmayı, gerektiğinde gitmeyi ve kendimiz için doğru partnerler seçmeyi nasıl başaracaktık?</p>
<p>Hep aradığımız hayatın anlamı aslında orada bir yerde duruyordu ve biz onu keşfedene kadar sessiz kalacaktı. </p>
<p> </p>
<p>Psikiyatrist Dr. Bahar Tezcan hepimizin sık sık rotasız kaldığı bu anlam arayışına kırıyor dümenini. Terapi odası ilişkilerin dalgalı denizi oluyor ve bağlanma, aldatma-aldatılma, narsist bireylerle ilişki, evlilik, boşanma gibi konular apaçık halleriyle su yüzüne çıkıyor. Aşk, tutku, sanat ve emekle harmanlanmış Terapi Odasında İyileşen İlişkiler ile siz de geçmişinizi anlayacak ama ona bağlı kalmadan güçlenerek ilerlemeyi keşfedeceksiniz. Geçmişin ancak onu anladığınız, size neler olup bittiğini görebildiğiniz zaman geçmişte kaldığını fark edip, “Neden böyle oluyor?” diye düşündüğünüz pek çok şeyin cevabıyla yüzleşecek, kitabı bitirdikten sonra ruhunuzdaki ferahlığı sonuna kadar hissedeceksiniz!</p>
<p> </p>
<p>(Tanıtım Bülteninden)</p>
<p> </p>
                                        <p><strong>Hamur Tipi : </strong>2. Hamur</p>
                        <p><strong>Sayfa Sayısı : </strong>256</p>
                        <p><strong>Ebat : </strong>13,5 x 19</p>
                        <p><strong>İlk Baskı Yılı : </strong>2020</p>
                        <p><strong>Baskı Sayısı : </strong>1. Basım</p>
                        <p><strong>Dil : </strong>T&#252;rk&#231;e</p>
                <p></p>
            </div>
            
</v-if>
<v-if v-else-if="$route.params.id==6">
 <div class="summary" style="font-family: 'Open Sans', sans-serif;padding-left:80px;padding-right:80px;" >
                <h2 class="product-h2-title">Pinball 1973 Kitap Açıklaması</h2>
                <p><p class="p1"><span class="s1">İyi oyunlar!</span></p>
<p class="p3">Bir pinball makinesinden hiçbir şey kazanamayız. Sayıya dönüştürülmüş gurur dışında. Öte yandan kaybedeceklerimiz gerçekten de çok fazladır.<span class="apple-converted-space"> </span></p>
<p class="p3">Siz pinball makinesinin başında tükenmeye devam ederken bir başkası Proust okuyor olabilir. Bir diğeri açık hava sinemasında kız arkadaşıyla <em>İz Peşinde</em> filmini izlerken arabasında onunla oynaşıyor olabilir. İşte bu adamlar belki de dönemlerinin<span class="apple-converted-space"> </span>dikkat çeken yazarları ya da mutlu kocaları olacak kişilerdir.</p>
<p class="p3">Pinball makinesi sizi bir yere götürmez. Olsa olsa en fazla <em>replay</em> ışığı yanar. <em>Replay, replay, replay…</em> Kim bilir, belki de pinball makinesinin asıl amacı sonsuzluğu göstermektir.<span class="apple-converted-space"> </span></p>
<p class="p3">Haruki Murakami’nin yazdığı ikinci roman olan <em>Pinball 1973</em> yazarın kült romanlarında karşımıza çıkan temaların tohumlarını atan hikâyelere götürüyor bizi. Kız arkadaşı genç yaşta ölen<span class="apple-converted-space"> </span>kahramanımız, gençliğinde saatler, günler boyunca oynadığı<span class="apple-converted-space"> </span>pinball makinesinin peşine düşüyor. Murakami’nin sonraki<span class="apple-converted-space"> </span>romanlarında yeniden karşımıza çıkacak olan Fare, anlamsızlıkla savaşıyor, aşkın sınırlarını keşfediyor.<span class="apple-converted-space"> </span></p>
<p class="p3">Murakami ise daha otuzlu yaşlarının başında yazdığı bu romanla uzun yıllar boyunca bizi büyüleyecek edebiyatının temellerini sağlamlaştırmaya başlıyor.</p>
<p class="p3"> </p>
<p>(Tanıtım Bülteninden)</p>
<p> </p>
                                        <p><strong>Hamur Tipi : </strong>2. Hamur</p>
                        <p><strong>Sayfa Sayısı : </strong>144</p>
                        <p><strong>Ebat : </strong>13,5 x 19,5</p>
                        <p><strong>İlk Baskı Yılı : </strong>2020</p>
                        <p><strong>Baskı Sayısı : </strong>1. Basım</p>
                        <p><strong>Dil : </strong>T&#252;rk&#231;e</p>
                <p></p>
            </div>
</v-if>
        </div>
         <br><br><br><br><br><br><br><br><br><br><br>
           <br><br><br><br><br><br><br><br><br><br><br>
             <br><br><br><br><br><br><br><br><br><br><br>
             <br/>
              
        <CommentC :urunid="$route.params.id" style="margin-top:60px"/>  
        </section>       
</template>


<script>
                       /* $( document ).ready(function() {
                            $('#sta0').removeClass("hidden");
                        });*/
                    </script>
<script>
    var container = $(".product-details .rate"),
       beginClass = container.attr("class"),
       posX,
       posRange,
       posNum;
    container.on("mousemove", function (e) {
        container.attr("class", "rate");
        posX = Math.floor(e.clientX - container.offset().left);
        posRange = Math.floor(container.width() / 10);
        posNum = Math.floor(posX / posRange);

        switch (posNum) {
            case 1:
                container.addClass("half");
                break;
            case 2:
                container.addClass("one");
                break;
            case 3:
                container.addClass("one-half");
                break;
            case 4:
                container.addClass("two");
                break;
            case 5:
                container.addClass("two-half");
                break;
            case 6:
                container.addClass("three");
                break;
            case 7:
                container.addClass("three-half");
                break;
            case 8:
                container.addClass("four");
                break;
            case 9:
                container.addClass("four-half");
                break;
            case 10:
                container.addClass("five");
                break;
        }
    });
    container.on("mouseout", function () {
        container.attr("class", beginClass);
    });

    container.on("click", function () {
        rate(posNum);
    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#main-product-img-lightbox-anchor-1251728').magnificPopup(
        {
            type: 'image',
            removalDelay: 300,
            gallery: {
                enabled: true
            }
        });
        $('.thumb-popup-link').click(function () {
            $('#main-product-img').attr('src', $(this).data('im2'));

        });
        

        $(".product-images-thumbs").owlCarousel({
            navigation : true,
            navigationText : ["",""],
            items : 5,
            itemsTablet: [768,3],
            itemsMobile : [479,3]
        });

         var settings = {
				paginationNumbers: false,
                items: 1,
                navigation : true,
                navigationText : ['', ''],
                mouseDrag: false,
                touchDrag: false,
				thumbnailSelector: '.thumbnail-content',
				singleItem: true
			};
			OwlThumbs.Plugin.applyTo(settings);
			$('.productZoomSlider').owlCarousel(settings);

        // Zoom
        $('.zoomable').zoom();
        $("html").on('click', function(){
            $(".zoomableOverlay").fadeOut("slow").removeClass("zoomFlex");
            $("section.product-details .head-cta").css("z-index", "89");
        });
        $(".showZoomable").click(function (e) {
            e.stopPropagation();
            $(".zoomableOverlay").addClass("zoomFlex").fadeIn("slow");
            $("section.product-details .head-cta").css("z-index", "100");
             var owlItemLength = $(".productZoomSlider .owl-item").length;
             var owlSliderImg = $(".proSliderImg").clone(); 
             var pageWidth = $(window).width();  
             if (pageWidth < 768){
                 if (owlItemLength < 2){
                    $(".productZoomSlider .owl-buttons").hide();
                    $(".productZoomSlider .owl-pagination").css("opacity","0");
                }
             } else {
                 setTimeout(function(){
                    if (owlItemLength < 2){
                        $(".owl-page").html(owlSliderImg[0]);
                     $(".productZoomSlider .owl-buttons").hide();
                    }
                }, 500);
             }    
                        
        });
        $(".productZoomSliderWrapper").click(function (e) {
            e.stopPropagation();
        });   

        $(".closeButton").click(function () {
            $(".zoomableOverlay").fadeOut("slow").removeClass("zoomFlex");
            $("section.product-details .head-cta").css("z-index", "89");
        });
    });
</script>

<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>
<script>
import { mapMutations } from 'vuex'
import Index from './index'
import store from '../store/index'
import CommentC from '../src/components/Comment'
  export default {
    name: 'ProductPage',
    components:{
        Index,
        CommentC
    },
    data(){
      return{     
          count:1,
          name:this.$route.params.id,
      }
    },
    computed:{
      product(){
        return this.$store.state.products
      },
      images(){
          return this.$store.state.images
      }
    },
    methods:{
        btnDecrase(){
            if(this.count>1)
            {
                this.count--;
            }
        },
        addProductToCart(product)
        {  
            alert('Ürün Sepetinize Eklendi')
            this.$store.dispatch('addProductToCart',product)
        },
        artir(){
            this.$store.commit('increment')
        },
    }
  }
</script>

<style scoped lang="scss">
@import "../src/css/dynamic-banner.css";
@import "../src/css/dr-custom.css";
@import "../src/css/style.css";
@import "../src/css/basket-page.css";
</style>

<style scoped>
ul{
    position: absolute;
    top: 100px;
    left: 180px;
}
*{
    margin: 0;
    padding: 0;
}
.rate {
   
    height: 40px;
   
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:20px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: gray;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: gray;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: gray;
}
</style>