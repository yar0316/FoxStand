import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import MenuList from '@/views/MenuManagement/MenuList.vue'
import MenuAdd from '@/views/MenuManagement/MenuAdd.vue'
import RecipeAdd from '@/views/Recipe/RecipeAdd.vue'
import RecipeList from '@/views/Recipe/RecipeList.vue'
import ShoppingList from '@/views/Shopping/ShoppingList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: MenuList
  },
  {
    path: '/menuAdd',
    name: 'MenuAdd',
    component: MenuAdd
  },
  {
    path: '/recipeadd',
    name: 'RecipeAdd',
    component: RecipeAdd
  },
  {
    path: '/recipelist',
    name: 'RecipeList',
    component: RecipeList
  },
  {
    path: '/shoppinglist',
    name: 'ShoppingList',
    component: ShoppingList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
