import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyD0c9a38G_8L7k09tqHmrmU2Hk_CeUBhEQ","authDomain":"dr-firebase-9de85.firebaseapp.com","projectId":"dr-firebase-9de85","storageBucket":"dr-firebase-9de85.appspot.com","messagingSenderId":"602632802158","appId":"1:602632802158:web:f59e6d568054f7f743fb7f"}

export default async (ctx, inject) => {
  /****************************************
  **************** LAZY MODE **************
  ****************************************/

  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}
