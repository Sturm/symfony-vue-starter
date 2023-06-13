<template>
  <v-container
    class="d-flex align-center login-container"
  >
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-card-title>Sign In</v-card-title>
          <v-card-text>
            <v-form v-model="form.valid">
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="form.user.username"
                    :rules="form.emailRules"
                    class="mb-4"
                    label="E-mail"
                    type="email"
                    required
                    autofocus
                  />
                  <v-text-field
                    v-model="form.user.password"
                    class="mb-4"
                    label="Password"
                    type="password"
                    required
                  />
                  <v-btn
                    elevation="1"
                    @click="submit"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    form: {
      valid: false,
      user: {
        username: '',
        password: '',
      },
      emailRules: [
        (value) => {
          if (value) return true;

          return 'E-mail is required.';
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return 'E-mail must be valid.';
        },
      ],
    },
  }),
  methods: {
    async submit() {
      if (this.form.valid === false) {
        return;
      }
      const { data } = await this.axios.post('/api/login', this.form.user);
      localStorage.setItem('token', data.token);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  max-width: 400px;
}
</style>
