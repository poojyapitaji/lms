<template>
  <div>
    <v-container class="my-4">
      <h2 class="mb-1">Payment History</h2>
      <v-divider></v-divider>

      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            Billings
          </div>
          <v-card class="mt-4 pa-0" >
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
            <v-divider></v-divider>
            <div class="py-1 px-3 d-flex justify-space-between align-center">
                <span style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.7rem; font-weight:bold; color:#30396B">Total</span>
                <span style=" font-size:0.9rem; font-weight:bold;">{{totalAmount}}</span>
            </div>
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
          search: '',
          totalAmount:'Rs. 1798',
          headers:[
              {
                  text:'Course',
                  value:'name'
              },
              {
                  text:'Amount',
                  value:'amount'
              },
              {
                  text:'Purchase Date',
                  value:'purchase_date'
              }
          ],
          desserts:[
              {
                  name:'Introduction to Python',
                  amount:'Rs. 1499',
                  purchase_date:'10-02-21'
              },
              {
                  name:'English Spoken',
                  amount:'Rs. 299',
                  purchase_date:'10-12-21'
              }
          ]
      }
  }
};
</script>
