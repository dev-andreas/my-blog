<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">New Haven, Connecticut</h1>
      <p class="header-text">
        New Haven is located on the eastern coast line of the United States, near New York City.
        The city is home to around 130,000 people, and approximately 20% of the population is of Italian descent.
        Additionally, New Haven is the home of Yale University, one of the best universities in the country.
        I would recommend visiting the city for a one-day trip.
      </p>
    </template>
    <template #body>
      <ArticleSection id="coast-and-lighthouse" header="Coast and Lighthouse">
        <p>
          New Haven has a stunning coastline, and if you have a car, I highly recommend checking it out.
          Public transportation is not the most convenient way to access the coast.
          One of the highlights of the coastline is the beautiful Five Mile Point Light House. I visited it during the
          winter, and it was quite windy.
          I believe it would be a good experience to go there in the summer.
        </p>
        <ArticleImage id="coast-and-lighthouse-images" :images="[
          { path: '/images/places/new-haven-connecticut/coast2.jpeg', alt: 'Five Mile Point Lighthouse ' },
          { path: '/images/places/new-haven-connecticut/coast1.jpeg', alt: 'New Haven\'s coastline' },
          { path: '/images/places/new-haven-connecticut/coast4.jpeg', alt: 'Coastline with downtown in the background' },
          { path: '/images/places/new-haven-connecticut/coast3.jpeg', alt: 'Another picture of the coastline' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="yale-university" header="Yale University">
        <p>
          New Haven, home to Yale University, is the third oldest university in the United States and one of the most
          renowned.
          Situated in the city center, the university has impressive buildings.
          Although a big portion of the campus was closed during my winter break visit, I highly recommend if you’re
          already in New Haven during the semester.
          Unfortunately, I was unable to visit the campus during the day.
        </p>
        <ArticleImage id="yale-images" :images="[
          { path: '/images/places/new-haven-connecticut/yale1.jpeg', alt: 'Yale University campus' },
          { path: '/images/places/new-haven-connecticut/yale2.jpeg', alt: 'Another picture of the campus' },
          { path: '/images/places/new-haven-connecticut/yale3.jpeg', alt: 'Sorry for the bad lighting...' },
          { path: '/images/places/new-haven-connecticut/yale4.jpeg', alt: '...you guessed it.' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="italian-culture" header="Italian Culture">
        <p>
          New Haven is known for its exceptional pizza, regarded as one of the best in the country.
          The most popular restaurant, <i>Frank Pepe Pizzeria Napoletana</i>, is situated at Wooster Square. During my
          visit, there was a queue at the entrance for approximately one hour, so be prepared…
          I drove to Hartford, Connecticut, instead to visit another Frank Pepe location, which conveniently was on my
          way back home.
          The pizza was indeed really good, with ingredients that appeared fresh and authentic.
          In my opinion, it was the best pizza that I had in the United States, and the most authentic Italian.
          In an article from <i>The Guardian</i>, they rank Frank Pepe’s as the best pizza restaurant in the world, but
          in my opinion Italy definitely offers superior restaurants.
          I would also recommend visiting Libby’s Italian Pastry Shop, also located at Wooster Square next to Frank
          Pepe’s. The queue at Libby’s was relatively manageable.

        </p>
        <ArticleImage id="italian-images" :images="[
          { path: '/images/places/new-haven-connecticut/italian1.jpeg', alt: 'Sculpture that was built for Italian immigrants' },
          { path: '/images/places/new-haven-connecticut/italian2.jpeg', alt: 'Frank Pepe\'s pizza' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>
          New Haven is a small city with a stunning coastline and a great food scene.
          I can definitely recommend this place. They have one of the best pizza restaurants in
          the country, but be prepared to wait in line.
          If you’re planning a trip to New York City and you’re coming from the north, you might want to squeeze in a
          quick visit to New Haven.
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';


</script>