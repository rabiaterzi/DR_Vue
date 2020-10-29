<template>
    <v-main> 
      <Navbar/>
      <LoginPage/>
      <Categories/>
    </v-main>
</template>

<script>
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Categories from './components/Categories';

export default {
  name: 'App',

  components: {
    Navbar,
    LoginPage,
    Categories,
  },

  data: () => ({
    //
  }),
};
</script>
