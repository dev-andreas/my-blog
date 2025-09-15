<template>
    <BlogArticle>
        <template #header>
            <h1 class="article-header">All Destinations</h1>
            <p>
                Below are all my trips organized by country. Click on one of the cards below to learn more about the
                place.
                Alternatively, you can also click on one of the markers on the map!
            </p>
            <LeafletMap :locations="citiesStore.allDestinations" :zoom="zoom" :min-zoom="0"></LeafletMap>
        </template>
        <template #body>
            <ArticleSection id="europe" header="Europe"></ArticleSection>
            <ArticleSubSection id="france" header="🇫🇷 France">
                <ThumbnailGrid :destinations="citiesStore.franceDestinations" id="franceGrid"></ThumbnailGrid>
            </ArticleSubSection>
            <ArticleSubSection id="italy" header="🇮🇹 Italy">
                <ThumbnailGrid :destinations="citiesStore.italyDestinations" id="italyGrid"></ThumbnailGrid>
            </ArticleSubSection>
            <ArticleSubSection id="monaco" header="🇲🇨 Monaco">
                <ThumbnailGrid :destinations="citiesStore.monacoDestinations" id="monacoGrid"></ThumbnailGrid>
            </ArticleSubSection>
            <ArticleSection id="north-america" header="North America"></ArticleSection>
            <ArticleSubSection id="united-states" header="🇺🇸 United States">
                <ThumbnailGrid :destinations="citiesStore.usaDestinations" id="usaGrid" />
            </ArticleSubSection>
        </template>
    </BlogArticle>
</template>

<script setup>
import { useCitiesStore } from '~/stores/cities';
import { useWidthStore } from '~/stores/width';

const citiesStore = useCitiesStore();
const widthStore = useWidthStore();

const zoom = computed(() => {
    return widthStore.windowWidth < widthStore.sizes['sm'] ? 1 : 2
})
</script>