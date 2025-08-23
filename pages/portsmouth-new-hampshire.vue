<template>
  <BlogArticle>
    <template #header>
      <h1 class="article-header">Portsmouth, New Hampshire</h1>
      <p class="header-text">
        Portsmouth is a small city and seaport in New Hampshire with a population of around 20 thousand people. I
        recommend going there for a day trip in the summer if you are already in the region.
      </p>
    </template>
    <template #body>
      <ArticleSection id="submarine" header="Submarine">
        <p>
          Since I’ve lived in Massachusetts, I thought it would be awesome to check out the USS Albacore, a research
          submarine that you can visit for free.
        </p>
        <ArticleImage id="submarine-images" :images="[
          { path: '/images/places/portsmouth-new-hampshire/submarine1.jpeg', alt: 'USS Albacore' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="downtown" header="Downtown">
        <p>
          The city looked like a typical New England town with its old buildings made of bricks and wood.
          It was also super clean and walkable. There were tons of little historic spots to discover! The harbor would
          also be a nice spot to hang out in the summer.
        </p>
        <ArticleImage id="downtown-images" :images="[
          { path: '/images/places/portsmouth-new-hampshire/downtown4.jpeg', alt: 'Downtown' },
          { path: '/images/places/portsmouth-new-hampshire/downtown1.jpeg', alt: 'Govenor John Langdon House' },
          { path: '/images/places/portsmouth-new-hampshire/downtown2.jpeg', alt: 'Harbor' },
          { path: '/images/places/portsmouth-new-hampshire/downtown3.jpeg', alt: 'North Church' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="food" header="Food">
        <p>
          Even though it’s a small city, it had some really cool places to eat. I went to a burger joint called
          Lexie’s. I think they might be the best burger place in the whole wide USA that I’ve been to! I also checked
          out this Turkish coffee shop called Caffe Kilim. I had some delicious Turkish coffee and Baklava.
        </p>
        <ArticleImage id="food-images" :images="[
          { path: '/images/places/portsmouth-new-hampshire/food1.jpeg', alt: 'Lexie\'s Restaurant' },
          { path: '/images/places/portsmouth-new-hampshire/food2.jpeg', alt: 'Caffe Kilim' },
        ]"></ArticleImage>
      </ArticleSection>
      <ArticleSection id="conclusion" header="Conclusion">
        <p>Portsmouth is a small charming historic city with great food options. If you’re in the area, I
          recommend checking it out! However, I wouldn’t recommend traveling to New Hampshire solely for the sake of
          seeing the city.</p>
      </ArticleSection>
    </template>
  </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';


</script>