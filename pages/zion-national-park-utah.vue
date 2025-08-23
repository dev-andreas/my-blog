<template>
    <BlogArticle>
        <template #header>
            <h1 class="article-header">Zion National Park, Utah</h1>
            <p class="header-text">
                The national park is situated in southwest Utah, near Arizona. I highly recommend spending at least two
                days there to fully explore all the major trails.
            </p>
        </template>
        <template #body>
            <ArticleSection id="arrival" header="Arrival">
                <p>After my trip to Las Vegas, I took a <i>Salt Lake Express</i> shuttle to <i>St. George</i>, a town
                    near the
                    national park. The bus was punctual, and I even arrived about 10 minutes early. I stayed at the
                    <i>St. George Inn & Suites</i>, a motel that I can recommend. From there, you can take the <i>Sun
                        Tran</i> bus to
                    <i>Springdale</i>, the entrance to the national park. The buses come very frequently. Once you’ve
                    paid the entrance fee to the park, you can take free buses that take you to the trails. However,
                    there are also trails that you can only reach by car. I only visited trails that were accessible by
                    bus.
                </p>
            </ArticleSection>
            <ArticleSection id="watchman-trail" header="Watchman Trail">
                <p>The Watchman Trail begins at the park’s entrance, and you don’t even need a bus to reach it. The
                    trail is relatively easy and takes about 1.5 to 2 hours to complete. When reaching its end, you’ll
                    be rewarded with a view of The Watchman, a small mountain.</p>
                <ArticleImage id="watchman-trail-images" :images="[
                    { path: '/images/places/zion-utah/watchman_trail2.jpeg', alt: 'The Watchman' },
                    { path: '/images/places/zion-utah/watchman_trail1.jpeg', alt: 'View over the canyon' },
                    { path: '/images/places/zion-utah/watchman_trail3.jpeg', alt: 'Beginning of the trail' },
                    { path: '/images/places/zion-utah/watchman_trail4.jpeg', alt: 'View of the trail' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="west-rim-trail" header="West Rim Trail">
                <p>This is the trail with the nicest views. I spent an entire day hiking that trail, going as
                    far as I could. I decided to return to the bus after I reached a huge canyon that you can see on the
                    photos. However, it’s worth noting that you can actually spend multiple days exploring the
                    entire trail.</p>
                <ArticleImage id="west-rim-trail-images1" :images="[
                    { path: '/images/places/zion-utah/west_rim4.jpeg', alt: 'The point where I returned' }
                ]"></ArticleImage>
                <ArticleImage id="west-rim-trail-images2" :images="[
                    { path: '/images/places/zion-utah/west_rim5.jpeg', alt: 'Viewpoint near Angels Landing' },
                    { path: '/images/places/zion-utah/west_rim2.jpeg', alt: 'View of the trail' },
                    { path: '/images/places/zion-utah/west_rim3.jpeg', alt: 'View of the trail' },
                    { path: '/images/places/zion-utah/west_rim1.jpeg', alt: 'View of the trail' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="the-narrows-riverside-walk" header="The Narrows / Riverside Walk">
                <p>
                    This trail is located at the final bus stop of the national park. To reach The Narrows, you
                    must first walk through the Riverside Walk trail, which will take approximately 30 minutes. Upon
                    reaching The Narrows, you’ll hike through water. Therefore, it’s essential to wear
                    sturdy boots, waterproof pants, and a pair of hiking poles. You can rent these items from a store
                    near the park’s entrance, which I didn't do. So I couldn't go very far.</p>
                <ArticleImage id="the-narrows-riverside-walk-images" :images="[
                    { path: '/images/places/zion-utah/narrows.jpeg', alt: 'The Narrows' },
                    { path: '/images/places/zion-utah/riverside_walk.jpeg', alt: 'Riverside Walk' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="other-trails" header="Other Trails">
                <p>The other trails that I visited were: The Grotto Trail, Pa'rus Trail, Emerald Pools, Kayenta
                    Trail, and Sand Bench Trail. I added a few photos of the nicest views.</p>
                <ArticleImage id="other-trails-images" :images="[
                    { path: '/images/places/zion-utah/other1.jpeg', alt: 'Nice View (1)' },
                    { path: '/images/places/zion-utah/other2.jpeg', alt: 'Nice View (2)' },
                    { path: '/images/places/zion-utah/other3.jpeg', alt: 'Nice View (3)' },
                    { path: '/images/places/zion-utah/other4.jpeg', alt: 'Nice View (4)' },
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="conclusion" header="Conclusion">
                <p>I spent two days in Zion and I loved it. The West Rim Trail was my highlight, and I
                    highly recommend it. I also appreciated that the park is conveniently accessible by public
                    transportation.</p>
            </ArticleSection>
        </template>
    </BlogArticle>
</template>

<script setup>
import ArticleSection from '~/components/ArticleSection.vue';

</script>