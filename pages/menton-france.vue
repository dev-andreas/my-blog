<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Menton, France</h1>
      <p class="header-text">
        Menton is a small town in the French Riviera with a population of approximately 30,000 people, located at
        the Mediterranean Sea between Monaco and the French-Italian border. The town’s location in the Alpes-Maritimes
        region makes it an ideal destination for beach vacations and a perfect lodging place for hiking trips.
      </p>
    </template>
    <template #body>
      <ArticleSection id="arrival" header="Arrival">
        <p>The town is a popular tourist destination, so you'll find lots of hotels and Airbnbs. I stayed at an
          Airbnb near the center. It has a train connection and a few bus lines. If you travel by car, note that
          the roads are very curvy and narrow.</p>
      </ArticleSection>
      <ArticleSection id="beach" header="Beach">
        <p>Menton has two beaches: One at the old-town, and a larger one at the <i>Promenade du Soleil</i>. There is
          also a boat port where you can rent Jet Skis if you're into that.</p>
        <ArticleImage id="beach-images1" :images="[
          { path: '/images/places/menton/coast3.jpeg', alt: 'View at Menton from the coast' },
        ]"></ArticleImage>
        <ArticleImage id="beach-images2" :images="[
          { path: '/images/places/menton/coast1.jpeg', alt: 'Coast' },
          { path: '/images/places/menton/coast2.jpeg', alt: 'Menton Lighthouse' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="downtown" header="Downtown">
        <p>The main street of Menton is <i>Rue Saint-Michel</i>, which goes through the old-town. There you'll find lots
          of small restaurants and shops. It's also the place where most of the tourists are. If you walk further onto
          <i>Avenue Félix Faure</i> you'll reach the more modern parts of town.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/menton/downtown3.jpeg', alt: 'Rue Saint-Michel' },
          { path: '/images/places/menton/downtown5.jpeg', alt: 'Menton sign at the beach' },
          { path: '/images/places/menton/downtown4.jpeg', alt: 'Jardins Biovès' },
          { path: '/images/places/menton/downtown6.jpeg', alt: 'Promenade du Soleil' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSubSection id="alleyways" header="Alleyways">
        <p>The old town of Menton consists of cute narrow alleyways with pastel-colored houses. Most parts of the old
          town
          are well maintained and clean.</p>
        <ArticleImage id="alleyways-images" :images="[
          { path: '/images/places/menton/downtown1.jpeg', alt: '1 Rue Acquassoma' },
          { path: '/images/places/menton/downtown2.jpeg', alt: '16 Rue de la Conception' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="basilica-st-michel" header="Basilica St. Michel">
        <p>The church is located at the old town. What I found cool is that the floor at the entrance is made up of
          small individual black and white stones.
        </p>
        <ArticleImage id="basilica-st-michel-images" :images="[
          { path: '/images/places/menton/basilica1.jpeg', alt: 'Basilica Entrance' },
          { path: '/images/places/menton/basilica2.jpeg', alt: 'Floor' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="cemetery" header="Vieux Château Cemetery">
        <p>If you walk further to the north, you'll reach the <i>Vieux Château Cemetery</i> with a great view over the
          old town and the coast.</p>
        <ArticleImage id="basilica-st-michel-images" :images="[
          { path: '/images/places/menton/cemetery1.jpeg', alt: 'View over the coast and the mountains' },
          { path: '/images/places/menton/cemetery2.jpeg', alt: 'View over the old town' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="hiking-trails" header="Hiking Trails">
        <p>Since Menton is located in the Alps, there are lots of nice hiking trails. I went on the
          hiking route <i>GR51 - DE MENTON À LA MADRAGUE</i>, which can be easily navigated using Apple Maps, Google
          Maps, or
          OpenStreetMap. Our starting point’s coordinates are
          43.79187° N, 7.51798° E. What makes this route special is the panoramic view of Menton and
          Monaco. Additionally, you’ll cross the French-Italian border at some point during your journey.
        </p>
        <ArticleImage id="hiking-trail-images" :images="[
          { path: '/images/places/menton/hiking2.jpeg', alt: 'View over Menton' },
          { path: '/images/places/menton/hiking3.jpeg', alt: 'View over Monaco' },
          { path: '/images/places/menton/hiking1.jpeg', alt: 'View at the French side' },
          { path: '/images/places/menton/hiking4.jpeg', alt: 'View at the Italian side' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="food" header="Food">
        <p>I must admit, I’m not a big fan of French cuisine. It’s mostly because I’m a vegetarian and I don't like
          eating frog legs or snails. However, I must say that they do make some delicious pastries and cheeses. I
          had a fantastic pistachio croissant at <i>Vanilla Bakery Menton</i>.</p>
        <ArticleImage id="food-images" :images="[
          { path: '/images/places/menton/food1.jpeg', alt: 'Pistachio Croissant' },
          { path: '/images/places/menton/food2.jpeg', alt: 'Chocolate Croissant' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection class="conclusion" header="Conclusion">
        <p>Menton is an ideal destination for hiking trips and beach vacations. It also serves as a convenient place to
          stay if you want to visit Monaco without getting bankrupt, as it’s located just a short distance away.
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>