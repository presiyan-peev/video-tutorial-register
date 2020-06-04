<template>
  <div class="loginComponent">
    <v-row>
      <v-col cols="0" sm="3" md="3"></v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card class="px-4" flat>
          <v-card-text>
            <v-form ref="loginForm" v-model="valid" lazy-validation>
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
              </v-row>
              <v-row>
                <v-col class="d-flex mr-auto" cols="6" sm="3" xsm="3">
                  <v-btn
                    x-large
                    block
                    depressed
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                  >Login</v-btn>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  // https://www.codeply.com/p/hBkZaWgmnk
  name: "loginComponent",
  computed: {
    ...mapGetters([
        'isUserIn',
        'getAllUsers',
        'getAllUsernames'
    ]),
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    ...mapActions(['logIn', 'fetchAllUsers']),

    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
        if(this.getAllUsernames.includes(this.userName)) {
          if(this.password === this.getAllUsers.find(x => x.username === this.userName).password) {
            this.logIn(this.getAllUsers.find(x => x.username === this.userName))
          } else {
            alert ("Wrong password")
          }
        } else {
          alert("Wrong Username")
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  watch: {
    isUserIn() {
      this.$router.push('/')
    }
  },

created() {
    this.fetchAllUsers()
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
