<template>
    <BlogArticle>
        <template #header>
            <h1 class="article-header">Las Vegas, Nevada, USA</h1>
            <p class="header-text">
                Las Vegas, a desert city with a population of approximately 650,000 people, is known for its huge
                casinos and luxurious hotels. However, apart from these attractions, the city has not much more to
                offer.
                Unless you’re into gambling or partying, you might want to consider exploring other destinations. This
                region of the country has a diverse range of nature that is worth discovering. I stayed in Las Vegas for
                1.5 days.
            </p>
        </template>
        <template #body>
            <ArticleSection id="arrival" header="Arrival">
                <p>Since the city lacks train connections, the only viable option for tourists is by plane. I arrived at
                    the Harry Reid International Airport after my trip to San Francisco. I stayed at <i>Bungalows
                        Hostel</i>, which I can't recommend. The place was dirty, and the staff was extremely
                    unfriendly. To make matters worse, someone stole my phone charger that I had left on my bed. (Who
                    steals a phone charger?) The area of the hotel was also somewhat shady, and I felt unsafe. I would
                    highly recommend staying at a hotel on <i>The Strip</i> and never going outside that area.
                </p>
            </ArticleSection>
            <ArticleSection id="the-strip" header="The Strip">
                <p>In essence,
                    the only two places you should visit as a tourist are The Strip, where all the casinos and
                    hotels are located, and
                    <i>Fremont Street</i>, where all the partying takes place. The rest of the city is full of
                    homeless people and drug addicts. I’m serious, I’ve never seen so many homeless people in my entire
                    life before. You should also always take the bus to travel between these two places. A day ticket is
                    pretty cheap. Walking between those two places takes too long and feels unsafe. (I tried it.)
                    During the day, The Strip is relatively empty, likely due to the unberable heat of the sun. The
                    only place I believe is worth visiting is the iconic Las Vegas sign. You can reach it by bus.
                    However, if you’re planning to take a photo, be prepared to wait in a long line.
                </p>
                <ArticleImage id="the-strip-images" :images="[
                    { path: '/images/places/las-vegas-nevada/strip1.jpeg', alt: 'Las Vegas Sign' },
                    { path: '/images/places/las-vegas-nevada/strip2.jpeg', alt: 'Paris Las Vegas' },
                    { path: '/images/places/las-vegas-nevada/strip3.jpeg', alt: 'New York-New York' },
                    { path: '/images/places/las-vegas-nevada/strip4.jpeg', alt: 'Luxor' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSubSection id="caesars-palace" header="Caesars Palace">
                <p>During the night, The Strip gets crowded more and more. I went into <i>Caesars
                        Palace</i>, one of the largest casinos on The Strip. The place looks very prestigious, and there
                    are many things to explore. They've built a city inside the casino featuring
                    luxurious stores and restaurants. Notably, there’s also <i>Hell’s Kitchen</i>, a restaurant by
                    Gordon Ramsay.
                </p>
                <ArticleImage id="caesars-palace-images" :images="[
                    { path: '/images/places/las-vegas-nevada/caesars_palace2.jpeg', alt: 'Caesar\'s Palace Casino' },
                    { path: '/images/places/las-vegas-nevada/caesars_palace1.jpeg', alt: 'Inside Caesar\'s Palace' },
                    { path: '/images/places/las-vegas-nevada/caesars_palace3.jpeg', alt: 'Inside Caesar\'s Palace' },
                    { path: '/images/places/las-vegas-nevada/caesars_palace4.jpeg', alt: 'Hell\'s Kitchen' }
                ]"></ArticleImage>
            </ArticleSubSection>
            <ArticleSubSection id="bellagio" header="Fountains of Bellagio">
                <p>Next to Caesars Palace lies <i>Bellagio</i>, another huge casino. They have these cool
                    fountain shows that play every fifteen minutes.
                </p>
                <ArticleImage id="bellagio-images" :images="[
                    { path: '/images/places/las-vegas-nevada/bellagio.jpeg', alt: 'Bellagio Casino' }
                ]"></ArticleImage>
            </ArticleSubSection>
            <ArticleSection id="fremont-street" header="Fremont Street">
                <p>Fremont Street is the place to go for partying. It has a variety of bars, discos, and restaurants,
                    and of course, casinos. You’ll see all sorts of weird people there. If you’re not drunk, you’ll
                    feel like the only normal person on the planet. It’s actually fun to walk around for a while and
                    watch everyone doing stupid things.</p>
                <ArticleImage id="fremont-street-images" :images="[
                    { path: '/images/places/las-vegas-nevada/fremont_street2.jpeg', alt: 'Fremont Street Experience Entrance' },
                    { path: '/images/places/las-vegas-nevada/fremont_street1.jpeg', alt: 'Another Las Vegas Sign' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="conclusion" header="Conclusion">
                <p>
                    Las Vegas was an unpleasant experience for me. I felt unsafe walking around there,
                    and the homeless people made me feel bad. Sadly, this place is only for drinking and gambling.
                </p>
            </ArticleSection>
        </template>
    </BlogArticle>
</template>