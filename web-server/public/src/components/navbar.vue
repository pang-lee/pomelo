<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">PangTube</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to='/live'>Live</b-nav-item>
            <b-nav-item>{{test}}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

             <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click.prevent="signout()">Sign Out</b-dropdown-item>
              <router-link tag="div" to="/login">Login</router-link>
            </b-nav-item-dropdown>
            
            <!-- <b-nav-item-dropdown right v-if="auth">
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-navbar-nav v-else>
              <b-nav-item to="/login">Login</b-nav-item>
            </b-navbar-nav> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
const { mapState, mapGetters } = require('vuex')

module.exports = {
  name: 'navbar',
  data(){
    return{
      auth:false,
    }
  },
  computed: {
    ...mapState({ test: 'books' })
  },
  methods: {
    async signout(){
      await firebase.auth().signOut()
    }
  },
  beforeCreate() {
    // `1` is the ID of the book we want to fetch.
    // this.$store.dispatch('fetchBook', 1);
    this.$store.dispatch('fetchBookList');
  },
}
</script>

<style></style>