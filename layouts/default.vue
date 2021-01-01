<template>
    <div>
        <Navbar class="navbar"/> 
        <nuxt/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
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
  created(){
        this.$fire.auth.onAuthStateChanged(user=>{
            //this.authUser=user
            this.$store.dispatch('takeUser',user)
            })
    }
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