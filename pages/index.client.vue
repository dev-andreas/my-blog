<template>

  <BlogArticle>
    <template #header>
      <h1 class="article-header">Welcome to my travel blog!</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <img src="~/assets/images/header_image.jpeg" alt="Andreas" class="article-image">
        <p class="lg:col-span-2 header-text">
          Hi there 👋. I’m Andreas, and this is my travel blog where I share my experiences from all my trips around the
          world.

          My goal is to give you my honest opinions about the places I’ve visited, share some recommendations,
          and provide practical advice to help you make your own journeys even better!
        </p>
      </div>
    </template>
    <template #body>
      <ArticleSection id="introduction" header="Introduction" :showHeader="false">
        <p>
          I’m a computer science student from Germany, and I started this blog during my exchange year in the United
          States. But the blog isn’t just about the USA. I’ll keep writing about my future trips to other places.
          Below, you’ll find a world map of all my travel destinations.
          The markers on the map represent the places I’ve visited.
          You can click on a marker to learn more about the destination.
          I hope you find my blog helpful!
        </p>
        <LeafletMap :locations="citiesStore.allDestinations" :zoom="zoom"></LeafletMap>
        <p>You can also click on one of the buttons below to get a more refined overview by continent:</p>
        <div class="flex flex-wrap gap-3">
          <InternalButton to="/europe">Europe</InternalButton>
          <InternalButton to="/north-america">North America</InternalButton>
          <InternalButton to="/all-destinations">All Destinations</InternalButton>
        </div>
      </ArticleSection>
      <ArticleSection id="most-recent" header="Recent Trips">
        <p>Here are my most recent trips! Click on the cards below to read more about the destination:</p>
        <ThumbnailGrid :destinations="citiesStore.mostRecentDestinations" id="mostRecentTripsGrid"></ThumbnailGrid>
      </ArticleSection>

      <ArticleSection id="usa-exchange-year" header="USA Exchange Year">
        <ThumbnailGrid :destinations="citiesStore.usaDestinations"></ThumbnailGrid>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import { useCitiesStore } from '~/stores/cities';
import { useWidthStore } from '~/stores/width';

const citiesStore = useCitiesStore();
const widthStore = useWidthStore();

const zoom = computed(() => {
  return widthStore.windowWidth < widthStore.sizes['sm'] ? 1 : 2
})
</script>

<style scoped>
.filter-link {
  @apply bg-primary-200 py-2 px-3 rounded-md text-primary-600;
}
</style>