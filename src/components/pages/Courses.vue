<template>
<div>
<v-container style="margin-top:-30px">
      <FeatureCourse />
      <CourseWithCategory />
  </v-container>
  <Footer />
</div>
  
</template>

<script>
import FeatureCourse from "../layouts/FeatureCourse";
import CourseWithCategory from "../layouts/CourseWithCategory";
import Footer from "../layouts/Footer";
export default {
  components: {
    FeatureCourse,
    CourseWithCategory,
    Footer,
  },
};
</script>
