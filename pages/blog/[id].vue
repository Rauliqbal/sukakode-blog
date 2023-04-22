<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
   let article = queryContent().where({ _path: path }).findOne();
   let surround = queryContent().only(["_path", "title", "description", "image"]).sort({ date: 1 }).findSurround(path);

   return {
      article: await article,
      surround: await surround,
   };
});

// SEO META
useHead({
   title: data.value.article.title,
   meta: [
      { name: "description", content: "data.value.article.description" },
      { hid: "og:image", property: "og:image", content: `/images/${data.value.article.image}` },
   ],
});
</script>
<template>
   <main class="container grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      <section class="col-span-2 bg-white rounded-2xl p-4 shadow-md">
         <header class="border-b pb-12">
            <img class="max-h-96 w-full object-cover rounded-xl" :src="'/images/' + data.article.image" :alt="'Thumbnail' + data.article.title" />
            <h1 class="text-3xl md:text-4xl font-bold mt-8">{{ data.article.title }}</h1>
            <ul class="flex gap-1 mt-4">
               <li class="bg-gray-100 text-gray-400 px-3 py-1 rounded-md text-[12px] font-bold tracking-wide" v-for="tag in data.article.tags" :key="tag.id">{{ tag }}</li>
            </ul>
         </header>

         <article class="prose mt-8 max-w-full w-full m-auto">
            <ContentRenderer :value="data.article" />
         </article>
      </section>
      <aside class="col-span-2 md:col-span-1 sticky top-10 bg-white rounded-2xl shadow-md">
         <div class="p-6">
            <h5 class="text-xl font-bold">Daftar isi 🔥</h5>
            <hr class="mt-5" />

            <ul class="mt-5 list-disc pl-6">
               <li class="py-1" v-for="article in data.article.body.toc.links" :key="article.id">
                  <a class="text-gray-500 font-semibold tracking-wide" :href="'#' + article.id">{{ article.text }}</a>
               </li>
            </ul>

            <!-- <ul class="list-disc pl-12">
               <li class="py-1" v-for="article in data.article.body.toc.links[1].children" :key="article.id">
                  <a class="text-gray-500 font-semibold tracking-wide" :href="'#' + article.id">{{ article.text }}</a>
               </li>
            </ul> -->
         </div>
      </aside>
   </main>
</template>

<style>
article > h1 {
   font-size: 32px !important;
}

article p img {
   border-radius: 0.75rem;
   height: 100%;
   width: 100%;
   object-fit: cover;
}
.prose a {
   text-decoration: none !important;
}
</style>
