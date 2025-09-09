<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Nice, France</h1>
      <p class="header-text">
        Miami is a coastal city with a tropical climate and has a population of around 500,000 people. As a tourist you
        usually stay at Miami Beach, an island next to downtown. The place is perfect for a beach holiday. I stayed in
        Miami Beach for three days during spring break in march
        and it was already over 30°C, so be prepared if you go there during summer. The humidity was also insane.
      </p>
    </template>
    <template #body>
      <ArticleSection id="arrival" header="Arrival">
        <p>I was crazy enough to take an Amtrak train from Massachusetts to Florida, which took me approximately 2.5
          days.
          Despite the rather large city, the train station of Miami was surprisingly small, with only a single rail
          track. Moreover, the only way of accessing the station was by car. There were also no sidewalks from the train
          station to the
          metrorail, which provides access to downtown and the beach, and I had to walk on the road sometimes. The area
          also looked super sketchy, with numerous broken cars on the roadside.</p>
        <ArticleImage id="arrival-images" :images="[
          { path: '/images/places/miami-florida/train_station1.jpeg', alt: 'Metrorail Entrance' },
          { path: '/images/places/miami-florida/train_station2.jpeg', alt: 'Train Station' },
        ]"></ArticleImage>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>