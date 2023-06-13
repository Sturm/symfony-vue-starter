<template>
  <v-app>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title>App</v-toolbar-title>
        <v-spacer />
        <v-btn
          variant="text"
          icon="mdi-logout"
          @click="logout"
        />
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
      >
        <v-list
          :items="items"
        />
      </v-navigation-drawer>
      <v-main style="height: 500px;">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      {
        title: 'Dashboard',
        value: '/',
      },
    ],
  }),
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
