<script setup>
useHead({
   title: "SukaKode - Belajar Pemrograman Website dan UI Design",
   meta: [
      { name: "keywords", content: "sukakode, belajar web, belajar html, belajar pemrograman web, belajar ui design, belajar figma, suka koding, rauliqbal" },
      { name: "description", content: "Website SukaKode, membahas tentang tutorial pemrograman website dan UI Design untuk pemula yang mudah dipahami" },
   ],
});
</script>
<template>
   <main class="container">
      <header class="rounded-2xl bg-header bg-no-repeat bg-cover bg-center h-[50vh] flex justify-center items-center relative overflow-hidden">
         <div class="absolute w-full h-full bg-black/40"></div>
         <div class="z-10">
            <h1 class="text-center text-4xl font-bold text-white">SukaKode</h1>
            <p class="text-center text-lg px-5 text-gray-300 tracking-wide leading-tight mt-4">Belajar Pemrograman Website & UI Design dengan tutorial yang mudah dipahami</p>
         </div>
      </header>
      <article class="mt-8">
         <ContentList
            path="/blog"
            :query="{
               only: ['title', 'description', 'tags', '_path', 'image'],
               sort: { date: -1 },
            }"
         >
            <template v-slot="{ list }">
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <article v-for="article in list" :key="article._path">
                     <NuxtLink :to="article._path">
                        <div class="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-200 ease-out h-full">
                           <div class="rounded-xl overflow-hidden">
                              <img :src="'/images/thumbnails/' + article.image" :alt="article.title" class="object-cover w-full h-full" />
                           </div>
                           <div class="mt-6">
                              <ul class="flex gap-2 mt-2">
                                 <li class="bg-gray-100 text-gray-400 px-3 py-1 rounded-md text-[12px] font-bold tracking-wide" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                              </ul>
                              <h1 class="text-xl font-semibold line-clamp-2 mt-4">{{ article.title }}</h1>

                              <p class="mt-4 text-gray-500 line-clamp-2 tracking-wide">{{ article.description }}</p>
                           </div>
                        </div>
                     </NuxtLink>
                  </article>
               </div>
            </template>
            <template #not-found>
               <p class="text-lg text-center font-semibold">No articles found.</p>
            </template>
         </ContentList>
      </article>
   </main>
</template>
