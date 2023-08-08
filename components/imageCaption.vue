<script setup>
defineProps({
   image: String,
   alt: String,
   caption: String,
});
</script>
<template>
   <figure>
      <img :src="image" :alt="alt" />
      <figcaption>
         {{ caption }}
      </figcaption>
   </figure>
</template>
