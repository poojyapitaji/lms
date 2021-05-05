<template>
  <div>
    <v-carousel hide-delimiters cycle show-arrows-on-hover progress>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg",
        },
        {
          src: "https://hackr.io/blog/python-certification/thumbnail/large",
        },
        {
          src: "https://www.ezeetechgroup.com/wp-content/uploads/2019/05/Digital-Marketing.jpg",
        },
        {
          src: "https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/104025598_128475445542919_3289079029312503458_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=J7fFpfClWNgAX8ABCnK&_nc_ht=scontent-del1-1.xx&oh=e990cfaff00633f0d1b08c93aca83c71&oe=60B89F84",
        },
      ],
    };
  },
};
</script>
