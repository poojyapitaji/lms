<template>
  <div>
    <v-container class="my-4">
      <h2 class="mb-1">Inovices</h2>
      <v-divider></v-divider>

      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            Paid Inovices
          </div>
          <v-card class="mt-4 pa-0" >           
            <v-data-table
              :headers="headers"
              :items="desserts"
            >
            <template v-slot:item.action="">
                    <v-btn color="primary" elevation="0" x-small to="/inovice/generate/">Generate</v-btn>     
                </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {
  },
  data(){
      return{
          headers:[
              {
                  text:'Course',
                  value:'name'
              },
              {
                  text:'Purchase Date',
                  value:'purchase_date'
              },
              {
                  text:'Action',
                  value:'action'
              }
          ],
          desserts:[
              {
                  name:'Introduction to Python',
                  purchase_date:'10-02-21'
              },
              {
                  name:'English Spoken',
                  purchase_date:'10-12-21'
              }
          ]
      }
  }
};
</script>
