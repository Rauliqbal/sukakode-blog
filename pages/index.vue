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
                     <CardList :to="article._path" :title="article.title" :image="article.image" :tag="article.tag" :description="article.description" />
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
