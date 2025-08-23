<template>
  <div class="flex flex-col gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch thumb-grid"
      :class="preview ? 'preview' : ''">
      <BlogThumbnail v-for="thumbnail in props.thumbnails" :header="thumbnail.header" :date="thumbnail.date"
        :rating="thumbnail.rating" :image="thumbnail.image" :to="thumbnail.to" />
    </div>
    <button v-if="showToggle" @click="toggle" class="flex items-center gap-1 self-center btn-secondary">
      <SvgPathsChevronDownSvg v-if="preview" class="w-5 stroke-font-dark"></SvgPathsChevronDownSvg>
      <SvgPathsChevronUpSvg v-else class="w-5 stroke-font-dark"></SvgPathsChevronUpSvg>
      <span v-if="preview">View all</span>
      <span v-else>View less</span>
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useWidthStore } from '~/stores/width';

const props = defineProps(["thumbnails"])

const widthStore = useWidthStore();
const { windowWidth } = storeToRefs(widthStore);

let preview = ref(true);
let showToggle = ref(false);
let gridSize = ref(0);

function toggle() {
  preview.value = !preview.value;
}

watch(windowWidth, updateShowToggle);

function updateShowToggle(width) {
  if (width >= widthStore.sizes["xl"]) {
    showToggle.value = (gridSize.value > 3);
  } else if (width >= widthStore.sizes["sm"]) {
    showToggle.value = (gridSize.value > 4);
  } else {
    showToggle.value = (gridSize.value > 6);
  }
}

onMounted(() => {
  gridSize.value = props.thumbnails.length;
  updateShowToggle(windowWidth)
});

</script>

<style scoped>
@media only screen and (max-width: 639px) {
  .preview>*:nth-child(n+4) {
    @apply hidden;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1279px) {
  .preview>*:nth-child(n+5) {
    @apply hidden;
  }
}

@media only screen and (min-width: 1280px) {

  .preview>*:nth-child(n+7) {
    @apply hidden;
  }
}
</style>