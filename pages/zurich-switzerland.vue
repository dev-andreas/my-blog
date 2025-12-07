<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Zurich, Switzerland</h1>
      <p class="header-text">
        With a population of 436.551, Zurich is the largest city in Switzerland.
        The city is located in northern Switzerland, and its official language is German.
        Zurich is a global center for banking and finance, and as of 2025, ranked as the third most expensive city in the world.
        Additionally, Zurich is home to the chocolate manufacturer Lindt. (It's actually located in Kilchberg, a small municipality next to Zurich, but we ignore that...)
      </p>
    </template>
    <template #body>
      <ArticleSection id="arrival" header="Arrival">
        <p>
          I got to Zurich by train, which I would recommend.
          The trains in Switzerland are really nice and punctual, and you can stare out of the window to see the beautiful swiss landscapes.
          The central train station (Zürich HB) was one of the best looking and cleanest train stations I've ever seen.
          Overall, it was a good first impression!
          If you're coming from further away, Zurich also has an Airport nearby.
        </p>
        <ArticleImage id="arrival-images" :images="[
          { path: '/images/places/zurich/arrival.jpeg', alt: 'Zürich HB Entrance' },
        ]"></ArticleImage>
        <ArticleImage id="arrival-images2" :images="[
          { path: '/images/places/zurich/arrival2.jpeg', alt: 'Underground Stations' },
          { path: '/images/places/zurich/arrival3.jpeg', alt: 'Inside Zürich HB' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="downtown" header="Downtown"></ArticleSection>
      <ArticleSubSection id="bahnhofstrasse" header="Bahnhofstrasse">
        <p>
          Once you get out of the train station, you can walk along the Bahnhofstrasse, which is one of the most luxurious and expensive shopping avenues in the world.
          You can find all the major Swiss watch brands, fashion boutiques, chocolatiers, and souvenir shops.
          It's a great place if you're a watch guy, or if you have too much money.
        </p>
        <ArticleImage id="bahnhofstrasse-images" :images="[
          { path: '/images/places/zurich/bahnhofstrasse1.jpeg', alt: 'Bahnhofstrasse' },
          { path: '/images/places/zurich/bahnhofstrasse2.jpeg', alt: 'Rolex Store' },
          { path: '/images/places/zurich/bahnhofstrasse3.jpeg', alt: 'Ressence Oil Watch' },
          { path: '/images/places/zurich/bahnhofstrasse4.jpeg', alt: 'Rolex Daydate' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="lindenhof" header="Lindenhof">
        <p>
          If you're walking along Bahnhofstrasse, away from the train station, you may want to turn left at the Rolex store into Kuttelgasse.
          This way, you'll get to Lindenhof, a small park with a great view over downtown Zurich.
          The place is very touristy, but it's still worth seeing.
          The area around Lindenhof has narrow alleys with lots of small shops to explore.
          Additionally, there is an Apple Store nearby at Rennweg.
        </p>
        <ArticleImage id="lindenhof-images" :images="[
          { path: '/images/places/zurich/lindenhof.jpeg', alt: 'View from Lindenhof' },
        ]"></ArticleImage>
        <ArticleImage id="lindenhof-images2" :images="[
          { path: '/images/places/zurich/rennweg1.jpeg', alt: 'Apple Store Rennweg' },
          { path: '/images/places/zurich/rennweg2.jpeg', alt: 'Walk up to Lindenhof' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="grossmuenster" header="Grossmünster">
        <p>
          If you want an even nicer view over Zurich without too many tourists, you should walk up the Grossmünster, a church on the other side of the Limmat River.
          I assume that most tourists don't know that you can walk up there, or are simply too lazy.
          Walking up the tower takes about 15 minutes and isn't too exhausting.
          The entrance fee for adults is CHF 5, and CHF 2 for students, as of 2025.
        </p>
        <ArticleImage id="grossmuenster-images" :images="[
          { path: '/images/places/zurich/grossmuenster2.jpeg', alt: 'View over Zurich' },
        ]"></ArticleImage>
        <ArticleImage id="grossmuenster-images2" :images="[
          { path: '/images/places/zurich/grossmuenster3.jpeg', alt: 'Walking up the Grossmünster Tower' },
          { path: '/images/places/zurich/grossmuenster1.jpeg', alt: 'At the top' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="polybahn" header="Polybahn">
        <p>
          The Polybahn is a funicular that connects the city center with the ETH Zurich campus.
          You can use it with the regular public transport ticket.
          What makes this funicular unique is its crooked design.
          It’s fun to ride it once!
          The station at the top is located near the ETH Zurich main building, which you should also check out (if you want free toilets).
        </p>
        <ArticleImage id="polybahn-images" :images="[
          { path: '/images/places/zurich/polybahn1.jpeg', alt: 'Polybahn' },
          { path: '/images/places/zurich/polybahn2.jpeg', alt: 'Going up' },
        ]"></ArticleImage>
        <ArticleImage id="eth-images" :images="[
          { path: '/images/places/zurich/eth.jpeg', alt: 'ETH Zurich' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="quaibrücke" header="Bürkliplatz/Quaibrücke">
        <p>
          You might also want to walk across the Quaibrücke (Quai Bridge) for another beautiful view of the city.
          Additionally, there’s the Bürkliplatz, a nearby pier, where you can take a ferry across the lake.
        </p>
        <ArticleImage id="quaibrücke-images" :images="[
          { path: '/images/places/zurich/quaibrücke.jpeg', alt: 'Quaibrücke' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="zurich-lake" header="Zurich Lake">
        <p>
          The city center borders the Zurich Lake.
          I think the shores are a great place to relax or hang around in the summer.
          There are several parks in the area, and I also saw a weird looking sculpture called "Heureka".
          Unfortunately, it was already quite cold during my trip.
        </p>
        <ArticleImage id="seeuferweg-images" :images="[
          { path: '/images/places/zurich/seeuferweg2.jpeg', alt: 'Seeuferweg' },
        ]"></ArticleImage>
        <ArticleImage id="seeuferweg-images2" :images="[
          { path: '/images/places/zurich/heureka.jpeg', alt: 'Heureka Sculpture' },
          { path: '/images/places/zurich/seeuferweg1.jpeg', alt: 'A small pond that looked nice' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="chinese-garden" header="Chinese Garden">
        <p>
          While strolling along the shore, I noticed a large, odd-looking wall in the distance, so I decided to investigate.
          It turned out to be a park with old Chinese architecture!
          The garden is quite small, but the entrance was free.
        </p>
        <ArticleImage id="chinese-garden-images" :images="[
          { path: '/images/places/zurich/chinese_garden2.jpeg', alt: 'Chinese Garden (1)' },
          { path: '/images/places/zurich/chinese_garden1.jpeg', alt: 'Chinese Garden (2)' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="lindt-chocolate-museum" header="Lindt Chocolate Museum">
        <p>
          The following day, I visited the Lindt Chocolate Museum, officially known as “Lindt Home of Chocolate.”
          Located in Kilchberg, a municipality at the Zurich Lake, the museum is easily accessible by bus or ferry.
          I highly recommend taking the ferry, as it’s conveniently included in the public transport ticket.
          However, it’s important to note that Kilchberg is situated in a different Zone, so you may need to upgrade your ticket if you plan to visit the museum.
          I would also suggest booking your visit in the morning to avoid the crowds.
        </p>
        <p>
          In the entrance hall, there is a huge chocolate fountain, a chocolate store, and a café.
          During the tour, you'll learn about the history of chocolate and how it is made.
          Afterwards, you'll get lots of chocolate samples to taste 🍫🤗.
        </p>
        <ArticleImage id="lindt-chocolate-museum-images" :images="[
          { path: '/images/places/zurich/chocolate_museum6.jpeg', alt: 'Chocolate Fountain' },
          { path: '/images/places/zurich/chocolate_museum7.jpeg', alt: 'Outside Building' },
          { path: '/images/places/zurich/chocolate_museum3.jpeg', alt: 'Chocolate Samples' },
          { path: '/images/places/zurich/chocolate_museum4.jpeg', alt: 'Chocolate Samples' },
          { path: '/images/places/zurich/chocolate_museum5.jpeg', alt: 'Cocoa Bean Model' },
          { path: '/images/places/zurich/chocolate_museum1.jpeg', alt: 'Café at the Entrance' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="food" header="Food">
        <p>
          Food is quite expensive there, so I mostly went to grocery stores.
          There are a few nice restaurants and cafés at Niederdorf, a district of Zurich.
          During noon, I visited Café Henrici and ordered a small spicy espresso for CHF 6.
          The espresso was great though.
          In the evening, I went to Raclette Factory to try Raclette for my first time.
          The dish consists of bread or potatoes covered with cheese.
          I liked it, but I think there are better cheese dishes.
          The total cost, excluding the tip, was CHF 23.90 for the Raclette and a bottle of water.
        </p>
        <ArticleImage id="food-images" :images="[
          { path: '/images/places/zurich/food1.jpeg', alt: 'Café Henrici' },
          { path: '/images/places/zurich/food2.jpeg', alt: 'Raclette Factory' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="accomodation" header="Accomodation">
        <p>
          I stayed at the Zurich Youth Hostel (Jugendherberge Zürich), which was clean and quiet.
          They also included a breakfast buffet in the price.
        </p>
        <ArticleImage id="accomodation-images" :images="[
          { path: '/images/places/zurich/hostel.jpeg', alt: 'Breakfast at the Hostel' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="public-transport" header="Public Transport">
        <p>
          Public transport in Zurich is excellent.
          You can use buses, trams, and even ferries with a single ticket.
          The polybahn is also included.
          For travelers, I highly recommend the 24-hour ticket.
          The transport system in the canton of Zurich is divided into zones.
          The city of Zurich consists of two zones, so you have to pay the fare for two.
          If you’re planning to visit the Lindt chocolate museum, you’ll need to pay for a third zone since it’s located outside of the city.
        </p>
        <ArticleImage id="public-transport-images" :images="[
          { path: '/images/places/zurich/public_transport1.jpeg', alt: 'Ferry' },
          { path: '/images/places/zurich/public_transport2.jpeg', alt: 'Tram' },
          { path: '/images/places/zurich/public_transport3.jpeg', alt: 'Small Ferry' },
          { path: '/images/places/zurich/public_transport4.jpeg', alt: 'Bus' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>
          To keep it short, Zurich is a lovely city, and it’s definitely worth a visit.
        </p>
      </ArticleSection>
    </template>
    </BlogArticle>
</template>
<script setup lang="ts">
</script>