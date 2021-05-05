<template>
  <div>
    <Carousels />
    <Overview />
    <FeatureCourse />
    <Footer />
  </div>
</template>
<script>
import Carousels from "../layouts/Carousels";
import Overview from "../layouts/Overview";
import FeatureCourse from "../layouts/FeatureCourse";
import Footer from "../layouts/Footer";
export default {
  components: {
    Carousels,
    Overview,
    FeatureCourse,
    Footer,
  },
};
</script>
