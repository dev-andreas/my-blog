<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Providence, Rhode Island, USA</h1>
      <p class="header-text">
        Providence is the capital of Rhode Island and has a population of around 190,000 people.
        The city is founded in 1636, making it one of the oldest cities in New England.
        It is home of Brown University, an Ivy League university and one of the best in the country.
        I would recommend staying for 1 full day.
      </p>
    </template>
    <template #body>
      <ArticleSection id="downtown" header="Downtown">
        <p>
          The downtown area is compact and easily walkable on foot.
          The city also appeared pretty clean.
          You should visit the Providence Athenaeum, a library established in 1836.
          Unfortunately, I didn’t capture any photos of that place.
          If you’re hungry, I highly recommend Geoff’s Superlative Sandwiches.
          They serve some delicious sandwiches.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/providence-rhode-island/downtown2.jpeg', alt: 'Woonasquatucket River' },
          { path: '/images/places/providence-rhode-island/downtown1.jpeg', alt: 'View at downtown from Brown campus' }
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="state-house" header="Rhode Island State House">
        <p>
          If you’re already in downtown, make sure to visit the Rhode Island State House.
          You can freely enter the building and explore it at your own pace.
          Most of the rooms are open to the public, and the exterior and interior of the building reminded me of the
          Capitol in Washington, DC, just in smaller.
          In fact, I enjoyed the Rhode Island State House more than the Capitol because you don’t have to book a guided
          tour.
        </p>
        <ArticleImage id="state-house-images1" :images="[
          { path: '/images/places/providence-rhode-island/state_house1.jpeg', alt: 'Rhode Island State House from outside' },
        ]"></ArticleImage>

        <ArticleImage id="state-house-images2" :images="[
          { path: '/images/places/providence-rhode-island/state_house3.jpeg', alt: 'House chamber' },
          { path: '/images/places/providence-rhode-island/state_house4.jpeg', alt: 'Senate chamber' },
          { path: '/images/places/providence-rhode-island/state_house2.jpeg', alt: 'Rotunda at the entrance' },
          { path: '/images/places/providence-rhode-island/state_house5.jpeg', alt: 'State Library' },
        ]"></ArticleImage>

      </ArticleSection>

      <ArticleSection id="brown-university" header="Brown University">
        <p>
          I think the most charming part of the city is the College Hill area, home to Brown University.
          The majority of the buildings there are constructed from bricks and have a beautiful aesthetic.
          I highly recommend taking an hour to stroll around and to look at the architecture of the buildings.
        </p>
        <ArticleImage id="brown-university-images" :images="[
          { path: '/images/places/providence-rhode-island/brown1.jpeg', alt: 'Statue at the campus' },
          { path: '/images/places/providence-rhode-island/brown3.jpeg', alt: 'Sculpture at the campus' },
          { path: '/images/places/providence-rhode-island/brown2.jpeg', alt: 'Another statue at the campus...' },
          { path: '/images/places/providence-rhode-island/brown4.jpeg', alt: 'A nice looking gate!' },
        ]"></ArticleImage>
      </ArticleSection>

      <ArticleSection id="rsid-museum" header="RSID Museum">
        <p>
          The <i>Rhode Island School of Design Museum</i>, or short RSID Museum, houses a diverse collection of fine art
          and design from various parts of the globe. It’s definitely worth visiting, especially since admission is free
          on Sundays from 10:00 AM to 5:00 PM and Thursdays from 5:00 PM to 8:00 PM. As of 2025, the
          regular admission ticket is priced at $22, which reasonable given the museum’s size.
          You should definitely visit the museum!
        </p>
        <ArticleImage id="school-of-design-museum-images" :images="[
          { path: '/images/places/providence-rhode-island/museum1.jpeg', alt: 'Artwork from Alejandro Diaz' },
          { path: '/images/places/providence-rhode-island/museum3.jpeg', alt: 'Painting from Van Gogh' },
          { path: '/images/places/providence-rhode-island/museum2.jpeg', alt: 'A cool looking Samovar' },
          { path: '/images/places/providence-rhode-island/museum4.jpeg', alt: 'Big Lapis lazuli stone' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>
          Before visiting Providence, I had no idea what to expect. During my winter break, I was traveling across
          cities in New England while studying in Massachusetts. However, when I arrived in Providence, I was pleasantly surprised
          by the stunning College Hill and the exceptionally clean and walkable city center. If you ever find yourself
          in New England, make sure to check out Providence. It’s an amazing underrated place!
        </p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>