<template>
  <nav
    :class="
      widthStore.mobileView
      ? 'flex mdlg:sticky top-0 justify-center bg-backg-light bg-opacity-70 backdrop-blur-lg h-16 border-b border-primary-300 mdlg:shadow-sm'
      : 'flex mdlg:sticky top-0 justify-center h-16'"
    style="z-index: 10000">
    <div class="standard-blog-width flex justify-between items-center sticky top-0">
      <NuxtLink to="/" class="font-bold text-xl shadow-flat-sm">
        ⛰️ Travel Blog
      </NuxtLink>
      <div class="flex items-center gap-5">

      </div>
    </div>
  </nav>
</template>

<script setup>
import { useWidthStore } from '~/stores/width.js';
const widthStore = useWidthStore();
</script>