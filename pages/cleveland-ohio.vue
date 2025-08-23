<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Cleveland, Ohio</h1>
      <p class="header-text">
        At first glance, Cleveland appears to be just another ordinary city in the United States, but there are actually
        numerous activities and attractions to discover.
        It has the Cleveland Museum of Art, which is one of the most visited art museums in the world, and the Playhouse
        Square, which contains one of the largest theaters in the USA.
        The city has a population of around 350,000 people.
        I would recommend staying for 1-2 days to get the most out of it. I stayed there for one day.
      </p>
    </template>
    <template #body>
      <ArticleSection id="downtown" header="Downtown">
        <p>
          I arrived in Cleveland during the evening, when it was snowing. The city looked like any other random city in
          the United States.
          However, the downtown area of Cleveland is home to Playhouse Square, a theater district.
          You can enjoy musicals, plays, concerts, comedy shows, and ballet performances.
          While I was unable to allocate the time to visit, I highly recommend checking out Playhouse Square if you have
          an interest in theaters.
          It is one of the largest performing arts centers in the United States.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/cleveland-ohio/playhouse_square1.jpeg', alt: 'Playhouse Square' },
          { path: '/images/places/cleveland-ohio/general1.jpeg', alt: 'A park near downtown' },
          { path: '/images/places/cleveland-ohio/general2.jpeg', alt: 'Downtown' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="museum-of-art" header="Museum of Art">
        <p>
          The Cleveland Museum of Art was the highlight of the trip. It's the fourth wealthiest art museum in the United
          States and one of the most visited in the world. Additionally, the museum has free admission! It houses a huge
          collection of paintings and sculptures from various cultures worldwide. I would say it’s one of the finest art
          museums I’ve ever visited so far.

        </p>
        <ArticleImage id="museum-of-art-images" :images="[
          { path: '/images/places/cleveland-ohio/museum1.jpeg', alt: 'Medieval European knight and horse armor' },
          { path: '/images/places/cleveland-ohio/museum3.jpeg', alt: 'Painting from Van Gogh' },
          { path: '/images/places/cleveland-ohio/museum2.jpeg', alt: 'Medieval crossbow' },
          { path: '/images/places/cleveland-ohio/museum4.jpeg', alt: 'Painting from Piet Mondrian' },
          { path: '/images/places/cleveland-ohio/museum5.jpeg', alt: 'Sculpture of a lion from India' },
          { path: '/images/places/cleveland-ohio/museum6.jpeg', alt: 'African mask' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="garfield-memorial" header="Garfield Memorial">
        <p>
          Cleveland has the Lake View Cemetery, the final resting place of the assassinated President James A. Garfield.
          The enormous cemetery is easily accessible by car, but it lacks nearly any sidewalks. (Yes, even American
          cemeteries are car-centric…) If you have the time, I recommend visiting. Unfortunately, the memorial was
          closed during my visit.
        </p>
        <ArticleImage id="memorial-images" :images="[
          { path: '/images/places/cleveland-ohio/cemetery1.jpeg', alt: 'Outside of the Garfield Memorial' },
          { path: '/images/places/cleveland-ohio/cemetery2.jpeg', alt: 'View of the Lake View Cemetery' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        The Cleveland Museum of Art was undoubtedly the highlight of my trip and the primary reason I would highly
        recommend visiting Cleveland.
        Apart from the museum, the city itself appeared quite clean and had an efficient bus network, particularly in
        the downtown area.
        If you find yourself in the vicinity and are interested in art museums or theaters, I suggest you
        make a stop in Cleveland. In my case, I visited the city as a convenient detour on my way back home from Chicago.
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';


</script>