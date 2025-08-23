<template>

  <BlogArticle>
    <template #header>
      <h1 class="article-header">Welcome to my travel blog!</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <img src="~/assets/images/header_image.jpeg" alt="Andreas" class="article-image">
        <p class="lg:col-span-2 header-text">
          Hi there 👋. I’m Andreas, and this is my travel blog where I share my experiences from all my trips around the
          world.

          My goal is to give you my honest opinions about the places I’ve visited, share some travel recommendations,
          and provide practical advice to help you make your own journeys even better!

        </p>
      </div>
      <p>
        I’m a computer science student from Germany, and I started this blog during my exchange year in the United
        States. But the blog isn’t just about the USA. I’ll keep writing about my future trips to other places.
        Below, you’ll find a world map of all my travel destinations.
        The markers on the map represent the places I’ve already visited.
        Click on a marker to learn more about the destination.
        Alternatively, you can click on one of the cards below the world map, which are organized by country.
        I hope you find my blog helpful!
      </p>
      <div class="">
        <LeafletMap :locations="citiesStore.allCities"></LeafletMap>
      </div>
    </template>
    <template #body>
      <p>
        Below are all my trips organized by country. Click on one of the cards to learn more about the place!
      </p>
      <ArticleSection id="united-states" header="🇺🇸 United States">
        <ThumbnailGrid :thumbnails="[
          {
            header: 'Zion National Park, Utah',
            date: citiesStore.allCities.get('zion-us').date,
            rating: citiesStore.allCities.get('zion-us').rating,
            image: '/images/thumbnails/zion_thumb.jpeg',
            to: citiesStore.allCities.get('zion-us').link
          },
          {
            header: 'New York City',
            date: citiesStore.allCities.get('nyc-us').date,
            rating: citiesStore.allCities.get('nyc-us').rating,
            image: '/images/thumbnails/nyc_thumb.jpeg',
            to: citiesStore.allCities.get('nyc-us').link
          },
          {
            header: 'San Francisco, California',
            date: citiesStore.allCities.get('sf-us').date,
            rating: citiesStore.allCities.get('sf-us').rating,
            image: '/images/thumbnails/sf_thumb.jpeg',
            to: citiesStore.allCities.get('sf-us').link
          },
          {
            header: 'Chicago, Illinois',
            date: citiesStore.allCities.get('chicago-us').date,
            rating: citiesStore.allCities.get('chicago-us').rating,
            image: '/images/thumbnails/chicago_thumb.jpeg',
            to: citiesStore.allCities.get('chicago-us').link
          },
          {
            header: 'Washington, DC',
            date: citiesStore.allCities.get('dc-us').date,
            rating: citiesStore.allCities.get('dc-us').rating,
            image: '/images/thumbnails/dc_thumb.jpeg',
            to: citiesStore.allCities.get('dc-us').link
          },
          {
            header: 'Charleston, South Carolina',
            date: citiesStore.allCities.get('charleston-us').date,
            rating: citiesStore.allCities.get('charleston-us').rating,
            image: '/images/thumbnails/charleston_thumb.jpeg',
            to: citiesStore.allCities.get('charleston-us').link
          },
          {
            header: 'Miami, Florida',
            date: citiesStore.allCities.get('miami-us').date,
            rating: citiesStore.allCities.get('miami-us').rating,
            image: '/images/thumbnails/miami_thumb.jpeg',
            to: citiesStore.allCities.get('miami-us').link
          },
          {
            header: 'Boston, Massachusetts',
            date: citiesStore.allCities.get('boston-us').date,
            rating: citiesStore.allCities.get('boston-us').rating,
            image: '/images/thumbnails/boston_thumb.jpeg',
            to: citiesStore.allCities.get('boston-us').link
          },
          {
            header: 'Providence, Rhode Island',
            date: citiesStore.allCities.get('providence-us').date,
            rating: citiesStore.allCities.get('providence-us').rating,
            image: '/images/thumbnails/providence_thumb.jpeg',
            to: citiesStore.allCities.get('providence-us').link
          },
          {
            header: 'Cleveland, Ohio',
            date: citiesStore.allCities.get('cleveland-us').date,
            rating: citiesStore.allCities.get('cleveland-us').rating,
            image: '/images/thumbnails/cleveland_thumb.jpeg',
            to: citiesStore.allCities.get('cleveland-us').link
          },
          {
            header: 'Portsmouth, New Hampshire',
            date: citiesStore.allCities.get('portsmouth-us').date,
            rating: citiesStore.allCities.get('portsmouth-us').rating,
            image: '/images/thumbnails/portsmouth_thumb.jpeg',
            to: citiesStore.allCities.get('portsmouth-us').link
          },
          {
            header: 'New Haven, Connecticut',
            date: citiesStore.allCities.get('new-haven-us').date,
            rating: citiesStore.allCities.get('new-haven-us').rating,
            image: '/images/thumbnails/new_haven_thumb.jpeg',
            to: citiesStore.allCities.get('new-haven-us').link
          },
          {
            header: 'Detroit, Michigan',
            date: citiesStore.allCities.get('detroit-us').date,
            rating: citiesStore.allCities.get('detroit-us').rating,
            image: '/images/thumbnails/detroit_thumb.jpeg',
            to: citiesStore.allCities.get('detroit-us').link
          },
          {
            header: 'Las Vegas, NV',
            date: citiesStore.allCities.get('las-vegas-us').date,
            rating: citiesStore.allCities.get('las-vegas-us').rating,
            image: '/images/thumbnails/las_vegas_thumb.jpeg',
            to: citiesStore.allCities.get('las-vegas-us').link
          },
        ]" />
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import { useCitiesStore } from '~/stores/cities';

const citiesStore = useCitiesStore();
</script>