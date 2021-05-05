<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          v-bind="attrs"
          v-on="on"
          text
          plain
          class="d-flex align-center"
          outlined
        >
          <v-icon style="font-size:0.9rem">mdi-lock-open</v-icon>
          <span class="ml-2">
            Login / SignUp
          </span>
        </v-btn>
      </template>

      <v-card>
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            src="../../assets/logo.png"
            max-height="100"
            max-width="100"
          ></v-img>
        </div>
        <v-tabs
          class="d-flex flex-column justify-center align-center"
          v-model="tab"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#login">Login</v-tab>
          <v-tab href="#signup">Sign Up</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="login">
            <v-card flat class="py-8 px-10">
              <v-text-field
                label="Email"
                placeholder="Enter your email"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Password"
                placeholder="Enter your password"
                outlined
                dense
                type="password"
              ></v-text-field>
              <div
                class="d-flex flex-column flex-md-row justify-start justify-md-space-between align-md-center"
              >
                <v-btn color="primary">
                  Login
                </v-btn>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item value="signup">
            <v-card flat>
              <v-card flat class="py-8 px-10">
                <div class="mt-3">
                  <v-text-field
                    label="Email"
                    placeholder="Enter your email"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    placeholder="Enter your password"
                    outlined
                    dense
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    label="Confirm Password"
                    placeholder="Repeat your password"
                    outlined
                    dense
                    type="password"
                  ></v-text-field>
                  <div
                    class="d-flex flex-column flex-md-row justify-start justify-md-space-between align-md-center"
                  >
                    <v-btn color="primary">
                      Signup
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      tab: null,
    };
  },
};
</script>
