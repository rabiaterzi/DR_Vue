<template>
    <div>
        <Basket/>
        <SProduct/>
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
};
</script>