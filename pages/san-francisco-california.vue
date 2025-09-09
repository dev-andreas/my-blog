<template>
    <BlogArticle>
        <template #header>
            <h1 class="article-header">San Francisco, California, USA</h1>
            <p class="header-text">
                San Francisco is a coastal city at the west coast of the United States. As of 2025, the city has a
                population of approximately 800,000 people.
                Considering its size, I highly recommend spending at least three days exploring the city. The weather in
                San Francisco is generally mild throughout the year, but it can get pretty cold during the nighttime
                hours.
            </p>
        </template>
        <template #body>
            <ArticleSection id="arrival" header="Arrival">
                <p>I arrived at the San Francisco airport at 2 AM because my plane had been delayed by over an hour.
                    (Thank you Delta!)
                    Unfortunately, the trains only operate until midnight, but I managed to catch a night bus
                    that took me to downtown. Make sure to arrive at the airport before midnight, or take an Uber! The
                    bus was quite
                    run-down, and there was an urine odor
                    inside. It was also filled with weird people, some of them seemed to be experiencing a bit of a
                    psychedelic phase. At least the bus was free...
                    I arrived at my hostel at 3 AM called <i>ITH Pacific
                        Tradewinds</i>, which I can highly recommend.</p>
            </ArticleSection>
            <ArticleSection id="golden-gate-bridge" header="Golden Gate Bridge">
                <p>The Golden Gate Bridge is the most famous symbol of San Francisco. When it opened, it was the longest
                    and tallest suspension bridge in the world. If you’re there, you should definitely walk across the
                    bridge and take a photo at <i>Golden Gate Bridge Vista Point</i>. You’ll get an amazing view of the
                    bridge
                    and the city skyline. You can also get a great view of the bridge from <i>Lands End</i>.</p>
                <ArticleImage id="golden-gate-bridge-images1" :images="[
                    { path: '/images/places/sf-california/golden_gate_bridge1.jpeg', alt: 'Golden Gate Bridge' }
                ]"></ArticleImage>
                <ArticleImage id="golden-gate-bridge-images2" :images="[
                    { path: '/images/places/sf-california/golden_gate_bridge2.jpeg', alt: 'Golden Gate Bridge from Lands End' },
                    { path: '/images/places/sf-california/golden_gate_bridge3.jpeg', alt: 'Me walking across the bridge' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="lands-end" header="Lands End">
                <p>Lands End is a park in San Francisco. You’ll get amazing views of the coast and the
                    Golden Gate Bridge.
                </p>
                <ArticleImage id="golden-gate-bridge-images1" :images="[
                    { path: '/images/places/sf-california/lands_end1.jpeg', alt: 'Lands End Coastline' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="golden-gate-park" header="Golden Gate Park">
                <p>The Golden Gate Park is a massive urban park in the city. It has a lot of nature, museums, and even
                    a beach on the coast.
                </p>
                <ArticleImage id="golden-gate-park-images" :images="[
                    { path: '/images/places/sf-california/golden_gate_park3.jpeg', alt: 'Golden Gate Park Windmills' },
                    { path: '/images/places/sf-california/golden_gate_park4.jpeg', alt: 'Bison Paddock' },
                    { path: '/images/places/sf-california/golden_gate_park1.jpeg', alt: 'Somewhere near the Presidio' },
                    { path: '/images/places/sf-california/golden_gate_park2.jpeg', alt: 'Beach' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSubSection id="japanese-tea-garden" header="Japanese Tea Garden">
                <p>The Japanese Tea Garden is inside Golden Gate Park. The entrance fee is $21.75
                    for adults, which I personally don’t think is worth it. However, you can
                    enter the garden for free from 9 AM to 10 AM on Mondays, Wednesdays, and Fridays. The garden itself
                    is quite small, but it’s still a lovely place to stroll around.
                </p>
                <ArticleImage id="japanese-tea-garden-images" :images="[
                    { path: '/images/places/sf-california/japanese_tea_garden1.jpeg', alt: 'Pagoda' },
                    { path: '/images/places/sf-california/japanese_tea_garden2.jpeg', alt: 'Buddha Statue' }
                ]"></ArticleImage>
            </ArticleSubSection>
            <ArticleSubSection id="botanic-garden" header="Botanic Garden">
                <p>The SF Botanic Garden is right next to the Japanese Tea Garden. The entrance fee is $20.75, but it’s
                    totally worth it. It’s one of the most beautiful botanic gardens I’ve ever seen, and you could
                    easily spend an entire morning there.</p>
                <ArticleImage id="japanese-tea-garden-images" :images="[
                    { path: '/images/places/sf-california/botanic_garden1.jpeg', alt: 'Botanic Garden (1)' },
                    { path: '/images/places/sf-california/botanic_garden2.jpeg', alt: 'Botanic Garden (2)' },
                    { path: '/images/places/sf-california/botanic_garden3.jpeg', alt: 'Botanic Garden (3)' },
                    { path: '/images/places/sf-california/botanic_garden4.jpeg', alt: 'Botanic Garden (4)' }
                ]"></ArticleImage>
            </ArticleSubSection>
            <ArticleSection id="alcatraz" header="Alcatraz Prison">
                <p>Alcatraz Island is a small island next to downtown, and it’s where the prison used to be. The prison
                    closed
                    in 1963 and is now a popular tourist attraction. You can book a day tour for $53.25, and a ferry
                    will take you to the island. You’ll learn a lot about the prison and its history, so I think it’s
                    worth it. The island is now also a huge bird nesting place, so you'll see lots of birds.</p>
                <ArticleImage id="alcatraz-images" :images="[
                    { path: '/images/places/sf-california/alcatraz1.jpeg', alt: 'Cell Block' },
                    { path: '/images/places/sf-california/alcatraz2.jpeg', alt: 'Prison Escape Attempt' },
                    { path: '/images/places/sf-california/alcatraz3.jpeg', alt: 'Dark Cell' },
                    { path: '/images/places/sf-california/alcatraz4.jpeg', alt: 'Kitchen' },
                    { path: '/images/places/sf-california/alcatraz5.jpeg', alt: 'Bird Nesting Place' },
                    { path: '/images/places/sf-california/alcatraz6.jpeg', alt: 'Entrance' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="muir-woods" header="Muir Woods">
                <p>Muir Woods is a national park near San Francisco. The park is home of <i>Redwood Trees</i>, tall
                    trees with a soft bark. You can get there by bus, but I took an Uber instead because of the poor
                    experience I had on my first bus ride in the city. The ride was quite expensive, but I went there
                    with a friend so we could split the bill.
                </p>
                <ArticleImage id="muir-woods-images" :images="[
                    { path: '/images/places/sf-california/muir_woods1.jpeg', alt: 'Redwood Treetop' },
                    { path: '/images/places/sf-california/muir_woods2.jpeg', alt: 'Redwood Tree Bark' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="lombard-street" header="Lombard Street">
                <p>The downtown area of San Francisco resembles a typical American city. If you’ve visited several other
                    places in the U.S., it's nothing special anymore. However, there’s this unique
                    curvy road called <i>Lombard Street</i> that I found quite interesting. It may not be too
                    spectacular, but I took a few photos.
                </p>
                <ArticleImage id="lombard-street-images" :images="[
                    { path: '/images/places/sf-california/lombard_street1.jpeg', alt: 'Lombard Street (1)' },
                    { path: '/images/places/sf-california/lombard_street2.jpeg', alt: 'Lombard Street (2)' }
                ]"></ArticleImage>
            </ArticleSection>
            <ArticleSection id="conclusion" header="Conclusion">
                <p>I had an awesome time on my trip! The city itself is rather mid and the public transport isn't great, but the nature around it is
                    amazing and the weather is almost always perfect.
                </p>
            </ArticleSection>
        </template>
    </BlogArticle>
</template>