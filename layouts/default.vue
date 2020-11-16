<template>
    <div>
        <Navbar class="navbar"/>
        <nuxt/>
    </div>
</template>

<script>
import Navbar from '../src/components/Navbar';

export default {
  components: {
    Navbar,

  },
};
</script>

<style>
    .navbar{
        margin: 0;
        width: 100%;
    }
</style>