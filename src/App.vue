<template>
  
  <!-- <div id="app"> -->
    <v-app>
      <router-view></router-view>
  
  </v-app>
</template>
<style scoped>

</style>
  <script>
    export default {
      name: "App",
    
      created() {
        DataTableEventBus.$on("editData", data =>
          console.log(" ")
          // console.log("editing " + data.id)
        );
        DataTableEventBus.$on("viewData", data =>
          console.log(" ")
          // console.log("showing " + data.id)
        );
        DataTableEventBus.$on("deleteData", data =>
          console.log(" ")
          // console.log("deleting " + data.id)
        );
      },
    
      computed: {
        users() {
          return this.$store.state.users;
        },
    
        parameters() {
          return {
            data: this.users,
            actionColumn: true,
            columns: this.keys.map(key => ({ key }))
          };
        }
      },
    
      data() {
        return {
          keys: ["name", "email", "gender", "country", "job", "city", "created_at"]
        };
      }
    };
    </script>
    