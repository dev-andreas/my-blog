<template>
    <NuxtLink :to="props.to"
        class="btn btn-secondary flex items-center gap-2 font-bold">
        <span class="transition-all duration-200 ease-out">
            <slot></slot>
        </span>
        <SvgPathsArrowUpRightSvg
            class="stroke-font-dark h-3 transition-all duration-200 ease-out">
        </SvgPathsArrowUpRightSvg>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
    }
});
</script>