<template>
  
  <!-- <div id="app"> -->
    <v-app>
      <router-view></router-view>
  
  </v-app>
</template>
<style scoped>
#app >>> .v-application--wrap {
  -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 100%;
    position: relative;
}
</style>
  <script>
    export default {
      name: "App",
    
      created() {
        DataTableEventBus.$on("editData", data =>
          console.log("editing " + data.id)
        );
        DataTableEventBus.$on("viewData", data =>
          console.log("showing " + data.id)
        );
        DataTableEventBus.$on("deleteData", data =>
          console.log("deleting " + data.id)
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
    