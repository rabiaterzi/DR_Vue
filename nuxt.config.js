export default {
  head:{
    plugins: [{ src: './plugins/vuetify.js' }]
  }
}


/*module.exports={
  plugins:['./plugins/vue-carousel.js'],
  build:{
    transpile:['vue-carousel']
  }
}*/
/*
export default {
  head: {
    title: 'DR-Vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  plugins:['./plugins/vue-carousel.js'],
  build:{
    transpile:['vue-carousel']
  }
  
    plugins: [
      // ssr: false to only include it on client-side
      { src: './plugins/vue-carousel.js'}
    ]
  }*/