<template>
<div class="header-new">
    <div class="head-menu"><div>{{basketitems}}</div>
        <div class="head-cart active">  
            <div v-if="denemequan==0" style="text-align: center;">
                Sepetinizde ürün bulunmamaktadır.
            </div>        
       <div v-else>    
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
         <p class="sum-detail">TOPLAM {{denemequan}} ÜRÜN</p>
         <span class="sum-price"> TL</span>                
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
            totalquan:0,
            denemequan:0,
            totalquantityy:0
        }
    },
    computed:{
        /*basketproducts(){
            return this.$store.getters.cartProducts
        },*/
        /*total(){
            return this.$store.getters.cartTotal
        },*/
        quantitytotal(){
            var quantotal=0
            //return this.$store.getters.totalQuantity
            if(this.authUser && this.basketproducts){                      
                //alert(this.basketitemss[0].quantity)
                //alert(this.basketproducts[0].quantity)
                //alert(this.basketproducts[i].quantity)
                for(var i=0;i<this.denemequan;i++){
                    this.totalquantity += this.basketproducts[i].quantity
                }
                /*this.basketproducts.forEach(function (product){
                    quantotal+=product.quantity
                })*/
                //return this.basketproducts.reduce((total,product)=>total+product.quantity,0)
                
                return quantotal
            }
            else{return quantotal}
        },
        authUser(){     
          return this.$store.getters.takeuser
       },
       basketitems(){ 
           
           if(this.authUser){
            this.$fire.database.ref('/users/'+this.authUser.uid+'/basketitems').on('value',(snapshot)=>{      
                this.basketproductss=snapshot.val()
                this.denemequan=Object.keys(this.basketproductss).length
                if(this.denemequan>0){
                    snapshot.forEach(function (element){
                        var key = element.key
                        this.totalquantityy+=key.quantity
                    });
                } 
                //this.denemequan=snapshot.numChildren()
            })
            if(this.basketproductss){
              this.basketproducts=this.basketproductss
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