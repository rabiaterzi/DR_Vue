<template>
<div class="header-new">
    <div class="head-menu">
        <div class="head-cart active">  
            <div v-if="quantitytotal==0" style="text-align: center;">
                Sepetinizde ürün bulunmamaktadır.
            </div>        
       <div>    
     <ul >
         <li v-for="product in basketproducts" v-bind:key="product" >
             <figure class="foto">
                 <a href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">
                    <img :src="product.img" style="height:85px" alt="Son Cüret"></a>
             </figure>
             <div class="detail">
                 <p class="product-name"><a title="Son Cüret" href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">{{product.name}}</a></p>
                 <p class="product-type"><a title="Son Cüret" href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001">Medya Tipi: {{product.kapak}} / {{product.quantity}} ADET</a></p>
                 <p class="product-price"><a title="Son Cüret" href="/Kitap/Son-Curet/Yilmaz-Ozdil/Arastirma-Tarih/Politika-Arastirma/Turkiye-Politika-/urunno=0001889645001" style="color:black">{{product.price*product.quantity}} TL</a></p>
             </div>
         </li>
     </ul>
     <div class="sum">
         <p class="sum-detail">TOPLAM {{quantitytotal}} ÜRÜN</p>
         <span class="sum-price"> TL</span><div>{{basketitems}} {{name}}</div>                
     </div>
     </div> 
        <nuxt-link to="/Sepetim"><input class="btn red buton" value="SEPETE GİT" type="button"></nuxt-link>
</div>
    </div>
    
    
</div>
    
</template>

<script>
import store from '../../store/index'
  export default {
    name: 'BasketProduct',
    data(){
        return{
            basketproducts:[],
            basketproductss:[],
            total:25.42,
            quantitytotal:1,
            name:''
        }
    },
    computed:{
        /*basketproducts(){
            return this.$store.getters.cartProducts
        },*/
        /*total(){
            return this.$store.getters.cartTotal
        },
        quantitytotal(){
            return this.$store.getters.totalQuantity
        },*/
        authUser(){     
          return this.$store.getters.takeuser
       },
       basketitems(){
          this.basketproducts=[{name:'deneme ad',quantity:1,price:14.25,img:'denemeimg'}] 
           if(this.authUser){
               this.$fire.database.ref('/users/'+this.authUser.uid+'/basketitems/1/name').on('value',(snapshot)=>{      
                this.name=snapshot.val()
            })
            this.$fire.database.ref('/users/'+this.authUser.uid+'/basketitems').on('value',(snapshot)=>{      
                this.basketproductss=snapshot.val()
            })
            if(this.basketproductss){
              this.basketproducts=this.basketproductss
            }
            else{
              this.basketproducts=[{name:'deneme ad',quantity:1,price:14.25,img:'denemeimg'}]
            }
           }  
       }
    }
  }
</script>

<style scoped lang="scss">
@import "../css/dynamic-banner.css";
@import "../css/dr-custom.css";
@import "../css/style.css";
.header-new{
    background-color: white;
}
.head-cart{
    border: 1px solid;
    border-radius: 2px;
}
.foto{
    float: left;
    margin-left: 10px;
    margin-top: 11px;
    margin-right: 10px;
}
li{
    height: 110px;
    border: solid 1px lightgrey;
    
}
.detail{
    margin-top: 15px;
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
    margin-top: 10px;
}

.sum-detail
{
    font-size: 10px;
    color: gray;
    margin-top: 5px;
}
.sum-price{
    font-size: 20px;
}
.product-type{
    font-size: 11px;
    font-weight: bold;
}
hr{
    margin-left: 120px;
}
</style>