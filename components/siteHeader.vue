<script setup>
const isOpened = ref(false);
const isSticky = ref(false);
const isVisible = ref(true);
const isScrolling = ref(false);
let lastScrollTop = 0;
const { isMain } = defineProps({
    isMain: {
        type: Boolean,
        default: true,
    },
});
const handleScroll = () => {
    isScrolling.value = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        isVisible.value = false;
    } else {
        isVisible.value = true;
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    isSticky.value = scrollTop > 50;
    isVisible.value = !scrollTop > 50 ? true : isVisible.value;
}
const headerClasses = computed(() => {
    return {
        'fixed top-0 left-0 bg-opacity-50 backdrop-blur-md backdrop-brightness-[0.65]': isSticky.value,
        '-translate-y-full': !isVisible.value && isScrolling.value,
        'bg-transparent absolute': !isSticky.value,
        'backdrop-blur-md': isOpened.value,
        '!bg-main dark:!bg-[#232d46] dark:!border-b-2 dark:!border-b-thirdary': isMain,
    };
});
const logoClasses = computed(() => ({
    '!text-black dark:!text-white': isMain,
}));
const navClasses = computed(() => ({
    'max-lg:size-0': !isOpened.value,
    'size-80 py-8': isOpened.value,
}));
const linkClasses = (index) => ({
    'hidden': index === 0 && !isOpened.value,
    'max-lg:opacity-0': !isOpened.value,
    '!font-light !text-gray-600 hover:!text-black dark:!text-gray-300 dark:hover:!text-white': isMain,
    'hover:text-white text-gray-300': !isSticky.value,
    'hover:text-gray-300 text-white lg:text-gray-300 lg:hover:text-white': isSticky.value,
});
const burgerButtonClasses = computed(() => ({
    'before:rotate-45 before:mt-0 after:-mt-1 after:rotate-[135deg] bg-transparent': isOpened.value,
    'before:-mt-[8px] after:mt-[12px]': !isOpened.value,
    'bg-gray-700 after:bg-gray-700 before:bg-gray-700': isMain,
    'after:bg-white before:bg-white': !isMain,
    'bg-white': !isMain && !isOpened.value,
}));

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
    <header :class="headerClasses" class="shadow-md w-full transition-all duration-500 z-40">
        <div class="w-full py-4 px-5  md:px-20 flex items-center max-lg:flex-wrap"
            :class="{ 'max-2xl:container max-2xl:mx-auto max-xl:!px-3.5 xl:max-2xl:px-16 min-[1800px]:px-[7.5rem] md:px-36 2xl:max-[1800px]:px-6': isMain }">
            <NuxtLink to="/" class="text-2xl font-extrabold flex items-center mr-10 gap-4 text-white"
                :class="logoClasses">
                <UIcon name="cil:animal" size="36px" />
                <span class="max-smm:hidden text-nowrap">Лапа Помощи</span>
            </NuxtLink>

            <nav :class="navClasses"
                class="gap-4 text-2xl lg:text-lg flex items-center transition-all duration-[500ms] max-lg:basis-full lg:items-end max-lg:flex-col lg:flex-row max-lg:order-last">
                <NuxtLink v-for="(item, index) in headerLinks()" :key="index" :to="item.to"
                    class="text-nowrap transition-all duration-300 hover:cursor-pointer" :class="linkClasses(index)">
                    {{ item.label }}
                </NuxtLink>
                <Links :class="{ 'max-lg:hidden': !isOpened }" place="header" :isSticky="isSticky" :isMain="true" />
            </nav>

            <div class="flex items-center max-lg:ml-auto lg:basis-full justify-end h-8">
                <NuxtLink to="/login" :class="{ '!text-gray-700 dark:!text-white': isMain }"
                    class="ring-light max-lg:hidden ring-2 rounded-lg px-8 py-1 text-2xl hover:ring-0 hover:bg-light dark:hover:bg-thirdary  hover:shadow-none hover:text-black text-white shadow-xl shadow-light/20 transition-all duration-300">
                    Войти
                </NuxtLink>
                <AppSwitcher place="header" />
                <div class="flex lg:hidden h-full flex-col cursor-pointer items-center justify-center"
                    @click="isOpened = !isOpened">
                    <button :class="burgerButtonClasses" class="burger-button"></button>
                </div>
            </div>
        </div>
    </header>
</template>



<style scoped>
.burger-button,
.burger-button::before,
.burger-button::after {
    display: block;
    height: 4px;
    width: 35px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
}
</style>