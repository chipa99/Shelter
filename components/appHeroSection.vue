<script setup>
const { isSticky } = defineProps(['isSticky']);
</script>

<template>
    <div class="mx-auto">
        <video
            class="absolute h-[120vh] min-w-full -z-20 top-0 left-0 object-cover max-sm:object-[63%] object-[70%] lg:object-[50%] xl:object-[20%] 2xl:object-[10%] "
            autoplay muted loop>
            <source src="../public/video.mov" type="video/mp4">
        </video>
        <div class="*:second-font lg:container px-5 md:px-20 pt-36 lg:pt-36 flex flex-col justify-normal max-md:h-full">
            <header class="w-fit mb-10 *:second-font max-md:mb-8">
                <h1 class="text-white text-4xl md:text-5xl font-extrabold mb-6 text-wrap">Протяни свою лапу тому, <br>
                    кому она и
                    вправду
                    нужна!
                </h1>
                <h2 class="text-gray-700 md:text-gray-300 text-xl sm:text-2xl md:text-3xl mb-5 max-smm:invisible">"Мы в
                    ответе за тех,
                    кого приручили"</h2>
                <h3 class="text-black text-lg sm:text-xl text-center sm:text-end font-semibold max-smm:invisible">
                    Антуан де Сент-Экзюпери
                </h3>
            </header>

            <div class="flex max-md:justify-end mb-40 sm:mb-60 md:mb-40">
                <appButton label="Искать друга" href="/pets/1" />
            </div>
            <footer
                class="flex flex-row max-smm:flex-wrap max-md:justify-center smm:divide-x-[3px] rounded-lg divide-thirdary lg:divide-light ">
                <div class="flex flex-col gap-4 first:pr-4 last:pl-4 " :class="{ 'px-4': index == 1 }"
                    v-for="item, index in heroSectionItems()" :key="index">
                    <h1
                        class="text-2xl sm:text-3xl font-bold text-center lg:text-white text-nowrap text-black second-font">
                        {{
                            item.title }}
                    </h1>
                    <h2 class="text-xl sm:text-2xl font-semibold lg:text-gray-300 text-blue-500 text-nowrap text-center"
                        v-html="item.subtitle">
                    </h2>
                </div>

            </footer>
        </div>
    </div>
</template>
