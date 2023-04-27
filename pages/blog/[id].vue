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
   <main class="container grid grid-cols-1 md:grid-cols-3 gap-6 items-start pt-28">
      <section class="col-span-2 bg-white rounded-2xl p-4 shadow-md">
         <header class="border-b pb-12">
            <img class="max-h-96 w-full object-cover rounded-xl" :src="'/images/thumbnails/' + data.article.image" :alt="'Thumbnail ' + data.article.title" />
            <h1 class="text-2xl md:text-3xl font-bold mt-8">{{ data.article.title }}</h1>
            <ul class="flex gap-1 mt-4">
               <li class="bg-gray-100 text-gray-400 px-3 py-1 rounded-md text-[12px] font-bold tracking-wide" v-for="tag in data.article.tags" :key="tag.id">{{ tag }}</li>
            </ul>
         </header>

         <article class="prose mt-8 max-w-full w-full m-auto">
            <ContentRenderer :value="data.article" />
         </article>
      </section>
      <aside class="col-span-2 md:col-span-1 sticky top-28 bg-white rounded-2xl shadow-md">
         <Toc :links="data.article.body.toc.links" />
      </aside>
   </main>
</template>

<style>
.prose h1 {
   font-size: 28px !important;
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

.prose blockquote {
   font-style: normal !important;
}
.prose blockquote p::before {
   content: "";
}

.prose code {
   font-size: 16px;
}
.prose code::before,
code::after {
   content: "" !important;
}

.prose table {
   font-size: 16px;
   border-width: 1px;
}
.prose table thead {
   background-color: #f1f1f1;
}
.prose table tr th,
.prose table tr td {
   padding: 12px 16px;
   border-width: 1px;
   border-color: #d1d5db;
}
</style>
