<script setup>
defineProps({
   to: String,
   title: String,
   image: String,
   tag: String,
   description: String,
});
</script>
<template>
   <NuxtLink :to="to">
      <div class="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-200 ease-out h-full">
         <div class="rounded-xl overflow-hidden">
            <img :src="'/images/thumbnails/' + image" :alt="title" class="object-cover w-full h-full" />
         </div>
         <div class="mt-6">
            <ul class="flex gap-2 mt-2">
               <li class="bg-gray-100 text-gray-400 px-3 py-1 rounded-md text-[12px] font-bold tracking-wide" v-for="(tag, n) in tags" :key="n">{{ tag }}</li>
            </ul>
            <h1 class="text-xl font-semibold line-clamp-2 mt-4">{{ title }}</h1>
            <p class="mt-4 text-gray-500 line-clamp-2 tracking-wide">{{ description }}</p>
         </div>
      </div>
   </NuxtLink>
</template>
