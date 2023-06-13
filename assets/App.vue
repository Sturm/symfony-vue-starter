<template>
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
  <router-view v-if="overlay === false" />
</template>

<script>
export default {
  data: () => ({
    overlay: true,
  }),
  async mounted() {
    await this.$store.dispatch('fetchUser');
    this.overlay = false;
  },
};
</script>
