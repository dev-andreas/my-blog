<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Boston, Massachusetts, USA</h1>
      <p class="header-text">
        Boston is the capital of Massachusetts and with a population of around 700,000 people (as of 2025) the largest
        city in New England.
        Founded 1630, the city was played a central role in the American Revolution and is thus rich in history.
        Additionally, the Greater Boston area is home to one of the worlds best universities, including MIT, Harvard,
        and Tufts.
        I recommend staying for 2-3 days at any time of the year.
        Just make sure to wear warm clothing during the winter.
      </p>
    </template>
    <template #body>
      <ArticleSection id="downtown" header="Downtown">
        <p>
          I arrived in Boston by plane after my trip in Washington, DC.
          The city center is compact and walkable.
          You can clearly see that the city was build before cars went popular.
          The streets are narrow and don't have the typical grid layout that you see in most other North American
          cities.
        </p>
      </ArticleSection>

      <ArticleSubSection id="beacon-hill" header="Beacon Hill">
        <p>
          I first went to Beacon Hill. It's home to the Massachusetts State House, the seat of government of the state
          Massachusetts.
          With its narrow cobblestone streets and brick houses, this place is super unique and not many places in the
          USA
          are like it.
        </p>
        <ArticleImage id="beacon-hill-images" :images="[
          { path: '/images/places/boston-massachusetts/beacon_hill1.jpeg', alt: 'Massachusetts State House' },
          { path: '/images/places/boston-massachusetts/beacon_hill2.jpeg', alt: 'Church of the Advent' },
          { path: '/images/places/boston-massachusetts/beacon_hill3.jpeg', alt: 'Beacon Hill Neighborhood' },
          { path: '/images/places/boston-massachusetts/beacon_hill4.jpeg', alt: 'Beacon Hill Neighborhood' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="charles-river" header="Charles River">
        <p>
          The Charles River is located next to Beacon Hill and it's a nice place to walk along.
          There is an old cannon next to the Hatch Memorial Shell that I found really cool.
          Also, these geese were really friendly and absolutely not scared of the people.
        </p>
        <ArticleImage id="beacon-hill-images2" :images="[
        ]"></ArticleImage>
        <ArticleImage id="beacon-hill-images" :images="[
          { path: '/images/places/boston-massachusetts/charles_river1.jpeg', alt: 'Cool Cannon' },
          { path: '/images/places/boston-massachusetts/charles_river2.jpeg', alt: 'Friendly Geese' },
          { path: '/images/places/boston-massachusetts/charles_river3.jpeg', alt: 'Charles River' },
          { path: '/images/places/boston-massachusetts/charles_river4.jpeg', alt: 'Some more friendly Geese' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="boston-common" header="Boston Common">
        <p>
          In front of the State House is the Boston Common, the oldest city park in the USA.
          The squirrels were as friendly as the geese and it's a nice place to hang around in the summer, but
          honestly there is
          not too much to do there. I was planning to feed the squirrels by hand the next day, but unfortunately I got
          surprised by a huge snowstorm.
        </p>
        <ArticleImage id="boston-common-images" :images="[
          { path: '/images/places/boston-massachusetts/public_garden1.jpeg', alt: 'Friendly Squirrel at the Park' },
          { path: '/images/places/boston-massachusetts/public_garden2.jpeg', alt: 'Park Skyline' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="quincy-market" header="Quincy Market">
        <p>
          In the evening I went to the Quincy Market. This is a historic place, where slave auctions used to happen.
          Now, it’s a market where you can get food and souvenirs. I found a vegan corn dog and some candy at a store
          called IT’SUGAR nearby. It wasn’t exactly a healthy meal, but authentic American.
        </p>
        <ArticleImage id="chinatown-images" :images="[
          { path: '/images/places/boston-massachusetts/quincy1.jpeg', alt: 'Quincy Hall Entrance' },
          { path: '/images/places/boston-massachusetts/quincy4.jpeg', alt: 'IT\'SUGAR Candy Store' },
          { path: '/images/places/boston-massachusetts/quincy2.jpeg', alt: 'My Authentic American Meal' },
          { path: '/images/places/boston-massachusetts/quincy3.jpeg', alt: 'Some souvenir stuff you can get there' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="chinatown" header="Chinatown">
        <p>
          The Boston Chinatown is a bit smaller than the one in NYC, but you can still find some good food there.
          I went to a restaurant and a bakery, but I can’t remember the names… (Sorry)
        </p>
        <ArticleImage id="chinatown-images" :images="[
          { path: '/images/places/boston-massachusetts/chinatown1.jpeg', alt: 'Chinatown Entrance' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="universities" header="Universities">
        <p>Boston is home to two of the top universities in the world, Harvard and MIT. I visited the
          MIT campus during the winter, but unfortunately, I didn’t have enough time to explore Harvard.</p>
        <ArticleImage id="universities-images" :images="[
          { path: '/images/places/boston-massachusetts/mit2.jpeg', alt: 'MIT Campus' },
          { path: '/images/places/boston-massachusetts/mit1.jpeg', alt: 'Weird House at MIT Campus' },
          { path: '/images/places/boston-massachusetts/skyline1.jpeg', alt: 'Boston Skyline at MIT' },
          { path: '/images/places/boston-massachusetts/skyline2.jpeg', alt: 'Boston Skyline at MIT (2)' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="museums" header="Museums"></ArticleSection>

      <ArticleSubSection id="mfa" header="Museum of Fine Arts">
        <p>The Boston Museum of Fine Arts (MFA) is a big museum, the 20th largest in the world by area. It contains
          sculptures and paintings from all over the globe. They even had an Egypt exhibition during my visit. I enjoyed
          it and can definitely recommend it if you’re into art and history. As of 2025, the admission was $27 for
          adults.</p>
        <ArticleImage id="mfa-images" :images="[
          { path: '/images/places/boston-massachusetts/mfa1.jpeg', alt: 'Dionysos Sculpture' },
          { path: '/images/places/boston-massachusetts/mfa2.jpeg', alt: 'Homer Sculpture' },
          { path: '/images/places/boston-massachusetts/mfa5.jpeg', alt: 'Egyptian Mummy' },
          { path: '/images/places/boston-massachusetts/mfa6.jpeg', alt: 'Egyptian Mummy (2)' },
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="museum_of_science" header="Museum of Science">
        <p>The Boston Museum of Science is a place to learn about nature and science. It’s got tons of
          interactive exhibits that are perfect for children. If you’re planning a family trip, I would recommend it.
          For older audiences, I would rather recommend going to the Boston MFA. The admission was $33 for adults, as of
          2025.
        </p>
        <ArticleImage id="museum-of-science-images" :images="[
          { path: '/images/places/boston-massachusetts/museum_of_science1.jpeg', alt: 'Boston Dynamics Robot' },
          { path: '/images/places/boston-massachusetts/museum_of_science3.jpeg', alt: 'Huge Fly' },
          { path: '/images/places/boston-massachusetts/museum_of_science4.jpeg', alt: 'Construction of the Pyramids' },
          { path: '/images/places/boston-massachusetts/museum_of_science2.jpeg', alt: 'Older Boston Dynamic Robot' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="tea_party_museum" header="Tea Party Museum">
        <p>I didn’t go there because I thought the $35 for admission was a bit too expensive. I also read
          online that this
          museum is more geared towards kids. However, you can still look at a replica ship from the outside, and
          there’s also a huge souvenir shop too.</p>
        <ArticleImage id="tea-party-museum-images" :images="[
          { path: '/images/places/boston-massachusetts/tea_party_museum1.jpeg', alt: 'Ship at the Tea Party Museum' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="public-transport" header="Public Transport">
        <p>The public transport system here has subway lines, commuter rails, and bus routes. It’s reliable and
          you can basically get anywhere with it. For American standards, it’s one of the best in the country and it's
          also cheap.
        </p>
        <ArticleImage id="public-transport-images" :images="[
          { path: '/images/places/boston-massachusetts/train1.jpeg', alt: 'Subway Station' },
          { path: '/images/places/boston-massachusetts/train2.jpeg', alt: 'Commuter Rail' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="conclusion" header="Conclusion">
        <p>
          Boston is one of the oldest cities in the USA and rich in history. If you’re into that and you’re on
          the East Coast, I highly recommend checking it out. Otherwise, you might want to consider New York City
          instead,
          as there are a ton more things to do there.
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>