<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-5">
      <BlogThumbnail v-for="destination in items" :header="destination.mapName" :description="destination.description"
        :date="destination.date" :rating="destination.rating" :image="destination.thumbnail" :to="destination.link"
        :vertical="widthStore.windowWidth < widthStore.sizes['sm']" />
    </div>
    <button v-if="showToggle" @click.prevent="toggle" class="flex items-center gap-1 self-center btn-secondary">
      <SvgPathsChevronDownSvg v-if="open" class="w-5 stroke-font-dark"></SvgPathsChevronDownSvg>
      <SvgPathsChevronUpSvg v-else class="w-5 stroke-font-dark"></SvgPathsChevronUpSvg>
      <span v-if="open">View less</span>
      <span v-else>View all</span>
    </button>
  </div>
</template>

<script setup>
import { useWidthStore } from '~/stores/width';

const props = defineProps({
  destinations: {
    type: Array,
    default: [],
  }
});

const widthStore = useWidthStore();

function toggle() {
  open.value = !open.value;
}

const showToggle = computed(() => props.destinations.length > 3);

const open = ref(false);
const items = computed(() => open.value ? props.destinations : props.destinations.slice(0, 3));

</script>

<style scoped></style>