import { defineStore } from "pinia";

export const useCitiesStore = defineStore("cities", () => {

    const destinationMap = reactive(new Map());

    // united states
    destinationMap.set('nyc-us', reactive({
        mapName: "New York City, NY, USA",
        position: [40.730610, -73.935242],
        rating: 9,
        link: "/new-york-city",
        date: new Date('2024-11-27'),
        thumbnail: '/images/thumbnails/nyc_thumb.jpeg',
        description: 'Huge city, tall skyscrapers!',
    }));
    destinationMap.set('dc-us', reactive({
        mapName: "Washington, DC, USA",
        position: [38.889805, -77.009056],
        rating: 8,
        link: "/washington-dc",
        date: new Date('2024-12-17'),
        thumbnail: '/images/thumbnails/dc_thumb.jpeg',
        description: 'Plenty of free museums to check out!',
    }));
    destinationMap.set('boston-us', reactive({
        mapName: "Boston, MA, USA",
        position: [42.361145, -71.057083],
        rating: 6,
        link: "/boston-massachusetts",
        date: new Date('2024-12-19'),
        thumbnail: '/images/thumbnails/boston_thumb.jpeg',
        description: 'Nice walkable city, but boring',
    }));
    destinationMap.set('cleveland-us', reactive({
        mapName: "Cleveland, OH, USA",
        position: [41.505493, -81.681290],
        rating: 6,
        link: "/cleveland-ohio",
        date: new Date('2025-01-14'),
        thumbnail: '/images/thumbnails/cleveland_thumb.jpeg',
        description: 'Large theater district and huge art museum',
    }));
    destinationMap.set('detroit-us', reactive({
        mapName: "Detroit, MI, USA",
        position: [42.331429, -83.045753],
        rating: 3,
        link: "/detroit-michigan",
        date: new Date('2025-01-12'),
        thumbnail: '/images/thumbnails/detroit_thumb.jpeg',
        description: 'Tons of abandoned buildings',
    }));
    destinationMap.set('providence-us', reactive({
        mapName: "Providence, RI, USA",
        position: [41.825226, -71.418884],
        rating: 7,
        link: "/providence-rhode-island",
        date: new Date('2025-01-02'),
        thumbnail: '/images/thumbnails/providence_thumb.jpeg',
        description: 'Home of Brown University',
    }));
    destinationMap.set('chicago-us', reactive({
        mapName: "Chicago, IL, USA",
        position: [41.881832, -87.623177],
        rating: 8,
        link: "/chicago-illinois",
        date: new Date('2025-01-07'),
        thumbnail: '/images/thumbnails/chicago_thumb.jpeg',
        description: 'Home of Deep-Dish Pizza',
    }));
    destinationMap.set('portsmouth-us', reactive({
        mapName: "Portsmouth, NH, USA",
        position: [43.071568, -70.762245],
        rating: 6,
        link: "/portsmouth-new-hampshire",
        date: new Date('2025-01-05'),
        thumbnail: '/images/thumbnails/portsmouth_thumb.jpeg',
        description: 'Cute town with good restaurants and coffee shops',
    }));
    destinationMap.set('new-haven-us', reactive({
        mapName: "New Haven, CT, USA",
        position: [41.310726, -72.929916],
        rating: 5,
        link: "/new-haven-connecticut",
        date: new Date('2024-12-30'),
        thumbnail: '/images/thumbnails/new_haven_thumb.jpeg',
        description: 'Home of Yale University + good pizza',
    }));
    destinationMap.set('charleston-us', reactive({
        mapName: "Charleston, SC, USA",
        position: [32.776566, -79.930923],
        rating: 8,
        link: "/charleston-south-carolina",
        date: new Date('2025-03-20'),
        thumbnail: '/images/thumbnails/charleston_thumb.jpeg',
        description: 'Beautiful old town with dolphins at the coast!',
    }));
    destinationMap.set('miami-us', reactive({
        mapName: "Miami, FL, USA",
        position: [25.793449, -80.139198],
        rating: 7,
        link: "/miami-florida",
        date: new Date('2025-03-16'),
        thumbnail: '/images/thumbnails/miami_thumb.jpeg',
        description: 'Great beach and tropical weather',
    }));
    destinationMap.set('sf-us', reactive({
        mapName: "San Francisco, CA, USA",
        position: [37.773972, -122.431297],
        rating: 9,
        link: "/san-francisco-california",
        date: new Date('2025-05-17'),
        thumbnail: '/images/thumbnails/sf_thumb.jpeg',
        description: 'The iconic Golden Gate Bridge',
    }));
    destinationMap.set('las-vegas-us', reactive({
        mapName: "Las Vegas, NV, USA",
        position: [36.188110, -115.176468],
        rating: 1,
        link: "/las-vegas-nevada",
        date: new Date('2025-05-20'),
        thumbnail: '/images/thumbnails/las_vegas_thumb.jpeg',
        description: 'Lots of casinos and homeless people',
    }));
    destinationMap.set('zion-us', reactive({
        mapName: "Zion National Park, UT, USA",
        position: [37.188869, -112.998550],
        rating: 10,
        link: "/zion-national-park-utah",
        date: new Date('2025-05-22'),
        thumbnail: '/images/thumbnails/zion_thumb.jpeg',
        description: 'Stunning hiking routes!',
    }));

    const usaDestinations = reactive([
        destinationMap.get('zion-us'),
        destinationMap.get('nyc-us'),
        destinationMap.get('sf-us'),
        destinationMap.get('chicago-us'),
        destinationMap.get('dc-us'),
        destinationMap.get('charleston-us'),
        destinationMap.get('miami-us'),
        destinationMap.get('providence-us'),
        destinationMap.get('boston-us'),
        destinationMap.get('cleveland-us'),
        destinationMap.get('portsmouth-us'),
        destinationMap.get('new-haven-us'),
        destinationMap.get('detroit-us'),
        destinationMap.get('las-vegas-us'),
    ]);

    // france
    destinationMap.set('menton-fr', reactive({
        mapName: "Menton, France",
        position: [43.774483, 7.497540],
        rating: 7,
        link: "/menton-france",
        date: new Date('2025-08-27'),
        thumbnail: '/images/thumbnails/menton_thumb.jpeg',
        description: 'Great beach and hiking routes',
    }));

    const franceDestinations = reactive([
        destinationMap.get('menton-fr'),
    ]);

    // monaco
    destinationMap.set('monaco-mc', reactive({
        mapName: "Monaco",
        position: [43.733334, 7.416667],
        rating: 9,
        link: "/monaco",
        date: new Date('2025-08-30'),
        thumbnail: '/images/thumbnails/monaco_thumb.jpeg',
        description: 'Monte-Carlo Casino, luxury cars, and yachts!',
    }));

    const monacoDestinations = reactive([
        destinationMap.get('monaco-mc'),
    ]);

    // italy
    destinationMap.set('genoa-it', reactive({
        mapName: "Genoa, Italy",
        position: [44.414165, 8.942184],
        rating: 6,
        link: "/genoa-italy",
        date: new Date('2025-08-26'),
        thumbnail: '/images/thumbnails/genoa_thumb.jpeg',
        description: 'Old medival Italian city',
    }));

    const italyDestinations = reactive([
        destinationMap.get('genoa-it'),
    ]);

    // most recent destinations
    const mostRecentDestinations = reactive([
        destinationMap.get('monaco-mc'),
        destinationMap.get('menton-fr'),
        destinationMap.get('genoa-it'),
    ]);

    // highlight destinations
    const highlightDestinations = reactive([
        destinationMap.get('zion-us'),
        destinationMap.get('nyc-us'),
        destinationMap.get('monaco-mc')
    ])

    // all destinations
    const allDestinations = reactive([...destinationMap.values()]);

    // europe destinations
    const europeDestinations = reactive([...franceDestinations, ...italyDestinations, ...monacoDestinations]);

    // usa destinations
    const northAmericaDestinations = reactive([...usaDestinations])

    return {
        allDestinations,
        mostRecentDestinations,
        highlightDestinations,
        europeDestinations,
        northAmericaDestinations,
        franceDestinations,
        italyDestinations,
        monacoDestinations,
        usaDestinations
    };
});