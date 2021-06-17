<template >
  <v-container
  >
    <v-card
      class="mx-auto"
      width="100%"
      height="100vh"
    >

      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="item in stock"
            :key="item.id"
            cols="4"
          >
            <v-card>
              <v-img
                :src="item.imageUrl"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="auto"
              >
                <v-card-title >
                  <b>ID </b> : {{item.id}} &nbsp; <b>Name</b> : {{item.name}}
                </v-card-title>
              </v-img>

              <v-card-actions align="center">
                <v-spacer></v-spacer>
                
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'List',
  data: () => ({
    stock: []
  }),
  created () {
    if(!this.$store.state.user){
      this.$router.push({ name: 'login' })
    }
    this.stock = this.$store.state.stock?this.$store.state.stock:[];
  },
}
</script>