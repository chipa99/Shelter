<script setup>
definePageMeta({
    layout: 'empty'
});
</script>

<template>
    <div class="size-full scroll scroll-smooth  overflow-x-hidden">
        <div class="h-[120vh] overflow-hidden">
            <siteHeader :is-main="false" />
            <AppHeroSection />
        </div>
        <div class="bg-[#5a5451]">
            <steps />
            <benefits />
            <volunteer />
        </div>
        <AppFooter />
    </div>
</template>
