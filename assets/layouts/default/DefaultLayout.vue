<template>
  <v-app>
    <v-overlay
      :model-value="overlay"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      />
    </v-overlay>
    <v-layout v-if="overlay === false">
      <v-app-bar
        color="primary"
        prominent
        density="compact"
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
        permanent
        absolute
        app
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            :title="user.email"
            subtitle="Regular User"
          />
        </v-list>
        <v-divider />
        <v-list
          :lines="false"
          density="compact"
          nav
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            exact
            color="primary"
            link
            :to="item.path"
          >
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>

            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 500px;">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { useUserStore } from '../../store/user';

export default {
  data: () => ({
    overlay: true,
    drawer: true,
    items: [
      {
        title: 'Dashboard',
        path: '/',
        icon: 'mdi-view-dashboard',
      },
      {
        title: 'List',
        path: '/list',
        icon: 'mdi-format-list-bulleted',
      },
    ],
  }),
  computed: {
    user() {
      const userStore = useUserStore();
      return userStore.getUser;
    },
  },
  async mounted() {
    const userStore = useUserStore();
    await userStore.fetchUser();
    this.overlay = false;
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
