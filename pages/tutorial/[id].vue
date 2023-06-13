<script setup>
const route = useRoute().params.id;
</script>
<template>
   <main class="h-screen flex flex-col items-center justify-center">
      <!-- <article class="container prose">
         <LazyContentDoc :path="'/tutorial/' + route" />
      </article> -->

      <img class="max-w-[580px] w-full" src="~/assets/images/404.png" alt="" />
      <NuxtLink class="btn-primary" to="/tutorial">Kembali</NuxtLink>
   </main>
</template>
