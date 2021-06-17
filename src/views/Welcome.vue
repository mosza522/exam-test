<template>
  <v-container>
    <div>
      <h1>Welcome user {{$store.state.user}}.</h1>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'Welcome',
  created(){
    if(!this.$store.state.user){
      this.$router.push({ name: 'login' })
    }
  },
}
</script>
<style>
  
</style>