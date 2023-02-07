<template>
  <div class="flex flex-col justify-center items-center space-y-4">
    <input class="rounded-2xl text-center" type="email" v-model="this.email" placeholder="email">
    <input class="rounded-2xl text-center" type="password" v-model="this.password" placeholder="password">
    <button type="button" v-on:click="login">Connecter</button>
    <button type="button" v-on:click="register">S'enregistrer</button>
  </div>

    <span class="error">{{ error }}</span>
</template>

<script>

import {ServiceUtilisateur} from "../../src/assets/js/services/ServiceUtilisateurs.js";

export default {
  name: "AuthComponent",

  data: () => ({
    email: "",
    password: "",
    error: ""
  }),

  methods: {
    async register() {
      if(this.email.trim() !== "" && this.password.trim() !== "") {
        ServiceUtilisateur.register(this.email, this.password)
            .then(async (response) => {
              const result = await response.json();
              if(response.status === 200) {
                localStorage.setItem("token", result.message)
                this.$emit("changePage", "shop");
              } else {
                this.error = result.message;
              }
            });
      }
    },
    async login() {
      if(this.email.trim() !== "" && this.password.trim() !== "") {
        ServiceUtilisateur.login(this.email, this.password)
            .then(async (response) => {
              const result = await response.json();
              if(response.status === 200) {
                localStorage.setItem("token", result.message)
                this.$emit("changePage", "shop");
              } else {
                this.error = result.message;
              }
            });
        }
    }
  }
}
</script>

<style scoped>
div{
  margin-top: 20em;
  justify-content: space-between;
}

button {
  width: 180px;
    font-size: 12px;
    padding: 12px 0;
    background: linear-gradient(45deg, #565565, #618168);
    border: 0;
    border-radius: 20px;
    outline: none;
    margin-top: 30px;
}
</style>