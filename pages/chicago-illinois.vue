<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Chicago, Illinois</h1>
      <p class="header-text">
        Chicago, with a population of around 2.7 million people (as of 2025), ranks as the third most populous city in
        the United States and the most populous in the Midwestern region. Considering its size, I suggest a 4-day stay.
        Additionally, be prepared for cold weather during the winter by wearing warm clothing.
      </p>
    </template>
    <template #body>
      <ArticleSection id="downtown" header="Downtown">
        <p>
          Chicago’s downtown is situated along the shores of Lake Michigan, with the Chicago River flowing through the
          city. The city itself appeared clean, at least much cleaner than New York City. Interestingly,
          the trains run above the road, which I saw there the first time, but they were also quite noisy. I stayed at a
          hostel called HI USA, which I can definitely recommend. I met some cool people there.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/chicago-illinois/downtown2.jpeg', alt: 'Chicago River' },
          { path: '/images/places/chicago-illinois/downtown3.jpeg', alt: 'Trump Tower 🤮' },
          { path: '/images/places/chicago-illinois/downtown4.jpeg', alt: 'Apple Store Michigan Avenue' },
          { path: '/images/places/chicago-illinois/downtown1.jpeg', alt: 'Railway track above the road' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSubSection id="millenium-park" header="Millenium Park">
        <p>
          If you visit the city, take a look at Millennium Park, which contains a massive outdoor theater and the iconic
          Cloud Gate sculpture,
          resembling a silver bean. If you plan a winter visit to Chicago, you can enjoy ice skating at the park.
          Nearby, there are other parks, such as Grant Park, containing a huge fountain and beautiful rose garden.
          Unfortunately, the fountain was not functioning during the winter season.
        </p>
        <ArticleImage id="millenium-park-images" :images="[
          { path: '/images/places/chicago-illinois/cloud_gate1.jpeg', alt: 'Cloud Gate during the day' },
          { path: '/images/places/chicago-illinois/cloud_gate2.jpeg', alt: 'Cloud Gate during the night' },
          { path: '/images/places/chicago-illinois/millenium_park1.jpeg', alt: 'Millenium Park during winter' },
          { path: '/images/places/chicago-illinois/millenium_park2.jpeg', alt: 'Ice Rink at Millenium Park' },
        ]"></ArticleImage>


      </ArticleSubSection>
      <ArticleSubSection id="chicago-harbor" header="Chicago Harbor">
        <p>
          I also enjoyed strolling along the Chicago Harbor. From there, you can see the city’s skyline.
          However, be prepared for strong winds, especially during the winter months, so make sure to wear appropriate
          clothing.
        </p>
        <ArticleImage id="chicago-harbor-images" :images="[
          { path: '/images/places/chicago-illinois/coast1.jpeg', alt: 'View at Navy Pier' },
          { path: '/images/places/chicago-illinois/coast2.jpeg', alt: 'View with skyline' },
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="deep-dish-pizza" header="Deep-Dish Pizza">
        <p>
          Chicago is renowned for its <i>deep-dish pizza</i>, a pizza with a distinctive high edge and large amounts of
          cheese and tomato sauce. It resembles a cake more than a traditional pizza.
          I'm not very surprised about the country's obesity rates anymore...
          To not feel too unhealthy, I ordered a spinach pizza 😊.
          But jokes aside, this pizza requires two people to share.
          I think it was good and worth trying at least once if you’re in Chicago. I went to Giordano’s.
        </p>
        <ArticleImage id="school-of-design-museum-images" :images="[
          { path: '/images/places/chicago-illinois/deep_dish_pizza1.jpeg', alt: 'Deep-Dish Pizza' },
          { path: '/images/places/chicago-illinois/deep_dish_pizza2.jpeg', alt: 'Inside of the pizza' },
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="museums" header="Museums"></ArticleSection>
      <ArticleSubSection id="museum-of-science-and-industry" header="Museum of Science and Industry">
        <p>
          The <i>Griffin Museum of Science and Industry</i> has a diverse range of exhibits, including on
          manufacturing, physics, the human body, and more.
          I think that many of the exhibits are tailored for younger audiences, making it a great
          destination for families with children.
          As of 2025, admission fees are $25.95 for adults and $14.95 for children aged 3 to 11. However, special
          exhibits like the coal mine tour and submarine tour have additional costs.
          I personally find the extra charges not to be worth it unless you or your children are genuinely interested in
          those specific topics.
          For everyone else, I recommend exploring other museums in Chicago, such as the Art Institute of
          Chicago or the Field Museum of Natural History.
          Although I haven’t had the opportunity to visit them, I would personally choose them instead if I could visit
          Chicago again.
        </p>
        <ArticleImage id="museum-of-science-and-industry-images" :images="[
          { path: '/images/places/chicago-illinois/museum1.jpeg', alt: 'German U-505 Submarine from WW2' },
          { path: '/images/places/chicago-illinois/museum3.jpeg', alt: 'US fighter plane from WW2' },
          { path: '/images/places/chicago-illinois/museum2.jpeg', alt: 'Old Mercedes Car' },
          { path: '/images/places/chicago-illinois/museum4.jpeg', alt: 'Interesting bicycle concept' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="fed-money-museum" header="Fed's Money Museum">
        <p>
          The <i>Fed’s Money Museum</i>, though free, requires visitors to present a photo ID and undergo a metal
          detector screening.
          It's a relatively small museum where you can see different currencies and learn some
          general background knowledge about the US Dollar and other currencies.
          A highlight of the museum is the display of a million dollars in $1 bills, $20 bills, and $100 bills. Visitors
          can also take home a bag of shredded dollar bills as a free souvenir.
          Considering its free admission, I highly recommend visiting the Fed’s Money Museum.
        </p>
        <ArticleImage id="fed-money-museum-images" :images="[
          { path: '/images/places/chicago-illinois/fed1.jpeg', alt: 'A million $1 dollar bills' },
          { path: '/images/places/chicago-illinois/fed4.jpeg', alt: 'Shredded dollar bills' },
          { path: '/images/places/chicago-illinois/fed2.jpeg', alt: 'One German Mark' },
          { path: '/images/places/chicago-illinois/fed3.jpeg', alt: 'Ten German Marks' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="public-transport" header="Public Transport">
        <p>
          Chicago has a relatively reliable and affordable public transportation system.
          As of 2025, the “L” trains, which operate above the road, charge $2.50. If you’re arriving from the
          airport, you’ll need to pay $5 for the “L” train. Bus fares are $2.25.
          Additionally, up to two transfers within a two-hour period are free. You can make payments using cash or
          credit cards at either the bus or train station.
        </p>
        <ArticleImage id="school-of-design-museum-images" :images="[
          { path: '/images/places/chicago-illinois/subway1.jpeg', alt: 'Train station at the airport' },
          { path: '/images/places/chicago-illinois/subway2.jpeg', alt: 'Train driving above the road' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>
          Chicago was one of my most favourite cities in the USA and I can definitely recommend visiting.
          It has an impressive skyline, a huge park, and a variety of museums to explore.
          Just make sure to wear warm clothing during the winter.
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';

</script>