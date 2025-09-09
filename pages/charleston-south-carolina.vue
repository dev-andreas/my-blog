<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Charleston, South Carolina, USA</h1>
      <p class="header-text">
        Charleston, the most populous city in South Carolina, has a population of approximately 150,000 people. Its
        historic downtown area is a popular tourist destination, having numerous historic buildings. I
        recommend staying for 2-3 days to get the most out of it.

      </p>
    </template>
    <template #body>
      <ArticleSection id="downtown" header="Downtown">
        <p>I arrived in North Charleston by train very late in the evening, over an hour late. Fortunately, I managed to
          catch the last bus to my hostel. The bus driver was incredibly friendly and allowed me to enter for free. I
          stayed at the <i>Not So Hostel</i>. The hostel was fantastic! The next day, I went downtown. The area
          managed to preserve its buildings from the 18th and early 19th centuries, making it, in my opinion, one of the
          most beautiful cities in the United States. I took numerous amazing pictures there. The place is also easily
          walkable.</p>
      </ArticleSection>

      <ArticleSubSection id="rainbow-row" header="Rainbow Row">
        <p>
          The most iconic area of the city is <i>Rainbow Row</i>, a small strip of colorful houses. Make sure to go
          there in the morning to take photos when it's less crowded. During the day, the place is crowded, making it
          difficult to take good photos.
        </p>
        <ArticleImage id="rainbow-row-images" :images="[
          { path: '/images/places/charleston-sc/rainbow_row1.jpeg', alt: 'Rainbow Row' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="waterfront-park" header="Waterfront Park">
        <p>
          Next to the Rainbow Row lies the <i>Waterfront Park</i>. You may sit there and enjoy a snack or the good
          weather.
          There is also a pier at the park where you might spot dolphins. This was definitely one of my highlights of
          the trip, as I never saw dolphins before.
        </p>
        <ArticleImage id="waterfront-park-images" :images="[
          { path: '/images/places/charleston-sc/waterfront_park1.jpeg', alt: 'Dolphins at Waterfront Park Pier' },
          { path: '/images/places/charleston-sc/waterfront_park3.jpeg', alt: 'Pineapple Fountain' },
          { path: '/images/places/charleston-sc/waterfront_park4.jpeg', alt: 'Concord St' },
          { path: '/images/places/charleston-sc/waterfront_park2.jpeg', alt: 'Coast at Waterfront Park' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="french-quarter" header="French Quarter">
        <p>
          Afterwards you should check out the <i>French Quarter</i>. This place has many restaurants. You can also take
          gorgeous pictures there.
        </p>
        <ArticleImage id="french-quarter-images" :images="[
          { path: '/images/places/charleston-sc/downtown1.jpeg', alt: 'State St' },
          { path: '/images/places/charleston-sc/downtown3.jpeg', alt: 'Elliot St' },
          { path: '/images/places/charleston-sc/downtown2.jpeg', alt: 'St. Philip\'s West Cemetery' },
          { path: '/images/places/charleston-sc/downtown4.jpeg', alt: 'Chalmers St' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="arthur-ravenel-jr-bridge" header="Arthur Ravenel Jr. Bridge">
        <p>
          In the evening, I had the idea to take pictures of the sunset on the other side of the <i>Arthur Ravenel Jr.
            Bridge</i>. It’s a short bus ride away, and the fare is very cheap. I spent almost two hours there, taking
          photos with my phone in one hand and a Target bag full of groceries in the other. It was definitely
          worth it, even though my feet were killing me from all the walking.
        </p>
        <ArticleImage id="arthur-ravenel-jr-bridge-images" :images="[
          { path: '/images/places/charleston-sc/bridge1.jpeg', alt: 'Arthur Ravenel Jr. Bridge from Mount Pleasant' },
          { path: '/images/places/charleston-sc/bridge2.jpeg', alt: 'Arthur Ravenel Jr. Bridge at Night' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="angel-oak-tree" header="Angel Oak Tree">
        <p>
          The next day, I visited <i>Angel Oak Tree</i>, an ancient oak tree estimated to be between 300 and 400 years
          old.
          You can only get there by car or bus. The bus line is somewhat unreliable, with only two buses
          operating daily. Despite this, I managed to make the round trip. However, if you miss the last bus, you might
          need to call an Uber. The bus journey took approximately three hours, but the sight of the tree was definitely
          worth the wait.

        </p>
        <ArticleImage id="angel-oak-tree-images" :images="[
          { path: '/images/places/charleston-sc/angel_oak_tree1.jpeg', alt: 'Angel Oak Tree' },
          { path: '/images/places/charleston-sc/angel_oak_tree2.jpeg', alt: 'Branches of Angel Oak Tree' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="public-transport" header="Public Transport">
        <p>
          Public transportation in Charleston is quite bad. There are only buses, which are consistently late.
          Moreover, most of the places near Charleston are not accessible by bus. Fortunately, I managed to reach Angel
          Oak Tree by bus.
        </p>
        <ArticleImage id="public-transport-images" :images="[
          { path: '/images/places/charleston-sc/public_transport1.jpeg', alt: 'North Charleston Bus Stop' },
          { path: '/images/places/charleston-sc/public_transport2.jpeg', alt: 'Citadel Mall Bus Stop' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>Charleston is a beautiful city with many things to see, so I can definitely recommend it. Only the buses
          suck.
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>