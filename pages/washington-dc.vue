<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Washington, D.C.</h1>
      <p class="header-text">
        Washington, D.C. (District of Columbia), is the capital of the United States, home to about 700,000 people. The
        city center
        is full of beautiful buildings, memorials, and free museums. I recommend spending 2-3 days there during
        the spring or summer. I went there twice for one day.
      </p>
    </template>
    <template #body>
      <ArticleSection id="capitol" header="Capitol">
        <p>Let's start with the most important thing: The US Capitol is the federal government’s legislative branch. You
          can book guided tours free online in
          advance. The tour takes you inside the massive dome,
          known as the rotunda. You will also learn some history about U.S. politics. Additionally, you can also get
          free tickets for
          the House of Representatives and Senate. You should
          definitely go there if you're visiting the city.</p>
        <ArticleImage id="capitol-images" :images="[
          { path: '/images/places/washington-dc/capitol1.jpeg', alt: 'U.S. Capitol' }
        ]"></ArticleImage>
        <ArticleImage id="capitol-inside-images" :images="[
          { path: '/images/places/washington-dc/capitol2.jpeg', alt: 'Rotunda' },
          { path: '/images/places/washington-dc/capitol3.jpeg', alt: 'Guided Tour' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="supreme-court" header="Supreme Court">
        <p>The Supreme Court is the highest court of the country, located next to the Capitol Building. You should
          also check it out for a few minutes if you're already there.</p>
        <ArticleImage id="supreme-court-images" :images="[
          { path: '/images/places/washington-dc/supreme_court.jpeg', alt: 'Supreme Court' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="white-house" header="White House">
        <p>The <i>White House</i> is the place where the President lives. The place is surrounded by huge
          fences, so it’s almost impossible to
          get a good picture. It’s cool to see it for a few minutes, but that’s about it. Also, you don't want to
          disturb Mr. Trump. Thus go somewhere else.
        </p>
        <ArticleImage id="white-house-images" :images="[
          { path: '/images/places/washington-dc/white_house1.jpeg', alt: 'At the White House' },
          { path: '/images/places/washington-dc/white_house2.jpeg', alt: 'White House from Washington Monument' }
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="monuments-and-memorials" header="Monuments & Memorials">
        <p>The city is full of free historic monuments to check out. I will go over the ones that I visited.</p>
      </ArticleSection>
      <ArticleSubSection id="washington-monument" header="Washington Monument">
        <p>The Washington Monument is a tall stone structure that used to be the tallest man made thing in the world! I
          heard some people calling it “The Needle.”
          There’s an elevator inside that takes you all the way up to the top. You can get tickets for
          free at the entrance. I highly recommend going there in the morning so you can avoid the crowds. Once you’re
          up there, you’ll be rewarded with an amazing view of the entire city.</p>
        <ArticleImage id="washington-monument-images" :images="[
          { path: '/images/places/washington-dc/washington_monument6.jpeg', alt: 'Washington Monument' },
          { path: '/images/places/washington-dc/washington_monument4.jpeg', alt: 'Washington Monument in Spring' },
          { path: '/images/places/washington-dc/washington_monument2.jpeg', alt: 'Lincoln Memorial from Washington Monument' },
          { path: '/images/places/washington-dc/washington_monument3.jpeg', alt: 'Jefferson Memorial from Washington Monument' },
          { path: '/images/places/washington-dc/washington_monument5.jpeg', alt: 'Capitol from Washington Memorial' },
          { path: '/images/places/washington-dc/washington_monument1.jpeg', alt: 'White House from Washington Memorial' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="ww2-memorial" header="WW II Memorial">
        <p>The World War II memorial is dedicated to the Americans that served in the armed forces (I copied that from
          Wikipedia). It's located next to
          the Washington Memorial. The entire place is
          built out of granite, and there is a huge fountain in the middle.</p>
        <ArticleImage id="ww2-memorial-images" :images="[
          { path: '/images/places/washington-dc/ww2_memorial1.jpeg', alt: 'Inside the Memorial' },
          { path: '/images/places/washington-dc/ww2_memorial2.jpeg', alt: 'Entrance' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="lincoln-memorial" header="Lincoln Memorial">
        <p>The Lincoln Memorial is a place to honor the former President Abraham Lincoln. It’s a building that houses
          a massive marble statue of the former President. You can also get a great view of the Washington Memorial
          there.
        </p>
        <ArticleImage id="lincoln-memorial-images" :images="[
          { path: '/images/places/washington-dc/lincoln_memorial1.jpeg', alt: 'Ouside' },
          { path: '/images/places/washington-dc/lincoln_memorial2.jpeg', alt: 'Inside' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSubSection id="albert-einstein-memorial" header="Albert Einstein Memorial">
        <p>Just a short walk from the Lincoln Memorial is the Albert Einstein Memorial. It’s a tiny metal statue of
          Einstein holding a book. I liked it!
        </p>
        <ArticleImage id="albert-einstein-images" :images="[
          { path: '/images/places/washington-dc/albert_einstein_memorial.jpeg', alt: 'Albert Einstein Memorial' }
        ]"></ArticleImage>
      </ArticleSubSection>
      <ArticleSection id="museums" header="Museums">
        <p>The best part of D.C. is that there are tons of free museums in the city center. I was able to visit most
          of them during my stay.</p>
      </ArticleSection>
      <ArticleSubSection id="air-and-space-museum" header="Air and Space Museum">
        <p>This museum showcases a collection of aircraft and space exploration exhibits. You can see
          rocket engines, rovers, aircraft motors, and other related stuff.
        </p>
        <ArticleImage id="air-and-space-museum-images" :images="[
          { path: '/images/places/washington-dc/air_and_space_museum1.jpeg', alt: 'Mars Rover' },
          { path: '/images/places/washington-dc/air_and_space_museum2.jpeg', alt: 'Lunar Rover' },
          { path: '/images/places/washington-dc/air_and_space_museum3.jpeg', alt: 'Space Suit' },
          { path: '/images/places/washington-dc/air_and_space_museum4.jpeg', alt: 'Rocket Engine' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="museum-of-natural-history" header="Museum of Natural History">
        <p>The museum's collections consist of plants, stuffed animals, fossils, minerals, rocks, and meteorites. My
          highlight was Lucy, a female Australopithecus afarensis. The stuffed elephant was also cool.</p>
        <ArticleImage id="natural-history-images" :images="[
          { path: '/images/places/washington-dc/museum_of_natural_history1.jpeg', alt: 'Stuffed Elephant' },
          { path: '/images/places/washington-dc/museum_of_natural_history3.jpeg', alt: 'Lucy' },
          { path: '/images/places/washington-dc/museum_of_natural_history2.jpeg', alt: 'Stuffed Capybara' },
          { path: '/images/places/washington-dc/museum_of_natural_history4.jpeg', alt: 'Coly Bird Skeleton' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="national-gallery-of-art" header="National Gallery of Art">
        <p>The gallery primarily features paintings from Europe and North America from the 11th to 19th century. The
          basement also houses a collection
          of sculptures. In my opinion, this was the best museum in D.C.
        </p>
        <ArticleImage id="nga-images" :images="[
          { path: '/images/places/washington-dc/national_gallery_of_art2.jpeg', alt: 'Napoleon Portrait' },
          { path: '/images/places/washington-dc/national_gallery_of_art1.jpeg', alt: 'Ceramic Artwork' },
          { path: '/images/places/washington-dc/national_gallery_of_art3.jpeg', alt: 'Inside the Museum' },
          { path: '/images/places/washington-dc/national_gallery_of_art4.jpeg', alt: 'Romulus and Remus Sculpture' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="nga-east-building" header="NGA East Building">
        <p>The east building of the National Gallery of Art houses modern and contemporary art. It's similar to the MoMa
          in New York City, but I think the MoMa was better (although more expensive).</p>
        <ArticleImage id="nga-images" :images="[
          { path: '/images/places/washington-dc/nga_east_building1.jpeg', alt: 'Harlequin Musician by Picasso' },
          { path: '/images/places/washington-dc/nga_east_building3.jpeg', alt: 'Green Marilyn by Andy Warhol' },
          { path: '/images/places/washington-dc/nga_east_building2.jpeg', alt: 'Beast by Alejandro Aróstegui' },
          { path: '/images/places/washington-dc/nga_east_building4.jpeg', alt: 'Hahn by Katharina Fritsch' }
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="museum-of-african-american-history"
        header="Museum of African American History and Culture">
        <p>The museum, the world’s largest dedicated to African-American history and culture, showcases exhibits on
          African American history and influential individuals.
        </p>
        <ArticleImage id="african-american-history-images" :images="[
          { path: '/images/places/washington-dc/museum_of_african_american_history4.jpeg', alt: 'African American Flag' },
          { path: '/images/places/washington-dc/museum_of_african_american_history2.jpeg', alt: 'Colored Only Train' },
          { path: '/images/places/washington-dc/museum_of_african_american_history3.jpeg', alt: 'Muhammad Ali Gloves' },
          { path: '/images/places/washington-dc/museum_of_african_american_history1.jpeg', alt: 'W.E.B Du Bois, Historian and Civil Rights Activist' },
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSubSection id="botanic-garden" header="Botanic Garden">
        <p>The United States Botanic Garden is a lovely place to visit, even though it’s not the biggest. It’s filled
          with all sorts of exotic plants, and it’s super humid and hot inside.</p>
        <ArticleImage id="botanic-garden-images" :images="[
          { path: '/images/places/washington-dc/botanic_garden1.jpeg', alt: 'Cocoa tree' },
          { path: '/images/places/washington-dc/botanic_garden2.jpeg', alt: 'Cabbage on a stick' },
        ]"></ArticleImage>
      </ArticleSubSection>

      <ArticleSection id="public-transport" header="Public Transport">
        <p>The public transport system here is pretty reliable, with subways and buses. But, you’ll need a special metro
          card or app to get on the buses or subways. You can’t just pay with a
          credit card or cash for a ride directly. I don’t think that’s very convenient.</p>
        <ArticleImage id="public-transport-images" :images="[
          { path: '/images/places/washington-dc/public_transport1.jpeg', alt: 'Union Station Metro Stop' },
          { path: '/images/places/washington-dc/public_transport2.jpeg', alt: 'Metro' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        Washington, D.C. is one of the most beautiful cities in the USA and great for for museum enthusiasts. You can
        spend days exploring all museums, and the best part is that they are all free to visit. It’s also a great place
        to hang out during the summer. In the spring, the city is covered with cherry blossoms, which I unfortunately
        missed. I have another story to share: I managed to ruin my jacket, which I had bought a few months earlier, by
        leaning against a freshly painted lantern pole. Make sure to not lean against any lantern poles!
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';
import ArticleSubSection from '~/components/ArticleSubSection.vue';

</script>