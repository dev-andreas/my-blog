import { defineStore } from "pinia";

export const useWidthStore = defineStore("width", () => {

    const windowWidth = ref(0);
    const sizes = reactive({
        '2xs': 360,
        'xs': 414,
        'sm': 640,
        'md': 768,
        'mdlg': 960,
        'lg': 1024,
        'xl': 1280,
        '2xl': 1536
    })

    function resize() {
        windowWidth.value = window.innerWidth;
    }

    onMounted(() => {
        resize();
        window.addEventListener('resize', resize);
    });

    const mobileView = computed(() => windowWidth.value < 1024);

    return { windowWidth, sizes, mobileView };
});