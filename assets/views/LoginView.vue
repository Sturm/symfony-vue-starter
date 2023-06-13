<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Please Log In</v-card-title>
          <v-card-text>
            <v-form v-model="form.valid">
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="form.user.username"
                    :rules="form.emailRules"
                    label="E-mail"
                    type="email"
                    required
                    autofocus
                  />
                  <v-text-field
                    v-model="form.user.password"
                    label="Password"
                    type="password"
                    required
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              elevation="1"
              @click="submit"
            >
              Submit
            </v-btn>
          </v-card-actions>
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
