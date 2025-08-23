import { defineStore } from "pinia";

export const useCitiesStore = defineStore("cities", () => {

    // united states
    const usCities = reactive(new Map());
    usCities.set('nyc-us', reactive({ mapName: "New York City, NY, USA", position: [40.730610, -73.935242], rating: 9, link: "/new-york-city", date: new Date('2024-11-27') }));
    usCities.set('dc-us', reactive({ mapName: "Washington, DC, USA", position: [38.889805, -77.009056], rating: 8, link: "/washington-dc", date: new Date('2024-12-17') }));
    usCities.set('boston-us', reactive({ mapName: "Boston, MA, USA", position: [42.361145, -71.057083], rating: 7, link: "/boston-massachusetts", date: new Date('2024-12-19') }));
    usCities.set('cleveland-us', reactive({ mapName: "Cleveland, OH, USA", position: [41.505493, -81.681290], rating: 6, link: "/cleveland-ohio", date: new Date('2025-01-14') }));
    usCities.set('detroit-us', reactive({ mapName: "Detroit, MI, USA", position: [42.331429, -83.045753], rating: 3, link: "/detroit-michigan", date: new Date('2025-01-12') }));
    usCities.set('providence-us', reactive({ mapName: "Providence, RI, USA", position: [41.825226, -71.418884], rating: 7, link: "/providence-rhode-island", date: new Date('2025-01-02') }));
    usCities.set('chicago-us', reactive({ mapName: "Chicago, IL, USA", position: [41.881832, -87.623177], rating: 8, link: "/chicago-illinois", date: new Date('2025-01-07') }));
    usCities.set('portsmouth-us', reactive({ mapName: "Portsmouth, NH, USA", position: [43.071568, -70.762245], rating: 6, link: "/portsmouth-new-hampshire", date: new Date('2025-01-05') }));
    usCities.set('new-haven-us', reactive({ mapName: "New Haven, CT, USA", position: [41.310726, -72.929916], rating: 5, link: "/new-haven-connecticut", date: new Date('2024-12-30') }));
    usCities.set('charleston-us', reactive({ mapName: "Charleston, SC, USA", position: [32.776566, -79.930923], rating: 8, link: "/charleston-south-carolina", date: new Date('2025-03-20') }));
    usCities.set('miami-us', reactive({ mapName: "Miami, FL, USA", position: [25.793449, -80.139198], rating: 7, link: "/miami-florida", date: new Date('2025-03-16') }));
    usCities.set('sf-us', reactive({ mapName: "San Francisco, CA, USA", position: [37.773972, -122.431297], rating: 9, link: "/san-francisco-california", date: new Date('2025-05-17') }));
    usCities.set('las-vegas-us', reactive({ mapName: "Las Vegas, NV, USA", position: [36.188110, -115.176468], rating: 1, link: "/las-vegas-nevada", date: new Date('2025-05-20') }));
    usCities.set('zion-us', reactive({ mapName: "Zion National Park, UT, USA", position: [37.188869, -112.998550], rating: 10, link: "/zion-national-park-utah", date: new Date('2025-05-22') }));


    const allCities = reactive(new Map([...usCities, ]));

    return { allCities, usCities };
});