<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="white"
      elevation="4"
      scroll-target="#scrolling-techniques-7"
    >
      <v-btn
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-icon>mdi-logout</v-icon>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: true,
    items: [
      {
        title: '献立',
        icon: 'mdi-home',
        link: {name: 'MenuList'},
      },
      {
        title: 'レシピ',
        icon: 'mdi-home',
        link: {name: 'RecipeList'},
      },
      {
        title: '買い物リスト',
        icon: 'mdi-home',
        link: {name: 'ShoppingList'},
      }
    ]
  }),
});
</script>
