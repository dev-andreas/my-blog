<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Detroit, Michigan</h1>
      <p class="header-text">
        Detroit, once home to approximately 2 million people in the 1950s, experienced a significant decline in its
        population, primarily due to economic factors. Today, the city’s population stands at around 640,000
        inhabitants (as of 2025). For this reason, you’ll find many abandoned buildings and empty lawns in downtown. I
        personally wouldn’t recommend visiting Detroit for traveling purposes, unless you're really interested in that
        place. There are much better cities nearby, such as Chicago or even Cleveland. Furthermore, Detroit is
        considered one of the most
        unsafe cities in the United States. I stayed there for one day, which was totally enough for me.
      </p>
    </template>
    <template #body>
      <ArticleSection id="downtown" header="Downtown">
        <p>I arrived in Detroit by train in the evening after my visit to Chicago. Most of the buildings in downtown
          Detroit appeared cold and gray, and the road conditions were not the greatest. Maybe the winter also
          contributed to the cold look. The city heavily relies on
          cars, so
          public transportation is limited to buses and a few tram/streetcar lines. Since I didn’t have a car, I spent
          most of my day walking around. I stayed in a small hostel near downtown for the night, called <i>Hostel
            Detroit</i>, which was really nice.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/detroit-michigan/downtown1.jpeg', alt: 'First impressions of Detroit' },
          { path: '/images/places/detroit-michigan/downtown2.jpeg', alt: 'Interesting Poster' },
          { path: '/images/places/detroit-michigan/downtown4.jpeg', alt: 'Outskirts (1)' },
          { path: '/images/places/detroit-michigan/downtown5.jpeg', alt: 'Outskirts (2)' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="abandoned-buildings" header="Abandoned Buildings">
        <p>As previously mentioned, the city center has numerous abandoned buildings and empty lawns. You can walk
          around all day long and see abandoned structures everywhere. Additionally, the city’s low
          population density makes it feel like a rural town rather than a huge city in some places. I was just walking
          all day long looking at the run-down places.
        </p>
        <ArticleImage id="abandoned-building-images" :images="[
          { path: '/images/places/detroit-michigan/abandoned_building.jpeg', alt: '2411 14th St' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="milliken-state-park-lighthouse" header="Milliken State Park Lighthouse">
        <p>If you decide to visit Detroit, you should make sure to visit the <i>Milliken State Park Lighthouse</i>. It offers a
          view of the city’s skyline and the Canadian city Windsor, which is located on the opposite side of the
          Detroit River. This was one of the highlights of the day trip.
        </p>
        <ArticleImage id="lighthouse-images" :images="[
          { path: '/images/places/detroit-michigan/lighthouse.jpeg', alt: 'Skyline of Detroit' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="belle-isle-zoo" header="Belle Isle Zoo">
        <p>The other highlight was the (of course) abandoned zoo at Belle Isle. The place is supposed to be demolished
          in the coming years, so I was lucky to still have the opportunity to visit it. Although technically
          trespassing into the zoo is prohibited, there are numerous holes in the fences that allow you to enter.
          As a law-abiding person, I chose not to enter the zoo and instead used photos from the internet, of
          course 🥹.
        </p>
        <ArticleImage id="belle-isle-zoo-images" :images="[
          { path: '/images/places/detroit-michigan/zoo2.jpeg', alt: 'Inside Belle Isle Zoo (1)' },
          { path: '/images/places/detroit-michigan/zoo4.jpeg', alt: 'Inside Belle Isle Zoo (2)' },
          { path: '/images/places/detroit-michigan/zoo3.jpeg', alt: 'Inside Belle Isle Zoo (3)' },
          { path: '/images/places/detroit-michigan/zoo1.jpeg', alt: 'Inside Belle Isle Zoo (4)' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        When writing this article, I was torn between publishing it and not doing so, as it’s mostly consists of
        negative opinions about Detroit. However, I decided to publish it because I want to be transparent about my
        opinions and document all my experiences in the United States. I don’t intend to offend anyone who lives in
        Detroit and loves their city. I visited Detroit because I was genuinely interested in exploring it. I had heard
        many things about Detroit and wanted to see for myself. It met all my expectations and I enjoyed
        my trip. As mentioned earlier, if you’re genuinely interested in Detroit, then go there. Otherwise, skip it and
        head to Chicago instead. My next stop was Cleveland, Ohio by bus.
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';


</script>