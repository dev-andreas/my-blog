import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", () => {
    const sectionsMap = ref(new Map());
    const sectionsList = ref([])

    function $reset() {
        sectionsMap.value = new Map();
        sectionsList.value.length = 0;
    }

    function appendSection(section) {
        sectionsMap.value.set(section.id, false);
        sectionsList.value.push(section);
    }

    function updateSection(section, intersects) {
        sectionsMap.value.set(section, intersects);
    }

    const getLowestSection = computed(() => {
        for (let i = 0; i < sectionsList.value.length; i++) {
            let sectionId = sectionsList.value[i].id;
            if (sectionsMap.value.get(sectionId)) {
                return sectionId;
            }
        }
    });

    return { $reset, appendSection, updateSection, getLowestSection, sectionsList };
});