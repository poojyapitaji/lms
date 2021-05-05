<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <div class="d-flex flex-column align-center justify-center mt-3" >
        <v-img
          src="../../assets/logo.png"
          max-height="70"
          max-width="70"
        ></v-img>
      </div>

      <div class="pa-3">
        <v-text-field
          placeholder="Search"
          append-icon="mdi-magnify"
          solo
        ></v-text-field>
      </div>

      <div style="margin-top:-20px">
        <v-list dense nav class="pa-0">
          <v-list-item-group>
            <v-list-item class="px-0" :to="{path:'/'}">
              <v-list-item-icon>
                <v-icon>
                  mdi-home
                </v-icon>
              </v-list-item-icon>
              <span
                style="font-size:1rem;margin-left:-20px"
                >Home</span
              >
            </v-list-item>

            <v-list-item class="px-0" :to="{path:'/courses'}">
              <v-list-item-icon color="white" >
                <v-icon>
                  mdi-book-open-variant
                </v-icon>
              </v-list-item-icon>
              <span
                style="font-size:1rem;margin-left:-20px"
                >Courses</span
              >
            </v-list-item>

            <v-list-item class="px-0">
              <v-list-item-icon>
                <v-icon>
                  mdi-certificate
                </v-icon>
              </v-list-item-icon>
              <span
                style="font-size:1rem;margin-left:-20px"
                >Certificates</span
              >
            </v-list-item>

            <v-list-item class="px-0" :to="{path:'/profile'}">
              <v-list-item-icon>
                <v-icon>
                  mdi-account-circle
                </v-icon>
              </v-list-item-icon>
              <span
                style="font-size:1rem;margin-left:-20px"
                >My Profile</span
              >
            </v-list-item>

            <v-list-item class="px-0" :to="{path:'/paymentHistory'}">
              <v-list-item-icon>
                <v-icon>
                  mdi-currency-inr
                </v-icon>
              </v-list-item-icon>
              <span
                style="font-size:1rem;margin-left:-20px"
                >Payments History</span
              >
            </v-list-item>

            <v-list-item class="px-0" :to="{path:'/inovice'}">
              <v-list-item-icon>
                <v-icon>
                  mdi-file-chart
                </v-icon>
              </v-list-item-icon>
              <span
                style="font-size:1rem;margin-left:-20px"
                >Inovice</span
              >
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar app color="#5567FF">
      <v-app-bar-nav-icon
        style="color:white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="color:white" class="d-flex align-center">
        <v-img
          src="../../assets/logo.png"
          max-height="40"
          max-width="40"
        ></v-img>
        <span class="ml-3"></span> LMS
      </v-toolbar-title>
      <div class="d-none d-md-block">
        <v-btn
          text
          color="white"
          plain
          class="ml-2"
          style="text-transform:none"
          to="/"
        >
          Home
        </v-btn>
        <v-btn text color="white" plain style="text-transform:none" to="/courses">
          Courses
        </v-btn>
        <v-btn text color="white" plain style="text-transform:none">
          Certificates
        </v-btn>
      </div>
      <v-spacer></v-spacer>

      <Auth />
    </v-app-bar>
  </div>
</template>
<script>
import Auth from "../layouts/Auth";
export default {
  components: {
    Auth,
  },
  data: () => ({ drawer: false }),
};
</script>
