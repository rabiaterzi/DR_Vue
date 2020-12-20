<template>
    <div>
        <Navbar class="navbar"/> 
        <nuxt/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
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
    *{
      margin: 0;
      padding: 0;
    }
</style>