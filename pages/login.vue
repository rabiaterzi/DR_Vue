<template>
    <div>
        <Login/>   
        <Hesabim/>     
    </div> 
</template>

<script>
import Login from '../src/components/Login';
import Hesabim from '../src/components/Hesabim'

export default {
  components: {
    Login,
    Hesabim
  },
};
</script>