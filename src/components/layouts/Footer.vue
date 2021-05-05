<template>
<div>
  <v-divider></v-divider>
  <v-footer  padless color="white">
    <v-container>
    <v-card flat tile class="pa-6">
      <v-row>
        <v-col cols="12" md="7">
          <v-card-text  class="font-weight-light" style="font-size:0.9rem;">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
            accumsan id ultrices nunc. Sed at orci sed massa consectetur
            dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
        </v-col>
        <v-col cols="12" md="5">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>

      
    </v-card>
    <v-divider></v-divider>
      <v-card-text class="black--text d-flex justify-center">
        {{ new Date().getFullYear() }} — <strong>elearnign.msitm.edu.in</strong>
      </v-card-text>
    </v-container>
  </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
