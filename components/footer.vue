<script setup>
const date = new Date().getFullYear();
</script>
<template>
   <footer class="bg-gradient-to-br from-blue-500 to-blue-800 py-6">
      <p class="text-sm text-center text-white">&copy; {{ date }} SukaKode | Distributed By <a class="font-bold" href="https://rauliqbal.my.id/" target="_blank">Rauliqbal</a></p>
      <p class="text-center text-sm text-white mt-1">Made with ❤️ Nuxt 3</p>
   </footer>
</template>
