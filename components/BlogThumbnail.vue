<template>
  <NuxtLink :to="props.to" class="group flex justify-between rounded-lg bg-backg-light flex-shrink-0 shadow-md" :class="{ 'flex-col': vertical }">
    <div class="overflow-hidden flex-shrink-0" :class="{ 'thumb-image-horizontal w-60 md:w-80 mdlg:w-60 lg:w-80': !vertical, 'thumb-image-vertical w-full': vertical }">
      <img :src="props.image" alt=""
        class="group-hover:scale-105 transition-all duration-500 ease-out h-52 w-full object-cover">
    </div>
    <div
      class="flex flex-grow flex-col justify-between flex-shrink gap-2 bg-primary-100 group-hover:bg-primary-200 transition-all duration-500 ease-out" :class="{ 'thumb-body-horizontal': !vertical, 'thumb-body-vertical': vertical }">
      <div>
        <h3 class="font-bold text-xl">{{ props.header }}</h3>
        <p class="text-left">{{ props.description }}</p>
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
  vertical: {
    type: Boolean,
    default: true,
  }
});

const niceDate = computed(() => {
  return props.date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
});
</script>

<style scoped>
.thumb-image-vertical {
  border-right-width: 1px;
  border-top-width: 1px;
  border-left-width: 1px;
  @apply border-primary-400 rounded-t-lg;
}

.thumb-image-horizontal {
  border-top-width: 1px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  @apply border-primary-400 rounded-l-lg;
}

.thumb-body-vertical {
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  @apply border-primary-400 rounded-b-lg p-2;
}

.thumb-body-horizontal {
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  @apply border-primary-400 rounded-r-lg p-2;
}
</style>