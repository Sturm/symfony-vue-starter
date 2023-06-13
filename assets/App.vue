<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchUser');
  },
};
</script>
