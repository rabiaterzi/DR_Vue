<template>
    <v-main> 
      <Navbar/>
      <Slider/>
      <LoginPage/>
      <br/><br/><br/><br/>
      <Categories/>
      <br/><br/><br/><br/>
      <BasketProduct/>
      <br/><br/><br/><br/>
      
      <br/><br/><br/><br/>
      <BasketPage/>
      <br/><br/><br/><br/>
      <SProduct/>
      <br/><br/><br/><br/>
      <CommentPage/>
      <br/><br/><br/><br/>
      <RankingBar/>
      <nuxt/>
      <nuxt-link to="/LoginPage">
        Login Page
      </nuxt-link>
      <div>
        <div>
          <router-link to="/ornek">Örnek</router-link>
        </div>
        <router-view/>
      </div>
    </v-main>
</template>

<script>
import Navbar from './components/Navbar';
import LoginPage from './components/Login';
import Categories from './components/Categories';
import BasketProduct from './components/BasketProduct';
//import ProductPage from './components/ProductPage';
import BasketPage from './components/Basket';
import Slider from './components/Slider';
import SProduct from './components/SProduct';
import CommentPage from './components/Comments/Comment';
import RankingBar from './components/RankingBar';

export default {
  name: 'App',

  components: {
    Navbar,
    LoginPage,
    Categories,
    BasketProduct,
    //ProductPage,
    BasketPage,
    SProduct,
    CommentPage,
    Slider,
    RankingBar,
    
  },

  data: () => ({
    //
  }),
};
</script>
