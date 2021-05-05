<template>
  <div class="my-6">
    <v-item-group active-class="primary">
      <v-container>
        <div
          class="my-4"
          style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
        >
          You may also like
        </div>
        <v-row>
          <v-col cols="12" md="3">
            <v-item>
              <v-card class="mx-auto" max-width="400" elevation="1">
                <v-img
                  class="white--text align-end"
                  height="150px"
                  src="https://cdn.appuals.com/wp-content/uploads/2019/08/office-insider-build-780x379.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Mastery in MS-Office 
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>World Excel Powerpoint</div>
                </v-card-text>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between">
                    <v-btn text  plain style="font-size:0.7rem">
                        <v-icon class="mr-2">
                            mdi-av-timer
                        </v-icon>
                        3 week
                    </v-btn>
                    <v-btn  text color="primary" to="/view/course" plain style="font-size:0.7rem">
                        View Course
                        <v-icon class="ml-2">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </div>
              </v-card>
            </v-item>
          </v-col>

          <v-col cols="12" md="3">
            <v-item>
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="150px"
                  src="https://miro.medium.com/max/2000/1*pgqt118rJc9aKIXPT36HJQ.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Getting Started with C++
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Learn about c++ & its fundamentals</div>
                </v-card-text>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between">
                    <v-btn text  plain style="font-size:0.7rem">
                        <v-icon class="mr-2">
                            mdi-av-timer
                        </v-icon>
                        4 week
                    </v-btn>
                    <v-btn  text color="primary" to="/view/course" plain style="font-size:0.7rem">
                        View Course
                        <v-icon class="ml-2">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </div>
              </v-card>
            </v-item>
          </v-col>

          <v-col cols="12" md="3">
            <v-item>
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="150px"
                  src="https://5.imimg.com/data5/DI/FC/GLADMIN-64481222/english-speaking-course-coaching-500x500.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  English Pro
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Learn about Elglish</div>
                </v-card-text>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between">
                    <v-btn text  plain style="font-size:0.7rem">
                        <v-icon class="mr-2">
                            mdi-av-timer
                        </v-icon>
                        2 week
                    </v-btn>
                    <v-btn  text color="primary" to="/view/course" plain style="font-size:0.7rem">
                        View Course
                        <v-icon class="ml-2">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </div>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="3">
            <v-item>
              <v-card class="mx-auto" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="150px"
                  src="https://miro.medium.com/max/2000/1*pgqt118rJc9aKIXPT36HJQ.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Getting Started with C++
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Learn about c++ & its fundamentals</div>
                </v-card-text>
                <v-divider></v-divider>
                <div class="d-flex justify-space-between">
                    <v-btn text  plain style="font-size:0.7rem">
                        <v-icon class="mr-2">
                            mdi-av-timer
                        </v-icon>
                        4 week
                    </v-btn>
                    <v-btn  text color="primary" to="/view/course" plain style="font-size:0.7rem">
                        View Course
                        <v-icon class="ml-2">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
<script>
export default {};
</script>
