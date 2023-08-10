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
   <main>
      <header class="h-[50vh] flex justify-center items-center relative overflow-hidden">
         <div class="bg-header opacity-20 w-full h-full absolute bg-[size:34px]"></div>
         <div class="absolute top-0 w-full h-full left-0 bg-gradient-to-b from-transparent to-[#fafaff]"></div>
         <div class="z-10">
            <h1 class="text-center text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500">SukaKode</h1>
            <p class="text-center text-lg px-5 text-slate-700 tracking-wide leading-tight mt-4">Belajar Pemrograman Website & UI Design dengan tutorial yang mudah dipahami</p>
         </div>
      </header>
      <article class="mt-8 container">
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
