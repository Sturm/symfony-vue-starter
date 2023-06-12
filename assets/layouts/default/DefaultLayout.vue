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
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer />
        <v-btn
          variant="text"
          icon="mdi-magnify"
        />

        <v-btn
          variant="text"
          icon="mdi-filter"
        />

        <v-btn
          variant="text"
          icon="mdi-dots-vertical"
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
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
