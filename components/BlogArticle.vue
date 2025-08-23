<template>
  <div class="flex flex-col justify-start items-center mdlg:gap-10">
    <div v-if="mobileView"
      class="sticky top-0 h-12 w-full bg-backg-light bg-opacity-70 backdrop-blur-lg border-b border-primary-300 flex justify-center items-center shadow-sm"
      style="z-index: 10000">
      <div class="standard-blog-width flex justify-between items-center">
        <button class="flex flex-col gap-1" @click="toggleTable('')">
          <div class="h-0.5 rounded-full bg-font-dark w-5"></div>
          <div class="h-0.5 rounded-full bg-font-dark w-3"></div>
          <div class="h-0.5 rounded-full bg-font-dark w-4"></div>
        </button>
        <Transition name="slide-top">
          <a v-if="!scrolledToTop" class="font-bold transition ease-out duration-200" :class="{ 'opacity-0': scrolledToTop }" href="#">Back to
            top</a>
        </Transition>
      </div>
    </div>
    <div class="standard-blog-width flex flex-col mdlg:flex-row items-start mdlg:gap-12">

      <!-- desktop sidebar -->
      <aside v-if="!mobileView" class="sticky top-30 border-r border-font-dark w-72 overflow-auto pl-4 pr-4 pb-2">
        <div class="sticky top-0 p-2 backdrop-blur-md bg-backg-light flex flex-col gap-4 items-start z-50">
          <p class="font-bold">Table of Contents</p>
        </div>
        <div class="flex relative flex-col px-2 gap-2">
          <div v-for="section in articleStore.sectionsList" :key="section.id" class="relative flex items-center">
            <a v-if="section.type == 1" @click.prevent="goToId(section.id)" :href="'#' + section.id"
              class="hover:text-font-dark transition-all duration-300 ease-out ml-1"
              :class="section.id == articleStore.getLowestSection ? 'text-font-dark' : 'text-primary-600'">
              {{ section.name }}
            </a>
            <a v-else-if="section.type == 2" @click.prevent="goToId(section.id)" :href="'#' + section.id"
              class="hover:text-font-dark transition-all duration-300 ease-out ml-4"
              :class="section.id == articleStore.getLowestSection ? 'text-font-dark' : 'text-primary-500'">
              {{ section.name }}
            </a>
            <div v-show="section.id == articleStore.getLowestSection"
              class="bg-font-dark w-1 h-full rounded-full absolute -left-2 transition-all duration-200 ease-out"></div>
          </div>
        </div>
      </aside>

      <!-- mobile sidebar -->
      <aside v-else class="sticky top-12 w-full h-0" style="z-index: 10000">
        <Transition name="slide-bottom" mode="out-in">
          <div v-if="showTable"
            class="w-full p-4 rounded-lg border border-primary-300 bg-backg-light shadow-flat flex flex-col gap-2 mt-2">
            <p class="font-bold">Table of Contents</p>
            <hr class="border-primary-300">
            <div class="flex relative flex-col gap-3">
              <a @click.prevent="toggleTable(); goToId(section.id)" v-for="section in articleStore.sectionsList"
                :key="section.id" :href="'#' + section.id"
                class="text-primary-500 hover:text-font-dark transition-all duration-300 ease-out"
                :class="section.type == 1 ? 'font-semibold text-primary-600' : 'translate-x-2'">
                {{ section.name }}
              </a>
            </div>
          </div>
        </Transition>
      </aside>

      <div class="flex flex-col w-full mt-10 gap-10">
        <header class="flex flex-col gap-10">
          <slot name="header"></slot>
        </header>
        <article class="flex flex-col gap-10">
          <slot name="body"></slot>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useArticleStore } from '~/stores/article';
import { useWidthStore } from '~/stores/width';

const articleStore = useArticleStore();
const widthStore = useWidthStore();

const mobileView = computed(() => widthStore.windowWidth < widthStore.sizes["mdlg"]);
const showTable = ref(false);
const scrolledToTop = ref(true)

function toggleTable() {
  showTable.value = !showTable.value;
}

function goToId(id) {
  if (id != '') {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }
}

function checkWindowScroll() {
  scrolledToTop.value = (window.scrollY <= 100);
}

onMounted(() => {
  window.addEventListener("scroll", checkWindowScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", checkWindowScroll);
  articleStore.$reset();
});

</script>