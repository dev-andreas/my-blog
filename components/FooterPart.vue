<template>
  <footer class="flex flex-col items-center justify-center mt-10">
    <div class="standard-blog-width flex flex-col md:flex-row items-center justify-center md:justify-between h-40 w-full px-10 border-t border-primary-300">
      <div class="text">
        <p>&copy; {{ date }} Andreas Gerasimow</p>
        <p class="text-primary-400">Built with Vue.js/Nuxt.js</p>
      </div>
      <div class="flex mt-5 lg:mt-0 gap-5">
        <a href="https://github.com/dev-andreas" target="_blank" rel="noopener">
          <img src="~/assets/images/social_nets/github.svg" alt="github" class="h-12 shadow-flat-sm" />
        </a>
        <a href="https://www.linkedin.com/in/andreas-gerasimow-341a551b2/" target="_blank" rel="noopener">
          <img src="~/assets/images/social_nets/linkedin.svg" alt="linkedin" class="h-12 shadow-flat-sm" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const date = ref(new Date().getFullYear())
</script>