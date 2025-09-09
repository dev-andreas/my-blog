<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">New York City, USA</h1>
      <p class="header-text">
        New York City (NYC) is by far the most poplous City in the United States and offers a variety of activities.
        It's a must-see if you're travelling on the east coast!
        Due to the enormous size, I would recommend staying for 3-5 days to really get the most out of it.
        I can recommend visiting NYC at any time of year, except during Thanksgiving, Christmas, and New
        Year's Eve.
        The city is really crowded during these times and it's difficult to visit tourist attractions.
      </p>
    </template>
    <template #body>
      <ArticleSection id="general-information" header="General Information">
        <p>
          NYC consists of the five boroughs Manhattan, Brooklyn, Queens, Bronx, and Staten Island.
          As of 2025, together they make up a population of around 8.8 million.
          Additionally, around 20 million people are living in it's metropolitan area, therefore also making it one of
          the
          worlds's most populous cities in the world.
          NYC has the tallest building in the United States: The One World Trade Center, and the world's largest stock
          exchange by market capitalization: The New York Stock Exchange (NYSE).
        </p>
      </ArticleSection>
      <ArticleSection id="exploring-manhattan" header="Exploring Manhattan">
        <p>
          Manhattan is the center of the city and that's where you probably spend most of your time if it's your first
          visit.
          Really take your time exploring Manhattan to see the neighboroods, buildings and iconic landmarks.
          Just walking around the borough and seeing all the different buildings is impressive for the
          first time.
          Manhattan itself is huge and exploring it can take a few days.
          Here are some of the interesting landmarks that I took photos of:
        </p>
        <ArticleImage id="general-places" :images="[
          { path: '/images/places/nyc/general1.jpeg', alt: 'St. Patrick\'s Cathredral' },
          { path: '/images/places/nyc/general3.jpeg', alt: 'Atlas (Statue at the Rockefeller Center)' },
          { path: '/images/places/nyc/general4.jpeg', alt: 'Rockefeller Plaza' },
          { path: '/images/places/nyc/general5.jpeg', alt: 'Washington Square Arch' },
          { path: '/images/places/nyc/general6.jpeg', alt: 'Empire State Building' },
          { path: '/images/places/nyc/general2.jpeg', alt: 'Chrysler Building' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSubSection id="central-park" header="Central Park">
        <p>
          The Central Park is is a huge urban park in the center of Manhattan.
          There are a lot of things to see there but when I arrived there, I had made no plan what to do.
          I just walked around and explored the park.
          I started in the south at the Heckscher Playground and walked up to the north to the Jacqueline Kennedy
          Onassis Reservoir.
        </p>
        <p>
          Unfortunately, I didn't have the time to see more, but there are a lot of activities to do in the park.
          There is the Central Park Zoo and the Metropolitan Museum of Art, the fourth-largest museum in the world and
          the most visited museum in the United States.
          There are also a variety gardens to see and sports to practice, such as tennis, basketball, boating, and even
          bouldering.
        </p>
        <ArticleImage id="central-park-images" :images="[
          { path: '/images/places/nyc/central_park2.jpeg', alt: 'Distant view of Manhattan in Central Park' },
          { path: '/images/places/nyc/central_park3.jpeg', alt: 'Jacqueline Kennedy Onassis Reservoir' },
          { path: '/images/places/nyc/central_park4.jpeg', alt: 'Heckscher Playground' },
          { path: '/images/places/nyc/central_park1.jpeg', alt: 'Bethestda Terrace' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="times-square" header="Times Square">
        <p>
          When exploring Manhattan, make sure to visit Times Square during the night.
          It's essentially an intersection with plenty of digital billboards and it looks pretty cool.
          Times Square is also one of the largest tourist attractions in the world, making the place very
          crowded.
        </p>
        <ArticleImage id="times-square-image" :images="[
          { path: '/images/places/nyc/times_square.jpeg', alt: 'Times Square during the night' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="chinatown" header="Chinatown">
        <p>
          If you walk towards the southern part of Manhattan, you should visit its Chinatown.
          It is home of around 100 thousand Chinese inhabitants and one of the largest Chinese communities in North
          America.
          You can try out a restaurant, visit a store, or just walk around and explore the buildings.
        </p>
        <ArticleImage id="chinatown-images" :images="[
          { path: '/images/places/nyc/chinatown1.jpeg', alt: 'Chinatown Sign' },
          { path: '/images/places/nyc/chinatown2.jpeg', alt: 'Some Restaurants' },
          { path: '/images/places/nyc/chinatown3.jpeg', alt: 'Random Streets' },
          { path: '/images/places/nyc/chinatown4.jpeg', alt: 'Random Streets' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="little-italy" header="Little Italy">
        <p>
          Little Italy is located next to Chinatown but I think you shouldn't spend too much time there.
          It's nice to walk through for a few minutes but there are actually almost no Italians living there anymore.
          As far as I know, there were many authentic Italian restaurants in the past but many are closed by now.
          When I was visiting Little Italy, almost every restaurant had these annoying people at the entrance who tried
          to talk
          to you to lure you in.
          I would say that Little Italy is more of a tourist trap and you should look for Italian food somewhere else.
          Nonetheless, you can take beautiful photos during the night!
        </p>
        <ArticleImage id="little-italy-images" :images="[
          { path: '/images/places/nyc/little_italy1.jpeg', alt: 'Night Photo' },
          { path: '/images/places/nyc/little_italy2.jpeg', alt: 'Day Photo' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="financial-district" header="Financial District">
        <p>
          If you walk further south from Chinatown, you will reach the Financial District, the most southern part of
          Manhattan.
          You should visit the 9/11 Memorial and the One World Trade Center.
          Then there is also the NYSE building.
          After seeing two people with syringes in their hands in front of the entrance, I really felt like in
          Frankfurt...
          Anyways, a few blocks further to the west, you can see the nice looking Trinity Church.
          If you're an Apple Fanboy, you can also visit the crazy looking Apple Store near the 9/11 Memorial.
          Finally, at the most southern part of Manhattan, there is a small park where you can look at the Statue of
          Liberty.
          You can get to the statue with a ferry if you want, but for me the view from the Financial District was
          satisfying enough.
        </p>
        <ArticleImage id="financial-district-images" :images="[
          { path: '/images/places/nyc/financial_district5.jpeg', alt: 'One World Trade Center and 9/11 Memorial' },
          { path: '/images/places/nyc/financial_district3.jpeg', alt: 'Stock Exchange' },
          { path: '/images/places/nyc/financial_district4.jpeg', alt: 'Random Statue looking at the Stock Exchange' },
          { path: '/images/places/nyc/financial_district1.jpeg', alt: 'Trinity Church' },
          { path: '/images/places/nyc/financial_district2.jpeg', alt: 'Apple Store' },
          { path: '/images/places/nyc/financial_district6.jpeg', alt: 'View of the Statue of Liberty' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="brooklyn-bridge" header="Brooklyn Bridge">
        <p>
          If you're already at the Financial District, you can cross the Brooklyn Bridge to get to Brooklyn.
          On the bridge you will have a beautiful view of the entire Manhattan with all the skyscrapers.
          I would recommend doing it after sunset because you can see all the lights.
          Once you arrived at the Brooklyn side, you can go to the Brooklyn Bridge Park to see the Financial District
          and the Statue of Liberty from the distance.
        </p>
        <ArticleImage id="brooklyn-bridge-images" :images="[
          { path: '/images/places/nyc/brooklyn_bridge1.jpeg', alt: 'View of the Financial District at the Brooklyn side' },
          { path: '/images/places/nyc/brooklyn_bridge2.jpeg', alt: 'Brooklyn Bridge from the coast' },
          { path: '/images/places/nyc/brooklyn_bridge3.jpeg', alt: 'Brooklyn Bridge during the night' },
          { path: '/images/places/nyc/brooklyn_bridge4.jpeg', alt: 'View on the Brooklyn Bridge' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="food" header="Food in NYC">
        <p>In New York City, you can get in any food you desire anytime. You should try New York
          Cheesecake. I visited Junior’s and ordered a whole cake for myself (which unfortunately caused me some stomach
          discomfort). Another must-try is New York-style pizza. You can find it in almost every corner of Manhattan
          at incredibly cheap prices. There are also these food trucks everywhere, but I wouldn’t personally
          recommend them since you can get food at regular restaurants at the same price with probably better quality.
        </p>
        <ArticleImage id="food-images" :images="[
          { path: '/images/places/nyc/food4.jpeg', alt: 'NYC Cheesecake from Junior\'s' },
          { path: '/images/places/nyc/food1.jpeg', alt: 'Falafel from Sharif\'s Famous Halal Food (Random Food Truck)' },
          { path: '/images/places/nyc/food2.jpeg', alt: 'One of the thousand Pizza Places' },
          { path: '/images/places/nyc/food3.jpeg', alt: 'Salad Bowl from Sweetgreen' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="public-transport" header="Public Transport">
        <p>
          The NYC subway system is very extensive and covers all the boroughs except Staten Island.
          Subway stations are almost everywhere in Manhattan and the trains come relatively frequently.
          NYC has one of the oldest public transit systems, so don't expect new, shiny, and clean stations.
          Most of the stations that I've seen are somewhat dirty and you'll definitely encounter some strange people
          inside the trains.
          I guess that's just unavoidable in such a large and busy city.
          But apart from that, the subways are pretty reliable and quickly get from one place to another.
          As of 2025, a subway ride will cost you $2.90 and you can pay with your credit card at the entrance.
          The upper limit per week is $34 per credit card.
          So after 12 rides, you won't be charged anymore for the rest of the week.
        </p>
        <ArticleImage id="subway-images" :images="[
          { path: '/images/places/nyc/subway2.jpeg', alt: 'Inside a subway train.' },
          { path: '/images/places/nyc/subway1.jpeg', alt: 'View of a subway train outside' },
          { path: '/images/places/nyc/subway3.jpeg', alt: 'Subway station at the World Trade Center' },
          { path: '/images/places/nyc/subway4.jpeg', alt: 'Bank at a subway station' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="museums" header="Museums">
        <p>There are tons of museums in Manhattan and NYC. I went to the Museum of Modern Arts (MoMa) and the Museum of
          Illusions.</p>
      </ArticleSection>

      <ArticleSubSection id="moma" header="MoMa">
        <p>The Museum of Modern Art (MoMa) is a massive place that contains art from the late 19th century to the
          present. As of 2025, adults pay $30, while students only need to pay $17. If you’re into modern art, I can
          definitely recommend visiting. I saw collections from Van Gogh, Salvador Dali, Andy Warhol,
          and many more famous artists. I honestly think it’s one of the best museums in the USA to visit.</p>
        <ArticleImage id="moma-images" :images="[
          { path: '/images/places/nyc/moma2.jpeg', alt: 'Starry Night by Van Gogh' },
          { path: '/images/places/nyc/moma3.jpeg', alt: 'Marilyn by Andy Warhol' },
          { path: '/images/places/nyc/moma4.jpeg', alt: 'The Persistence of Memory by Salvador Dalí' },
          { path: '/images/places/nyc/moma1.jpeg', alt: 'The kind of modern art that I don\'t like...' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="museum-of-illusions" header="Museum of Illusions">
        <p>There’s this small museum in Manhattan that’s all about optical illusions. It’s a place to take silly
          pictures with your friends. The admission fee for adults is $35 as of 2025. I personally think it’s a bit
          pricey, but you do get some really cool pictures.</p>
        <ArticleImage id="museum-of-illusions-images" :images="[
          { path: '/images/places/nyc/museum_of_illusions2.jpeg', alt: 'Me flying' },
          { path: '/images/places/nyc/museum_of_illusions1.jpeg', alt: 'Guess who this is' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="lego-store" header="NYC LEGO Store">
        <p>
          I would recommend going to the LEGO store in Manhattan if you have the time and you like LEGO.
          In the store you can customize your own NYC-themed LEGO figures.
        </p>
        <ArticleImage id="lego-store-images" :images="[
          { path: '/images/places/nyc/lego_store1.jpeg', alt: 'Inside the LEGO store' },
          { path: '/images/places/nyc/lego_store2.jpeg', alt: 'Inside the LEGO store (2)' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="macys-parade" header="Macy’s Parade">
        <p>
          During Thanksgiving, there is the Macy's Parade taking place in Manhattan.
          You can see some huge floating baloons flying around.
          I would say that it's nice to see if you're there but nothing special.
          I wouldn't consider visiting NYC just for the parade.
          During the parade, some streets are completely blocked, which makes it hard to navigate around.
          As already mentioned at the beginning, Manhattan is really crowded on Thanksgiving.
        </p>
        <ArticleImage id="macys-parade-images" :images="[
          { path: '/images/places/nyc/macys1.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys2.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys3.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys4.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys5.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys6.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys7.jpeg', alt: 'Floating balloon at Macy\'s parade' },
          { path: '/images/places/nyc/macys8.jpeg', alt: 'Floating balloon at Macy\'s parade' },
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="conclusion" header="Conclusion">
        <p>
          If you're going to the east cost, you should definitely visit NYC. You get tons of food options, museums, and
          tall buildings!
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>