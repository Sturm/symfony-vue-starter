<template>
  <v-container
    class="d-flex align-center login-container"
  >
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-card-title>Sign In</v-card-title>
          <v-card-text>
            <v-form
              v-model="form.valid"
              @keyup.enter="submit"
            >
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
                    :rules="form.passwordRules"
                    class="mb-3"
                    label="Password"
                    :type="showPasswordType"
                    required
                    append-inner-icon="mdi-eye"
                    @click:append-inner="toggleShowPassword"
                  />
                  <v-alert
                    v-if="form.error"
                    class="mb-6"
                    text="Wrong email or password"
                    type="error"
                  />
                  <v-btn
                    :loading="form.loading"
                    color="primary"
                    class="mt-1"
                    prepend-icon="mdi-check"
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
      error: false,
      valid: false,
      loading: false,
      showPassword: false,
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
      passwordRules: [
        (value) => {
          if (value.length > 3) return true;
          return 'Password must be longer than 3 characters';
        },
      ],
    },
  }),
  computed: {
    showPasswordType() {
      return this.form.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    toggleShowPassword() {
      this.form.showPassword = !this.form.showPassword;
    },
    async submit() {
      if (this.form.valid === false) {
        return;
      }
      this.form.loading = true;
      try {
        const { data } = await this.axios.post('/api/login', this.form.user);
        localStorage.setItem('token', data.token);
        this.$router.push('/');
      } catch {
        this.form.error = true;
      } finally {
        this.form.loading = false;
      }
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
