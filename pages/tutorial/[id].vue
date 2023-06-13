<script setup>
const route = useRoute().params.id;
</script>
<template>
   <main>
      <article class="container prose">
         <LazyContentDoc :path="'/tutorial/' + route" />
      </article>
   </main>
</template>
