<template>
    <v-main> 
      <Navbar/>
      <LoginPage/>
      <Categories/>
      <BasketProduct/>
      <ProductPage/>
      <BasketPage/>
      <SProduct/>
      <CommentPage/>
      <br/>
      <br/>
      <br/>
      <br/>
      <RankingBar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Slider/>
      
    </v-main>
</template>

<script>
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Categories from './components/Categories';
import BasketProduct from './components/BasketProduct';
import ProductPage from './components/ProductPage';
import BasketPage from './components/BasketPage';
import Slider from './components/Slider';
import SProduct from './components/SimilarProduct/SProduct';
import CommentPage from './components/Comments/Comment';
import RankingBar from './components/RankingBar';

export default {
  name: 'App',

  components: {
    Navbar,
    LoginPage,
    Categories,
    BasketProduct,
    ProductPage,
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
