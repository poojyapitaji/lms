<template>
  <v-card elevation="0"  color="white">
    <v-container>
      <v-row
        class="d-flex justify-sm-start justify-md-space-between flex-sm-column flex-md-row "
      >
        <div class="d-flex align-center mt-3 mb-3" >
          <v-avatar color="#5567FF" height="65" width="65">
            <v-icon dark>
              mdi-check
            </v-icon>
          </v-avatar>
          <div class="ml-4" style="max-width:300px">
            <b>Genuine Courses</b> <br />
            <span style="font-size:0.9rem"
              >Explore a wide range of skills.</span
            >
          </div>
        </div>

        <div class="d-flex align-center mt-3 mb-3">
          <v-avatar color="#5567FF" height="65" width="65">
            <v-icon dark>
              mdi-shield-star
            </v-icon>
          </v-avatar>
          <div class="ml-4" style="max-width:300px">
            <b>By Industry Experts</b> <br />
            <span style="font-size:0.9rem"
              >Professional development from the best people.</span
            >
          </div>
        </div>

        <div class="d-flex align-center mt-3 mb-3" >
          <v-avatar color="#5567FF" height="65" width="65">
            <v-icon dark>
              mdi-file-certificate
            </v-icon>
          </v-avatar>
          <div class="ml-4" style="max-width:300px">
            <b>Certification</b> <br />
            <span style="font-size:0.9rem"
              >All courses contains complition certificate.</span
            >
          </div>
        </div>
      </v-row>
    </v-container>
    <v-divider></v-divider>
  </v-card>
</template>
<script>
export default {};
</script>
