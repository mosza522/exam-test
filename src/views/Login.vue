<template>
  <v-app id="inspire">
      <v-content>
        <v-form @submit.prevent="submitForm">
          <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                          <v-toolbar-title>Login form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                          <v-text-field
                            name="login"
                            label="Login"
                            type="text"
                            v-model="user"
                          ></v-text-field>
                          <v-text-field
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            v-model="password"
                            placeholder="password is 12341234"
                          ></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn type="submit" color="primary">Login</v-btn>
                      </v-card-actions>
                    </v-card>
                </v-flex>
              </v-layout>
          </v-container>
         </v-form>
      </v-content>
   </v-app>
</template>

<script>


export default {
  name: 'Login',
  components: {
    
  },
  data() {
    return {
      user: null,
      password: null
    }
  },
  created(){
    if(this.$store.state.user){
      this.$router.push({ name: 'welcome' })
    }
  },
  methods: {
    submitForm(){
      if(this.password == '12341234'){
        this.$store.dispatch('saveUser',this.user)
        this.$router.push({ name: 'welcome' })
      }
      
    }
  },
}
</script>

