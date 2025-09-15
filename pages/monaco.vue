<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Monaco</h1>
      <p class="header-text">
        Monaco is a microstate at the French Riviera with a population of approximately 40,000. The place basically only
        serves as a tax haven for wealthy people, and it's full of luxury yachts, cars, stores, and hotels. If you want
        to feel poor for one day, you should definitely go there!
      </p>
    </template>
    <template #body>
      <ArticleSection id="arrival" header="Arrival">
        <p>I stayed at an Airbnb in Menton, a town located next to Monaco, as Monaco is basically unaffordable for a
          student. From there you can get to Monaco by train, bus, or car.</p>
      </ArticleSection>
      <ArticleSection id="monte-carlo" header="Monte-Carlo">
        <p>Monte-Carlo is an administrative area of Monaco and the place where all the tourists are. There you'll find
          lot's of the luxury stores and hotels, and the Monte-Carlo Casino.</p>
      </ArticleSection>
      <ArticleSubSection id="monte-carlo-casino" header="Monte-Carlo Casino">
        <p>This is the place to go if you’ want to feel poor. I saw individuals there throwing away more than €10,000 in
          a single night. The casino has a dress code, which you can find on their website. In the evening, the place in
          front of the casino serves as a parking lot for luxury cars. The casino is over 200 years old and looks very
          prestigious inside. Taking photos there is prohibited, but I did it anyway, as I always do. 😊 </p>
        <ArticleImage id="casino-images1" :images="[
          { path: '/images/places/monaco/casino1.jpeg', alt: 'Monte-Carlo Casino from outside' },
        ]"></ArticleImage>
        <ArticleImage id="casino-images2" :images="[
          { path: '/images/places/monaco/casino2.jpeg', alt: 'Monte-Carlo Casino Entrance Hall Interior' },
          { path: '/images/places/monaco/casino3.jpeg', alt: 'Monte-Carlo Casino Roulette Tables' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="luxury-stores" header="Luxury Stores">
        <p>Next to the casino are all the luxury clothing stores, including Louis Vuitton, Prada, Fendi, and so on.</p>
        <ArticleImage id="luxury-stores1" :images="[
          { path: '/images/places/monaco/boulingrins1.jpeg', alt: 'Louis Vuitton Store' },
          { path: '/images/places/monaco/boulingrins2.jpeg', alt: 'Other luxury stores near the Casino' },
        ]"></ArticleImage>
        <p>On the other side of the road, you’ll find a variety of watch and jewelry stores, including brands
          like Rolex and Jacob & Co. The prices of the watches below start at €300,000.</p>
        <ArticleImage id="crazy-watches-images" :images="[
          { path: '/images/places/monaco/watch1.jpeg', alt: 'Jacob & Co. Bugatti Chiron Tourbillon' },
          { path: '/images/places/monaco/watch2.jpeg', alt: 'Jacob & Co. Astronomia Revolution' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="f1-track" header="F1 Track">
        <p>The <i>Circuit de Monaco</i> is an F1 Track that goes through Monte-Carlo and La Condamine. The track is
          served as a normal road when there is no race.</p>
        <ArticleImage id="f1-track-images" :images="[
          { path: '/images/places/monaco/f1_track2.jpeg', alt: 'F1 Track near the Casino 1' },
          { path: '/images/places/monaco/f1_track1.jpeg', alt: 'F1 Track near the Casino 2' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="supercars" header="Supercars">
        <p>You'll see all kinds of supercars in the area. Here is a small preview:</p>
        <ArticleImage id="supercars-images" :images="[
          { path: '/images/places/monaco/car1.jpeg', alt: 'Koenigsegg Jesko' },
          { path: '/images/places/monaco/car6.jpeg', alt: 'Bugatti Veyron' },
          { path: '/images/places/monaco/car5.jpeg', alt: 'Idk wtf this is' },
          { path: '/images/places/monaco/car7.jpeg', alt: 'Lamborghini Aventador from Oman' },
          { path: '/images/places/monaco/car8.jpeg', alt: 'Rolls Royce Phantom from Dubai' },
          { path: '/images/places/monaco/car9.jpeg', alt: 'Brabus G-Class from the UK' },
          { path: '/images/places/monaco/car10.jpeg', alt: 'Ferrari LaFerrari from Switzerland' },
          { path: '/images/places/monaco/car4.jpeg', alt: 'Aston Martin DB9 from Monaco' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="little-africa-gardens" header="Little Africa Gardens">
        <p>Opposite to the casino are the <i>Little Africa Gardens</i>. They're nothing special but nice to stroll
          around.
        </p>
        <ArticleImage id="little-africa-gardens-images" :images="[
          { path: '/images/places/monaco/african_garden1.jpeg', alt: 'Sculpture at the garden' },
          { path: '/images/places/monaco/african_garden2.jpeg', alt: 'Sculpture at the garden' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="japanese-gardens" header="Japanese Gardens">
        <p>The Japanese Gardens also quite cute. They are actually part of Lavrotto, another part of Monaco, but I
          included them here because I didn’t go further.</p>
        <ArticleImage id="japanese-garden-images" :images="[
          { path: '/images/places/monaco/japanese_garden.jpeg', alt: 'View at the garden' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="la-condamine" header="La Condamine">
        <p>This is the location of the F1 start/finish line. It is also situated next to the <i>Port
            Hercules</i>, which serves as the parking lot for all the yachts.</p>
        <ArticleImage id="yachts-images" :images="[
          { path: '/images/places/monaco/yacht1.jpeg', alt: 'Boat for ADHD people' },
          { path: '/images/places/monaco/yacht2.jpeg', alt: 'A few yachts' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="monaco-city" header="Monaco City">
        <p>This is the old town of Monaco, which looks much different than all the other areas. It is also home to all
          of Monaco’s
          political institutions.
        </p>
      </ArticleSection>
      <ArticleSubSection id="princes-palaces" header="Prince's Palace of Monaco">
        <p>The Prince’s Palace, a part of the old town, serves as the residence of the Prince of Monaco. At the
          entrance, you’ll encounter a few guards and lots of cannons.</p>
        <ArticleImage id="palace-images1" :images="[
          { path: '/images/places/monaco/palace1.jpeg', alt: 'Prince\'s Palace' },
        ]"></ArticleImage>
        <ArticleImage id="palace-images2" :images="[
          { path: '/images/places/monaco/palace2.jpeg', alt: 'The Cannons at the Palace' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="view-from-the-palace" header="View from the Palace">
        <p>You can also enjoy a view of Port Hercules and La Condamine from the palace.</p>
        <ArticleImage id="monaco-city-images1" :images="[
          { path: '/images/places/monaco/monaco_city1.jpeg', alt: 'View at Port Hercules' },
        ]"></ArticleImage>
        <ArticleImage id="monaco-city-images2" :images="[
          { path: '/images/places/monaco/monaco_city2.jpeg', alt: 'View at La Condamine' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="old-town" header="Old Town">
        <p>The rest of the old town is full narrow streets with souvenir shops and restaurants.</p>
        <ArticleImage id="old-town-images" :images="[
          { path: '/images/places/monaco/old_town1.jpeg', alt: 'Rue de L\'Eglise' },
          { path: '/images/places/monaco/old_town2.jpeg', alt: 'Rue des Remparts' },
          { path: '/images/places/monaco/old_town3.jpeg', alt: 'Ruelle de la Fonderie' },
          { path: '/images/places/monaco/old_town4.jpeg', alt: 'Rue Basse' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="cathedral" header="Cathedral of our Lady Immaculate">
        <p>This is a Catholic Church and the burial place of the Grimaldi family members, i.e. the royal
          family of Monaco.</p>
        <ArticleImage id="old-town-images" :images="[
          { path: '/images/places/monaco/cathedral1.jpeg', alt: 'Outside' },
          { path: '/images/places/monaco/cathedral2.jpeg', alt: 'Inside' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="oceanographic-museum" header="Oceanographic Museum">
        <p>If you’re interested in marine sciences, there’s also the <i>Oceanographic Museum</i>. The admission fee is
          €22.50 for adults, as of 2025. Unfortunately, I haven’t had the time to visit it yet.</p>
      </ArticleSubSection>
      <ArticleSection id="food" header="Food">
        <p>As you can imagine, the restaurants there are quite expensive, just like everything else. So, I decided to
          buy food at the Carrefour supermarket in La Condamine. It’s conveniently located and easy to reach.</p>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>I enjoyed it 😊. I saw a few expensive cars and watches, and I even won at the casino!</p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>