<script setup>
const navs = ['Terms of Service', 'Privacy Policy', 'Security', 'Sitemap'];
const items = ['English', 'Russian']
const selected = ref(items[1]);
</script>

<template>
    <footer class="size-full bg-thirdary ">
        <div class=" py-8  flex flex-col items-center gap-6 container mx-auto xl:px-12 2xl:px-32">
            <header class=" flex flex-col smm:flex-row gap-4 items-center   ">
                <UIcon name="cil:animal" class="text-white" size="36px" />
                <h1 class="text-white text-2xl font-semibold text-center">Лапа Помощи</h1>
            </header>
            <nav class="flex flex-col sm:flex-row items-center gap-6 smm:gap-12 ">
                <a v-for="link, index in navs" :key="index"
                    class="text-gray-200 max-sm:basis-1/2    hover:text-gray-300 hover:cursor-pointer transition duration-300 text-nowrap">{{
                        link
                    }}</a>
            </nav>
        </div>
        <footer class=" w-full bg-[#486291] pt-4 pb-4">
            <div class="sm:container sm:mx-auto flex flex-row xl:px-12 2xl:px-32 justify-between ">
                <div class="max-sm:pl-6 ">
                    <USelectMenu v-slot="{ open }" v-model="selected" :options="items" :popper="{ arrow: true }">
                        <UButton variant="ghost" class="flex-1 text-white hover:bg-transparent  justify-between">
                            {{ selected }}
                            <UIcon name="i-heroicons-chevron-down-20-solid"
                                class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                                :class="[open && 'transform -rotate-90']" />
                        </UButton>
                    </USelectMenu>
                </div>
                <Links place="footer" />
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



<style></style>