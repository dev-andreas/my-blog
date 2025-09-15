<template>
    <BlogArticle>
        <template #header>
            <h1 class="article-header">North America</h1>
            <p>
                Below are all my trips in North America organized by country. Click on one of the cards below to learn
                more
                about the place.
                Alternatively, you can also click on one of the markers on the map!
            </p>
            <LeafletMap :locations="citiesStore.northAmericaDestinations" :min-zoom="3" :zoom="3" :center="[40, -97]" :max-bounds="[[5, -168], [83, -30]]"></LeafletMap>
        </template>
        <template #body>
            <ArticleSection id="united-states" header="🇺🇸 United States">
                <ThumbnailGrid :destinations="citiesStore.usaDestinations" id="usaGrid"></ThumbnailGrid>
            </ArticleSection>
        </template>
    </BlogArticle>
</template>

<script setup>
import { useCitiesStore } from '~/stores/cities';

const citiesStore = useCitiesStore();
</script>