<template>
  <span>
    <v-toolbar app color>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
      </router-link>

      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn color="primary" to="/Login">Login</v-btn>
        <v-btn color="primary" to="/SignUp">Create Account</v-btn>
      </div>
      <div v-else>
        <v-btn color="primary" @click="logout">Logout</v-btn>
        <v-btn color="primary" to="/OrderPage">Coffees</v-btn>
        <v-btn color="primary" to="/Cart">Cart</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Coffee Zombies",
      drawer: false,
      items: [{ title: "Menu" }, { title: "Sign In" }, { title: "Join" }]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    ...mapGetters(["getProductsInCart", "getPopupCart"])
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    },
    ...mapActions(["showOrHiddenPopupCart"]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    }
  }
};
</script>

<style>
</style>