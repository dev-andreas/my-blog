<template>
  <div class="flex flex-col items-center gap-2" :id="props.id">
    <div class="w-full grid grid-cols-1 place-items-start gap-5"
      :class="[preview ? 'preview' : '', gridSize > 1 ? 'md:grid-cols-2' : '']">
      <figure v-for="image in images" :key="image.path">
        <img :src="image.path" :alt="image.alt" class="article-image">
        <figcaption class="text-center mt-1 text-primary-600">{{ image.alt }}</figcaption>
      </figure>
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

const props = defineProps(["images", "id"]);

const widthStore = useWidthStore();
const { windowWidth } = storeToRefs(widthStore)

let preview = ref(true);
let gridSize = ref(0);

function toggle() {
  preview.value = !preview.value;
  if (preview.value) {
    window.location.replace('#')
    window.location.replace('#' + props.id)
  }
}

const showToggle = computed(() => {
  if (windowWidth.value >= widthStore.sizes["md"]) {
    return (gridSize.value > 2);
  } else {
    return (gridSize.value > 1);
  }
});

onMounted(() => {
  gridSize.value = props.images.length;
});
</script>

<style scoped>
@media only screen and (max-width: 767px) {
  .preview>*:nth-child(n+2) {
    @apply hidden;
  }
}

@media only screen and (min-width: 768px) {
  .preview>*:nth-child(n+3) {
    @apply hidden;
  }
}
</style>