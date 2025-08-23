<template>
  <ClientOnly fallback-tag="span" fallback="Loading map...">
    <div class="h-80 mdlg:h-120">
      <LMap class="rounded-lg border border-primary-400 shadow-md" :zoom="widthStore.windowWidth < widthStore.sizes['mdlg'] ? 1 : 2" :min-zoom="1" :max-bounds="[[-90, -180], [90, 180]]"
        :center="[30, -10]" :use-global-leaflet="true" ref="map" @ready="onMapReady">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base" name="OpenStreetMap" class=" rounded-lg" :no-wrap="true" />
      </LMap>
    </div>
  </ClientOnly>
</template>

<script setup>
import L from 'leaflet'
import { useWidthStore } from '/stores/width';

const props = defineProps(["locations"]);
const widthStore = useWidthStore();
const map = ref(null);

// When the map is ready
const onMapReady = () => {

  var markerIcon = L.icon({
    iconUrl: '/images/marker.svg',
    shadowUrl: '/images/marker_shadow.svg',

    iconSize: [30, 30], // size of the icon
    shadowSize: [30, 30], // size of the shadow
    iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [6, 30],  // the same for the shadow
    popupAnchor: [0, -30] // point from which the popup should open relative to the iconAnchor
  });

  function sanitize(string) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match) => (map[match]));
  }

  props.locations.forEach((location) => {
    L.marker(location.position, { icon: markerIcon })
      .addTo(map.value.leafletObject)
      .bindPopup(
        `<div class="flex flex-col items-center justify-start mb-5 gap-2">
          <p class="font-bold mt-0" style="margin: 0; padding: 0;">` + sanitize(location.mapName) + `</p>

          <div class="flex items-center py-1 px-2">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 stroke-font-dark">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <p class="text-sm" style="margin: 0; padding: 0;">`+ sanitize("" + location.rating) + ` / 10</p>
          </div>
          <a href="` + sanitize(location.link) + `" class="btn-primary last:text-font-dark hover:text-font-light">Read</a>
        </div>`);
  });
}
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  body {
    background-color: lightblue;
  }
}
</style>
