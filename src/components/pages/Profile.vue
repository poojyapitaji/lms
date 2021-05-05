<template>
  <div>
    <v-container class="my-4">
      <h2 class="mb-1">My Profile</h2>
      <v-divider></v-divider>

      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            Profile Image
          </div>
          <div class="d-flex justify-center align-center">
            <v-avatar class="mt-3" height="70" width="70" tile>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
                style="border-radius:0.5rem;"
              />
            </v-avatar>
            <v-file-input
              class="ml-6"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an image"
              prepend-icon="mdi-camera"
              label="New profile image"
            ></v-file-input>
          </div>
          <div
            class="mt-10"
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            Profile Name
          </div>
          <v-text-field
            outlined
            dense
            class="mt-3"
            value="Shubham Singh"
            background-color="white"
            placeholder="Your profile name"
          ></v-text-field>
          <div
            class="mt-3"
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            Email
          </div>
          <v-text-field
            outlined
            dense
            class="mt-3"
            value="singh.shubh28@gmail.com"
            background-color="white"
            placeholder="Your email address"
          ></v-text-field>
          <div
            class="mt-2"
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            About You
          </div>
          <v-textarea
            outlined
            class="mt-3"
            name="input-7-4"
            background-color="white"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
          <v-btn color="primary">
            Save Changes
          </v-btn>
        </v-col>
        <v-col cols="12" md="5">
          <div class="pl-md-10 pl-0">
            <div
              style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
            >
              Change Password
            </div>
            <v-text-field
              outlined
              dense
              class="mt-4"
              label="Current Password"
              background-color="white"
              placeholder="Enter current password"
              type="password"
            ></v-text-field>
            <v-text-field
              outlined
              dense
              class="mt-2"
              label="New Password"
              background-color="white"
              placeholder="Enter new password"
              type="password"
            ></v-text-field>
            <v-text-field
              outlined
              dense
              class="mt-2"
              label="Repeat New Password"
              background-color="white"
              placeholder="Repeat new password"
              type="password"
            ></v-text-field>
            <v-btn color="primary">
              Update Password
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
  },
};
</script>
