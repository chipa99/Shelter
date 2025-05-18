<script setup>
const navs = ['Terms of Service', 'Privacy Policy', 'Security', 'Sitemap'];
const items = ['English', 'Russian']
const selected = ref(items[1]);
const isDark = useState('theme', () => useColorMode().preference == 'dark')
watch(isDark, (newIsDark) => {
    useColorMode().preference = newIsDark ? 'dark' : 'light'
}, { immediate: true }) 
</script>

<template>
    <footer class="size-full bg-thirdary dark:bg-[#354768]">
        <div class=" py-8  flex flex-col items-center gap-6 container mx-auto xl:px-16 2xl:px-28">
            <header class=" flex flex-col smm:flex-row gap-4 items-center justify-center">
                <UIcon name="cil:animal" class="text-white" size="36px" />
                <h1 class="text-white text-2xl font-semibold text-center">Лапа Помощи</h1>
            </header>
            <nav class="flex flex-col sm:flex-row items-center gap-6 smm:gap-12 ">
                <a v-for="link, index in navs" :key="index"
                    class="text-gray-300 max-sm:basis-1/2 hover:text-white hover:cursor-pointer transition duration-300 text-nowrap">{{
                        link
                    }}</a>
            </nav>
        </div>
        <footer class=" w-full bg-[#486291] dark:bg-[#28354e] pt-4 pb-4">
            <div class="sm:container sm:mx-auto flex flex-row xl:px-12 2xl:px-28 justify-between ">
                <AppSwitcher place="footer" />
                <Links place="footer" :isMain="true" />
                <div class="flex items-center max-sm:pr-8 flex-row gap-2">
                    <UIcon class="text-white max-lg:order-last size-7 md:size-5" name="solar:copyright-broken" />
                    <span class="text-white text-sm max-lg:hidden">2025 Paw of help. </span> <span
                        class="text-white text-sm max-smm:hidden inline max-md:hidden"> All
                        rights reserved
                    </span>
                </div>
            </div>
        </footer>
    </footer>
</template>
