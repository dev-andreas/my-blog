<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Miami, Florida</h1>
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
      <ArticleSection id="miami-beach" header="Miami Beach">
        <p>I took the metrorail to downtown, where I went onto a bus that took me to Miami Beach. The place is enormous,
          and I spent an entire day exploring all the interesting places at the island.
        </p>
        <ArticleImage id="miami-beach-images" :images="[
          { path: '/images/places/miami-florida/beach2.jpeg', alt: 'Miami Coast at South Beach' },
          { path: '/images/places/miami-florida/beach1.jpeg', alt: 'Some luxurious Hotels' },
          { path: '/images/places/miami-florida/beach3.jpeg', alt: 'Collins Park' },
          { path: '/images/places/miami-florida/beach4.jpeg', alt: 'Some more luxurious Hotels' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSubSection id="south-beach" header="South Beach">
        <p>You should consider staying in a place near <i>South Beach</i>, because this is where most of the stuff
          happens.
          Here, you’ll find a vibrant nightlife with numerous bars and restaurants, as well as an outdoor gym right on
          the beach. I stayed at a place called <i>Generator Hotel Miami</i>, however that was further away from South
          Beach and I had to walk for a while. It was still good though. A friend of mine stayed at a place called
          <i>Viajero Hostels Miami</i>, which was also nice and next to South Beach. If you don't mind sleeping in
          hostels, you should consider the latter.
        </p>
        <ArticleImage id="south-beach-images" :images="[
          { path: '/images/places/miami-florida/south_beach1.jpeg', alt: 'Bars and Hotels at South Beach' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="food" header="Food">
        <p>You can find a wide variety of food options at the beach. There are many restaurants. Even a Döner Kebap
          restaurant was there. For snacks, I went to a place called <i>Triton Supermarket</i>, which was conveniently
          located
          next to my hotel. Most of the stuff there was incredibly cheap.
        </p>
        <ArticleImage id="lizard-images" :images="[
          { path: '/images/places/miami-florida/food1.jpeg', alt: 'Döner Kebap' },
          { path: '/images/places/miami-florida/food2.jpeg', alt: 'Huge Pizza Slice' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="lizards" header="Lizards">
        <p>I also spotted several lizards running around the beach. I gave them Pokémon names!
        </p>
        <ArticleImage id="lizard-images" :images="[
          { path: '/images/places/miami-florida/lizard1.jpeg', alt: 'Sceptile' },
          { path: '/images/places/miami-florida/lizard2.jpeg', alt: 'Charmander' },
          { path: '/images/places/miami-florida/lizard3.jpeg', alt: 'Axew' },
          { path: '/images/places/miami-florida/lizard4.jpeg', alt: 'Salazzle' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="downtown" header="Downtown">
        <p>On my last day in Downtown Miami, I visited the area. It was quite car-centric, with nothing particularly
          special to offer. There are just plenty of tall buildings. I would recommend staying at Miami Beach as a
          tourist.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/miami-florida/downtown2.jpeg', alt: 'Biscayne Blvd' },
          { path: '/images/places/miami-florida/downtown1.jpeg', alt: '700 N Miami Ave' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSubSection id="wynwood" header="Wynwood">
        <p>The only place I would recommend visiting in downtown is the <i>Wynwood District</i>. It’s home to numerous
          buildings
          covered in
          graffiti, as well as many bars and restaurants. I also saw some insane cars, like a monster truck, and this
          cool Golf GTI.</p>
        <ArticleImage id="wynwood-images" :images="[
          { path: '/images/places/miami-florida/wynwood4.jpeg', alt: '28 NW 28th St' },
          { path: '/images/places/miami-florida/wynwood3.jpeg', alt: 'Nice GTI' },
          { path: '/images/places/miami-florida/wynwood2.jpeg', alt: '391 NW 24th St' },
          { path: '/images/places/miami-florida/wynwood1.jpeg', alt: '313 NW 25th St' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>Miami Beach is a nice destination for beach vacations. However, it’s best to avoid visiting during the
          summer months due to the insane heat. Additionally, I highly recommend avoiding traveling to Miami Beach by
          Amtrak train. Just take a plane like every other normal person.
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';
import ArticleSubSection from '~/components/ArticleSubSection.vue';

</script>