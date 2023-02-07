<template>
  <div class="header flex">
	<img src="../public/logo.png" height="10" width="512" alt="">
	<div class="space-x-10 flex justify-center w-full mr-[30%] items-center ">
		<button class="text-xl font-bold">Shop</button>
		<button class="text-xl font-bold">Sign in / Log in</button>
	</div>
	<button>
		<img src="" alt="">
	</button>

  </div>
  <AuthComponent v-if="page === 'auth'" @changePage="changePage"/>
  <ShopComponent v-else-if="page === 'shop'" @addToCart="addToCart" @changePage="changePage"/>
  <div class="w-full  h-full flex flex-col space-y-4 justify-center" v-else>
	<div class="flex flex-col space-y-4 mt-10 rounded-xl mx-[40%] p-4  justify-center">
		<button class="mb-6 bg-[#ffc72c] p-4 rounded-xl" v-on:click="changePage('shop')">Liste de produit</button>
		<button class="bg-[#ffc72c] p-4 rounded-xl" v-on:click="commander">Commander</button>		
	</div>


    <div v-for="produit in panier" :key="produit">
      <ProduitComponent :produit="produit" :showAAP="false"/>
    </div>

    <span class="error">{{error}}</span>
    <span class="msg">{{msg}}</span>
  </div>
</template>

<script>
import AuthComponent from "./components/AuthComponent";
import ShopComponent from "./components/ShopComponent";
import ProduitComponent from "./components/ProduitComponent";
import {ServiceCommande} from "./assets/js/services/ServiceCommande";

export default {
  name: 'App',
  components: {
    AuthComponent,
    ShopComponent,
    ProduitComponent
  },
  data: () => ({
	page: "shop",
    //page: localStorage.getItem("token") != null ? "shop" : "auth",
    panier: [],
    error: "",
    msg: ""
  }),

  methods: {
    changePage(value) {
      this.page = value;
    },
    commander() {
      ServiceCommande.save(this.panier);
    },
    addToCart(produit) {
      this.panier.push(produit);
    }
  },
}
</script>

<style>

@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  background-color: #808080;
  margin:0;
  padding:0;
  height:100%;
}

.header {
  background-color: #ffc72c;
  padding: 10px;
  text-align: center;
}

.error {
  color: red;
}

.msg {
  color: green;
}
</style>
