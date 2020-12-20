export default {
  head:{
    plugins: [{ src: './plugins/vuetify.js' }]
  },
  modules:[
    [
      '@nuxtjs/firebase',
      {
        config:{
          apiKey: "AIzaSyD0c9a38G_8L7k09tqHmrmU2Hk_CeUBhEQ",
    authDomain: "dr-firebase-9de85.firebaseapp.com",
    projectId: "dr-firebase-9de85",
    storageBucket: "dr-firebase-9de85.appspot.com",
    messagingSenderId: "602632802158",
    appId: "1:602632802158:web:f59e6d568054f7f743fb7f"
        },
        services:{
          auth:true
        }
      }
    ]
  ],
  database: {
    emulatorPort: 9000,
    emulatorHost: 'localhost',
  }
}

module.exports={
  plugins:[
    './plugins/firebase.js'
  ],
  
  
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