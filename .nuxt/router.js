import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2185eee0 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3e7ff500 = () => interopDefault(import('..\\pages\\Sectiklerimiz.vue' /* webpackChunkName: "pages/Sectiklerimiz" */))
const _0a2ce1f0 = () => interopDefault(import('..\\pages\\Sepetim.vue' /* webpackChunkName: "pages/Sepetim" */))
const _9acbe876 = () => interopDefault(import('..\\pages\\Customer\\info.vue' /* webpackChunkName: "pages/Customer/info" */))
const _f6ef604c = () => interopDefault(import('..\\pages\\Customer\\Register.vue' /* webpackChunkName: "pages/Customer/Register" */))
const _57de4bc9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _ae22a71e = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _2185eee0,
    name: "login"
  }, {
    path: "/Sectiklerimiz",
    component: _3e7ff500,
    name: "Sectiklerimiz"
  }, {
    path: "/Sepetim",
    component: _0a2ce1f0,
    name: "Sepetim"
  }, {
    path: "/Customer/info",
    component: _9acbe876,
    name: "Customer-info"
  }, {
    path: "/Customer/Register",
    component: _f6ef604c,
    name: "Customer-Register"
  }, {
    path: "/",
    component: _57de4bc9,
    name: "index"
  }, {
    path: "/:id",
    component: _ae22a71e,
    name: "id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
