<template>
  <div class="RegisterComponent">
    <v-row>
      <v-col cols="0" sm="3" md="3"></v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card class="px-4" flat>
          <v-card-text>
            <v-form ref="registerForm" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="7" md="7">
                  <v-text-field
                    v-model="userName"
                    :rules="[rules.required]"
                    label="Username"
                    maxlength="20"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="7" md="7">
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="7" md="7">
                  <v-text-field
                    block
                    v-model="verify"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, passwordMatch]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Confirm Password"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex mr-auto" cols="6" sm="3" xsm="3">
                  <v-btn
                    x-large
                    block
                    depressed
                    :disabled="!valid"
                    color="success lighten-1"
                    @click="validate"
                  >Register</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="0" sm="3" md="3"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // https://www.codeply.com/p/hBkZaWgmnk
  name: "RegisterComponent",
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    valid: true,

    userName: "",
    password: "",
    verify: "",
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
};
</script>
