<script setup>
const { pets, place } = defineProps(['pets', 'place']);
</script>

<template>
    <section>
        <div class="grid scroll sm:max-md:justify-items-center" v-if="pets.length != 0"
            :class="{ 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-4 min-h-[50vh]': place == 'main', 'md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4': (place == 'profile' || place == 'meetings') && pets.length != 0 }">
            <NuxtLink v-for="pet, index in pets" :key="index" :to="'/pets/pet/' + pet._id"
                class="pt-4 rounded-xl sm:max-md:w-[80%] grayscale-[0.2] hover:grayscale-0 flex flex-col justify-between hover:cursor-pointer shadow-md hover:shadow-xl outline-0 transition-all bg-cover dark:hover:shadow-light/10 dark:shadow-none dark:hover:shadow-xl  duration-500 relative"
                :class="{ 'h-[400px]': place == 'main', 'h-[380px]': place == 'profile' || place == 'meetings' }"
                :style="`background-image: url(` + pet.image + `)`">
                <div class="rounded-xl  bg-black/30   w-fit self-center px-2 py-1">
                    <h1 class="text-white  text-2xl font-semibold  ">
                        {{
                            pet.name }}</h1>
                </div>
                <footer
                    class="backdrop-blur-lg backdrop-brightness-[0.7] dark:backdrop-brightness-50 p-4 w-full rounded-b-xl flex flex-row items-center cursor-default transform-none h-[22%]">
                    <div class="flex flex-row  gap-1 gap-x-2 w-full items-center  h-16">
                        <p class="text-gray-200 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-h-full">
                            {{
                                pet.description }}
                        </p>
                    </div>
                </footer>
            </NuxtLink>
        </div>
        <div v-if="pets.length == 0" class="flex h-full items-center flex-col pt-60">
            <h1 class="text-3xl text-gray-600 font-bold text-center mb-4" v-if="place != 'main'"> {{
                place == 'profile' ? 'У вас пока нет любимых животных..' : '' }}
                {{ (place == 'meetings' ? 'Эта страница все еще в разработке, извиняемся за причиняемые не удобства' :
                    '') }}
            </h1>
            <NuxtLink to="/pets/1"
                class=" inline-block w-[9.1rem] shadow-lg py-3 px-4 text-xl text-nowrap text-white bg-[#74a5ff] hover:bg-[#528fff] rounded-3xl  font-extrabold transiton duration-300">
                К животным
            </NuxtLink>
        </div>
    </section>
</template>

<style scoped>
* {
    scrollbar-width: 9px !important;
}

::-webkit-scrollbar {
    width: 9px !important;
    background-color: #ffede1;
    z-index: -10;
}

::-webkit-scrollbar-thumb {
    background: rgb(227, 227, 227);
    z-index: -10;
    height: 20px;
}
</style>