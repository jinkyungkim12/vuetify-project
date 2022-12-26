<template>
    <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
      
    <v-navigation-drawer 
      app
      :src="require('@/assets/sidebar.jpg')"
      dark
    >
      <template
        v-slot:img="props"

      >
        <v-img
          :gradient="gradient"
          v-bind="props"
        >

        </v-img>
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="error darken-2"
          class="py-1"
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

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
export default {
    name: 'DefaultLayout',
    data: () => ({
    gradient: 'rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)',
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
      { title: 'grid', icon: 'mdi-help-box', to: '/grid' },
      { title: 'breakpoints', icon: 'mdi-help-box', to: '/prac_breakPoint' },
      { title: 'table', icon: 'mdi-help-box', to: '/pracTable' },
      { title: 'Sign In', icon: 'mdi-account-badge-outline', to: '/member/sign-in' },
      { title: 'Sign Up', icon: 'mdi-account-plus-outline', to: '/member/sign-up' },
      { title: 'Product List', icon: 'mdi-alpha-p', to: '/page/productList' },
      { title: 'test', icon: 'mdi-archive', to: '/test' },
      { title: 'test2', icon: 'mdi-archive', to: '/test2' },
      { title: 'test3', icon: 'mdi-archive', to: '/test3' },
    ],
  }),
}
</script>
<style scoped>
    
</style>