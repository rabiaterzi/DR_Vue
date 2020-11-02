<template>
    <div>
        <div class="subHeader blackColor">
            <h2 class="text-center d-block"> İlginizi &#199;ekebilecek &#220;r&#252;nler...  <span class="tooltipBtn right" data-tooltip="Tek tıkla sepetinize taşıyabileceğiniz ürünler..."></span> </h2>
        </div>
        <OneProduct/>
    </div>
</template>

<script>
import OneProduct from "./Products";
  export default {
    name: 'SProduct',
   components:{
       OneProduct,
   }
  }
</script>