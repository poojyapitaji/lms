<template>
  <div>
    <v-card
      color="#5567FF"
      elevation="0"
      rounded="0"
      height="400"
      class="d-flex align-center"
    >
      <v-container class="d-flex align-center justify-center justify-md-start">
        <div>
          <div class="text-md-h2 text-h4" style="color:white">
            <b>
              Introduction to Python
            </b>
          </div>
          <div class="mt-6 text-md-h5 text-h6" style="color:#AAB3FF">
            It’s not every day that one of the most important front-end
            libraries in web development gets a complete overhaul. Keep your
            skills relevant and up-to-date with this comprehensive introduction
            to Google’s popular community project.
          </div>

          <v-btn class="mt-6">
            Enroll Now
          </v-btn>
        </div>
      </v-container>
    </v-card>
    <v-card rounded="0" elevation="0">
      <v-container
        class="d-flex flex-column flex-md-row justify-space-between pa-1"
      >
        <div class="d-flex flex-column flex-md-row  align-center">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>

          <div class="ml-md-4 d-flex flex-column align-center align-md-start">
            <b>Shubham Singh</b>
            <span
              class="text-subtitle-2 font-weight-light"
              style="margin-top:-3px"
              >Instructor</span
            >
          </div>

          <div class="ml-md-6">
            <v-icon>
              mdi-clock-outline
            </v-icon>
            <span class="ml-2" style="font-size:0.9rem">1 week</span>
          </div>
        </div>
        <div class="d-flex flex-column align-center">
          <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            hover
            length="5"
            size="25"
            color="#F9C32C"
          ></v-rating>
          <span
            class="text-subtitle-2 font-weight-light"
            style="margin-top:-3px"
            >Rate this course</span
          >
        </div>
      </v-container>
      <v-divider></v-divider>
    </v-card>

    <v-container>
      <v-row style="margin-top:-22px">
        <v-col cols="12" md="7">
          <v-timeline align-top dense>
            <v-timeline-item color="#F5F7FA">
              <div class="mt-1" style="margin-left:-15px">
                <h3 class="mb-3">Course Overview</h3>
                <span class="font-weight-light" style="font-size:0.9rem;"
                  >It’s not every day that one of the most important front-end
                  libraries in web development gets a complete overhaul. Keep
                  your skills relevant and up-to-date with this comprehensive
                  introduction to Google’s popular community project.</span
                >
              </div>
            </v-timeline-item>
            <v-timeline-item color="#F5F7FA">
              <div class="mt-1" style="margin-left:-15px">
                <h3 class="mb-3">Getting Started with Python</h3>
                <span class="font-weight-light" style="font-size:0.9rem;"
                  >Good tools make application development quick*er and easier
                  to maintain than* if you did everything by hand. The goal in
                  this guide is to build and run a simple Angular application in
                  TypeScript, using the Angular CLI while adhering to the Style
                  Guide recommendations that benefit every Angular
                  project.</span
                >
              </div>
            </v-timeline-item>
            <v-timeline-item color="#F5F7FA">
              <div class="mt-1" style="margin-left:-15px">
                <h3 class="mb-3">
                  Creating and Communicating Between Python & Database
                </h3>
                <span class="font-weight-light" style="font-size:0.9rem;"
                  >Data sharing is an essential concept to understand before
                  diving into your first Angular project. In this section, you
                  will learn four different methods for sharing data between
                  Angular components.</span
                >
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col cols="12" md="5">
          <div
            class="my-4 ml-11"
            style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
          >
            TABLE OF CONTENTS
          </div>

          <v-timeline align-top dense>
            <v-timeline-item color="#D2D5D9" fill-dot small>
              <span
                class="font-weight-light"
                style="margin-left:-25px;font-size:0.9rem"
                >Course Overview</span
              >
            </v-timeline-item>
            <v-timeline-item color="#D2D5D9" fill-dot small>
              <span
                class="font-weight-light"
                style="margin-left:-25px;font-size:0.9rem"
                >Getting Started with Python</span
              >
            </v-timeline-item>
            <v-timeline-item color="#D2D5D9" fill-dot small>
              <span
                class="font-weight-light"
                style="margin-left:-25px;font-size:0.9rem"
                >Creating and Communicating Between Python & Database</span
              >
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="mt-4" color="white" elevation="0">
      <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <div
              class="my-4"
              style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
            >
              ABOUT THIS COURSE
            </div>

            <span class="font-weight-light" style="font-size:0.9rem">
              This course will teach you the fundamentals of working with
              Python. You *will learn everything you need to know to create
              complete applications including: components, services, directives,
              pipes, routing, HTTP, and even testing. <br />
              This course will teach you the fundamentals of working with
              Python. You will learn everything you need to know to create
              complete applications including: components, services, directives,
              pipes, routing, HTTP, and even testing.
            </span>
          </v-col>
          <v-col cols="12" md="5">
            <div class="my-4 ml-md-11">
              <span
                style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B;"
                >What you will learn</span
              >
              <br />
              <br />
              <div class="d-flex">
                <v-icon>
                  mdi-check
                </v-icon>
                <span class="font-weight-light ml-3" style="font-size:0.9rem;">
                  Fundamentals of working with Python
                </span>
              </div>

              <div class="d-flex">
                <v-icon>
                  mdi-check
                </v-icon>
                <span class="font-weight-light ml-3" style="font-size:0.9rem;">
                  Create complete Angular applications
                </span>
              </div>

              <div class="d-flex">
                <v-icon>
                  mdi-check
                </v-icon>
                <span class="font-weight-light ml-3" style="font-size:0.9rem;">
                  Working with the Angular CLI
                </span>
              </div>

              <div class="d-flex">
                <v-icon>
                  mdi-check
                </v-icon>
                <span class="font-weight-light ml-3" style="font-size:0.9rem;">
                  Understanding Dependency Injection
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </v-card>

    <v-card elevation="0">
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <div
              class="my-4"
              style="text-transform:uppercase; letter-spacing:0.2rem; font-size:0.95rem; font-weight:bold; color:#30396B"
            >
              ABOUT Instructor
            </div>
            <span class="font-weight-light" style="font-size:0.9rem;">
              Shubham Singh is a software developer at LearnD*ash. With more
              than 20 years o*f software development experience, he has gained a
              passion for Agile software development -- especially Lean.
            </span>
          </v-col>

          <v-col cols="12" md="5" class="d-flex flex-column align-center">
            <v-avatar class="mt-3" height="70" width="70">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>

            <div class="my-2 d-flex flex-column align-center ">
              <b style="font-size: 1.2rem;">Shubham Singh</b>
              <span
                class="text-subtitle-2 font-weight-light"
                style="margin-top:-3px"
                >Software Developer, System Administrator</span
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
    </v-card>

    <v-container style="margin-top:-30px">
      <ReleatedCourse />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import ReleatedCourse from "../layouts/ReleatedCourse";
import Footer from "../layouts/Footer";
export default {
  components: {
    ReleatedCourse,
    Footer,
  },
};
</script>
