<template>
    <div>
        <Navbar class="navbar"/> 
        <nuxt/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
    .navbar{
        margin: 0;
        width: 100%;
    }
    
</style>