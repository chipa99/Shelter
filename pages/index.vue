<script setup>
definePageMeta({
    layout: 'empty'
});
const isSticky = ref(false);
const isVisible = ref(true);
const isScrolling = ref(false);
let lastScrollTop = 0; // Store the last scroll position

const handleScroll = () => {
    isScrolling.value = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        isVisible.value = false;
    } else {
        // Scrolling up
        isVisible.value = true;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    if (scrollTop > 50) {
        isSticky.value = true;
    } else {
        isSticky.value = false;
        isVisible.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <div class="size-full scroll scroll-smooth  overflow-x-hidden">
        <div class="h-[120vh] overflow-hidden">
            <siteHeader :isSticky="isSticky" :isVisible="isVisible" :isScrolling="isScrolling" />
            <AppHeroSection :isSticky="isSticky" />
        </div>
        <div class="bg-[#5a5451]">
            <steps />
            <benefits />
            <volunteer />
        </div>
        <AppFooter />
    </div>
</template>
