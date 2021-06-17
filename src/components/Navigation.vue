<template>
  <v-card
    height="100%"
    width="256"
    class="mx-auto navagation"
  >
    <v-navigation-drawer>
      <v-list
        dense
        nav
      >
          <v-list-item
            link
            to="/stock"
          >
          <v-list-item-content>
              <v-list-item-title>  Stock </v-list-item-title>
            </v-list-item-content>
          
          </v-list-item>
        <v-list-item
          link
          to="/list"
        >
          <v-list-item-content>
            <v-list-item-title>List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          v-if="$store.state.user"
        >
          <v-list-item-content @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
      return {
      }
  },
    methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style scoped>
.navagation {
  height: 100vh;
  position: absolute;
}
</style>