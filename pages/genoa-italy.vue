<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Genoa, Italy</h1>
      <p class="header-text">
        Genoa is the capital of the Liguria region and home to about 600,000 people. Located at the Mediterranean Sea,
        it has one of the busiest ports and one of the highest population densities in Europe. Additionally, parts
        of the old town of Genoa are recognized as a UNESCO World Heritage Site. If you’re planning a visit, I suggest
        spending 2 days exploring the city and its surroundings.
      </p>
    </template>
    <template #body>
      <ArticleSection id="arrival" header="Arrival">
        <p>I traveled to Genoa with seven friends, so finding a place that could fit all of us was a bit of a challenge.
          We ended up at an Airbnb called <i>Sky On The Roofs</i> with a small rooftop terrace. There was also a
          stunning church right next to our Airbnb called <i>Chiesa di Santa Maria Maddalena</i>. If you’re traveling
          solo or with a smaller group, I highly recommend checking out Hotel/Hostel recommendations on Reddit. If you
          arrive by car, please note that the roads in the city are pretty narrow. We went there with a VW
          Transporter...</p>
        <ArticleImage id="arrival-images" :images="[
          { path: '/images/places/genoa/roof2.jpeg', alt: 'Airbnb Terrace at Night' },
          { path: '/images/places/genoa/airbnb2.jpeg', alt: 'Chiesa di Santa Maria Maddalena' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="downtown" header="Downtown"></ArticleSection>
      <ArticleSubSection id="alleyways" header="Narrow Alleyways (Caruggi)">
        <p>Genoa is a medieval city, and the streets in the city center are super narrow. Locals call them
          <i>Caruggi</i>. When
          I first walked inside, it felt like I was in a maze with lots of cafes, shops, and restaurants. Some of the
          streets were a bit run down and had an unpleasant smell here and there.
        </p>
        <ArticleImage id="alleyways-images" :images="[
          { path: '/images/places/genoa/alleyway1.jpeg', alt: 'Vico Lavagna 20 R' },
          { path: '/images/places/genoa/alleyway2.jpeg', alt: 'Vico degli Indoratori 17 R' },
          { path: '/images/places/genoa/alleyway3.jpeg', alt: 'Piazza di Fossatello' },
          { path: '/images/places/genoa/alleyway4.jpeg', alt: 'Via dei Macelli di Soziglia 36 R' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="piazza-de-ferrari" header="Piazza De Ferrari">
        <p><i>Piazza De Ferrari</i> is the main square of Genoa. There you'll find the government building, <i>Palazzo
            della Regione Liguria</i>, the <i>Doge's Palace</i>, a historic building which is now a museum, and a few
          other other buildings, such as a former stock exchange, <i>Palazzo della Borsa Valori</i>.</p>
        <ArticleImage id="piazza-de-ferrari-images" :images="[
          { path: '/images/places/genoa/piazza_de_ferrari1.jpeg', alt: 'Palazzo della Borsa Valori' },
          { path: '/images/places/genoa/piazza_de_ferrari2.jpeg', alt: 'Palazzo della Regione Liguria' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="cathedral" header="Cathedral of San Lorenzo">
        <p>Near the Piazza De Ferrari, there is the Cathedral of San Lorenzo. It's nothing too special though, I
          found the church next to my Airbnb more impressive.</p>
        <ArticleImage id="piazza-de-ferrari-images" :images="[
          { path: '/images/places/genoa/cathedral1.jpeg', alt: 'Exterior' },
          { path: '/images/places/genoa/cathedral2.jpeg', alt: 'Interior' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="via-garibaldi" header="Via Giuseppe Garibaldi">
        <p>This street is full of palaces and recognized as a UNESCO World Heritage Site. Yay!</p>
        <ArticleImage id="via-garibaldi-images" :images="[
          { path: '/images/places/genoa/strada_nuova1.jpeg', alt: 'Via Garibaldi' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="spianata" header="Spianata dell'Acquasola">
        <p>I found this park with a great view while exploring the city. You might
          want to check this out if you have the time.</p>
        <ArticleImage id="spianata-images" :images="[
          { path: '/images/places/genoa/spianata2.jpeg', alt: '' },
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="porto-antico" header="Porto Antico">
        <p><i>Porto Antico</i> is the port of Genoa. There are tons of nice restaurants and the second largest aquarium
          in Europe. Admission is €26 for adults. I didn't have the time to go there though. Additionally, you can take
          the <i>Bigo Panoramic Lift</i> to get a view over the city for €6. However, I would recommend to save that
          money and head to Spianata dell'Acquasola to get a great view for free.</p>
        <ArticleImage id="porto-antico-images" :images="[
          { path: '/images/places/genoa/port1.jpeg', alt: 'Bigo Panoramic Lift' },
          { path: '/images/places/genoa/port2.jpeg', alt: 'Cruise Ship' },
          { path: '/images/places/genoa/port3.jpeg', alt: 'Random Ancient Ship' },
          { path: '/images/places/genoa/port4.jpeg', alt: 'Cargo Ship' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="food" header="Food">
        <p>Now to the best part of the trip!
          You should try Focaccia bread, a Ligurian speciality. I got mine from a bakery at the Piazza di
          Fossatello. There are also a few cafes at the place where you can have coffee and great Italian pastries.
          For dinner I would recommmend going to <i>Rossopomodoro</i> at Porto Antico. You can enjoy the view at the
          port while eating. I got a Neapolitan Pizza with Buffalo Mozarella. There is also an ice cream
          shop called <i>La Voglia Matta</i> near the restaurant which I can recommend. Lastly, I found the store <i>Le
            delizie di San Matteo</i> that sells great Amaretti.</p>
        <ArticleImage id="food-images" :images="[
          { path: '/images/places/genoa/food1.jpeg', alt: 'Neapolitan Pizza with Buffalo Mozzarella' },
          { path: '/images/places/genoa/food5.jpeg', alt: 'Focaccia with Basil and Cheese' },
          { path: '/images/places/genoa/food2.jpeg', alt: 'Coffee with Cannoli' },
          { path: '/images/places/genoa/food3.jpeg', alt: 'Amaretti' },
          { path: '/images/places/genoa/food4.jpeg', alt: 'Lemon Ice Cream' },
          { path: '/images/places/genoa/food6.jpeg', alt: 'Croissant with Vanilla Filling' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="public-transport" header="Public Transport">
        <p>The city itself is quite compact and walkable, so you usually don’t need to use public transportation.
          However, if you want to explore places further from the center, the city has many bus lines and even a subway
          system.</p>
        <ArticleImage id="public-transport-images" :images="[
          { path: '/images/places/genoa/subway1.jpeg', alt: 'Metro' },
          { path: '/images/places/genoa/subway2.jpeg', alt: 'Metro Entrance' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>Genoa is not a must-see in Italy, but it’s a great stopover if you’re planning to travel further south or to
          the French Riviera.</p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>