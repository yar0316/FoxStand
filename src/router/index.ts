import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/menulist'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/menulist',
    name: 'MenuList',
    component: () => import(/* webpackChunkName: "menulist" */ '../views/MenuManagement/MenuList.vue')
  },
  {
    path: '/menuadd',
    name: 'MenuAdd',
    component: () => import(/* webpackChunkName: "menuadd" */ '../views/MenuManagement/MenuAdd.vue')
  },
  {
    path: '/recipeadd',
    name: 'RecipeAdd',
    component: () => import(/* webpackChunkName: "recipeadd" */ '../views/Recipe/RecipeAdd.vue')
  },
  {
    path: '/recipelist',
    name: 'RecipeList',
    component: () => import(/* webpackChunkName: "recipelist" */ '../views/Recipe/RecipeList.vue')
  },
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    component: () => import(/* webpackChunkName: "ShoppingList" */ '../views/Shopping/ShoppingList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
