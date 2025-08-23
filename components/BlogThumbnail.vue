<template>
  <NuxtLink :to="props.to" class="shadow-md group flex flex-col justify-between rounded-lg bg-backg-light">
    <div class="thumb-image overflow-hidden">
      <img :src="props.image" alt=""
        class="group-hover:scale-105 transition-all duration-500 ease-out h-60 w-full object-cover">
    </div>
    <div class="thumb-body flex-grow flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-xl">{{ props.header }}</h3>
      </div>
      <div class="flex gap-2">
        <div
          class="flex items-center gap-1 bg-primary-200 group-hover:bg-primary-300 px-2 py-1 rounded-lg transition-all duration-500 ease-out">
          <SvgPathsCalendarSvg class="stroke-font-dark h-4"></SvgPathsCalendarSvg>
          <p class="text-sm">{{ niceDate }}</p>
        </div>
        <div
          class="flex items-center gap-1 bg-primary-200 group-hover:bg-primary-300 px-2 py-1 rounded-lg transition-all duration-500 ease-out">
          <SvgPathsStarSvg class="stroke-font-dark h-4"></SvgPathsStarSvg>
          <p class="text-sm">{{ rating }} / 10</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  header: String,
  description: String,
  date: Date,
  rating: Number,
  image: String,
  to: String,
});

const niceDate = computed(() => {
  return props.date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
});
</script>

<style scoped>
.thumb-image {
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  @apply border-primary-400 rounded-t-lg h-60;
}

.thumb-body {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  @apply border-primary-400 rounded-b-lg p-2 bg-primary-100 group-hover:bg-primary-200 transition-all duration-200 ease-out flex flex-col gap-2;
}
</style>