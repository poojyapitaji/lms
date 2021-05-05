<template>
  <div>
    <v-card flat>
      <v-container>
        <div class="d-flex justify-space-between align-center">
          <v-btn text plain to="/inovice">
            <v-icon>mdi-arrow-left</v-icon>
            <span class="ml-4">Back to inovices</span>
          </v-btn>
          <v-btn color="primary" class="ma-2 white--text" x-small elevation="0">
            Print
            <v-icon right dark>
              mdi-printer
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-card>
      <v-card color="#5567FF" flat plain style="border-radius:0">
        <v-container>
          <v-row class="py-6">
            <v-col cols="12" md="4">
              <span style=" font-size:0.95rem; font-weight:bold; color:#CCCBFF"
                >Prepared for</span
              >
              <h1 class="white--text font-weight-regular mb-4">
                Shubham Singh
              </h1>
              <span style=" font-size:0.95rem;  color:#CCCBFF;"
                >521/13 Avash Vikas Colony, <br />
                Gonda</span
              >
            </v-col>
            <v-col cols="12" md="4">
              <span style=" font-size:0.95rem; font-weight:bold; color:#CCCBFF"
                >Prepared by</span
              >
              <h1 class="white--text font-weight-regular mb-4">
                VueJs-LMS Inc.
              </h1>
              <span style=" font-size:0.95rem;  color:#CCCBFF;"
                >32 Noah Cliffs Suite 626, Romania <br />
                Tax ID RO18880609</span
              >
            </v-col>
            <v-col cols="12" md="4">
              <div class=" text-left text-md-right float-left float-md-right">
                <span style=" font-size:0.8rem; font-weight:bold; color:#CCCBFF"
                  >Inovice</span
                >
                <br />
                <img
                  src="../../assets/logo.png"
                  style="max-width:70px;max-height:70px"
                />
                <br />
                <span style=" font-size:0.8rem;  color:#CCCBFF">15-Mar-21</span>
                <br />
                <span style=" font-size:0.8rem;  color:#CCCBFF"
                  >10310378686</span
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  </div>
</template>

<script>
export default {};
</script>
