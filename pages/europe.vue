<template>
    <BlogArticle>
        <template #header>
            <h1 class="article-header">Europe</h1>
            <p>
                Below are all my trips in Europe organized by country. Click on one of the cards below to learn more
                about the place.
                Alternatively, you can also click on one of the markers on the map!
            </p>
            <LeafletMap :locations="citiesStore.europeDestinations" :min-zoom="3" :zoom="3" :center="[55, 10]"
                :max-bounds="[[27.5, -25.0], [72.0, 45.0]]"></LeafletMap>
        </template>
        <template #body>
            <ArticleSection id="france" header="🇫🇷 France">
                <ThumbnailGrid :destinations="citiesStore.franceDestinations"></ThumbnailGrid>
            </ArticleSection>
            <ArticleSection id="italy" header="🇮🇹 Italy">
                <ThumbnailGrid :destinations="citiesStore.italyDestinations"></ThumbnailGrid>
            </ArticleSection>
            <ArticleSection id="monaco" header="🇲🇨 Monaco">
                <ThumbnailGrid :destinations="citiesStore.monacoDestinations"></ThumbnailGrid>
            </ArticleSection>
        </template>
    </BlogArticle>
</template>

<script setup>
import { useCitiesStore } from '~/stores/cities';

const citiesStore = useCitiesStore();
</script>