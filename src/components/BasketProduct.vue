<template>
<div class="header-new">
    <div class="head-menu">
        <div class="head-cart active">  
     <ul>
         <li>
             <figure class="foto">
                 <a href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">
                    <img src="https://i.dr.com.tr/cache/100x100-0/originals/0001889645001-1.jpg" alt="Son Cüret"></a>
             </figure>
             <div class="detail">
                 <p class="product-name"><a title="Son Cüret" href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">Son Cüret</a></p>
                 <p class="product-type"><a title="Son Cüret" href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">Medya Tipi: İnce Kapak / 1 ADET</a></p>
                 <p class="product-price"><a title="Son Cüret" href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">25,20 TL</a></p>
             </div>
         </li>
     </ul>
     <div class="sum">
         <p class="sum-detail">TOPLAM 1 ÜRÜN</p>
         <hr style="width:25px">
         <p class="sum-price">25,20 TL</p>                  
     </div>
        <input class="btn red buton" value="SEPETE GİT" type="button" onclick="window.location.href = '/Sepetim';">
</div>
    </div>
</div>
    
</template>

<script>
  export default {
    name: 'BasketProduct'
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
.head-cart{
    border: 1px solid;
    border-radius: 2px;
}
.foto{
    float: left;
    margin-left: 10px;
    margin-top: 4px;
}
li{
    height: 110px;
    border: solid 1px lightgrey;
    
}
.detail{
    margin: 10px;
}
.sum{
    text-align: center;
    align-content: center;
}
.head-cart{
    width: 320px;
    padding: 20px;
}
.buton{
    width: 275px;
    align-content: center;
}

.sum-detail
{
    font-size: 10px;
    color: gray;
    margin-top: 2px;
}
.sum-price{
    font-size: 20px;
}
.product-type{
    font-size: 11px;
}
.product-price{
color: black;
}
</style>