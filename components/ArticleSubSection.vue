<template>
  <section ref="articleSection" class="flex flex-col gap-5">
    <h3 class="article-subsubheader relative group" :id="props.id">
      <a class="absolute hidden mdlg:block -left-6 opacity-0 group-hover:opacity-100 text-primary-300 transition-all duration-300 ease-out hover:text-primary-400"
        :href="'#' + props.id">#</a>
      <span class="absolute w-10 h-10 -left-1"></span>
      <span>
        {{ props.header }}
      </span>
    </h3>
    <slot></slot>
  </section>
</template>

<script setup>
import { useArticleStore } from '~/stores/article';

const props = defineProps({
  id: {
    type: String,
    default: ""
  },
  header: {
    type: String,
    default: ""
  }
});

const articleStore = useArticleStore();

const isIntersectingElement = ref(false);

watch(isIntersectingElement, (value) => {
  articleStore.updateSection(props.id, value)
});

const articleSection = ref(null);

function handler(entries) {
  isIntersectingElement.value = entries[0].isIntersecting;
};

onMounted(() => {
  articleStore.appendSection({
    id: props.id,
    name: props.header,
    type: 2
  })
  const observer = new window.IntersectionObserver(handler);
  observer.observe(articleSection.value);
});
</script>