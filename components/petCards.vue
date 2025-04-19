<script setup>
const { pets, place } = defineProps(['pets', 'place']);
// const addToFavourite = () => {
//     const cookie = useCookie('favourites',);
// }
</script>

<template>
    <section>
        <div class="grid scroll sm:max-md:justify-items-center" v-if="pets.length != 0"
            :class="{ 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-4 min-h-[50vh]': place == 'main', 'md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4': (place == 'profile' || place == 'meetings') && pets.length != 0 }">
            <NuxtLink v-for="pet, index in pets" :key="index" :to="'/pets/pet/' + pet._id"
                class="pt-4 rounded-xl sm:max-md:w-[80%] grayscale-[0.2] hover:grayscale-0 flex flex-col justify-between hover:cursor-pointer shadow-md hover:shadow-xl outline-0 transition-all bg-cover  duration-500  relative"
                :class="{ 'h-[400px]': place == 'main', 'h-[380px]': place == 'profile' || place == 'meetings' }"
                :style="`background-image: url(` + pet.image + `)`">
                <div class="rounded-xl  bg-black/30   w-fit self-center px-2 py-1">
                    <h1 class="text-white text-2xl font-semibold  ">
                        {{
                            pet.name }}</h1>
                </div>

                <footer
                    class="backdrop-blur-lg backdrop-brightness-[0.7] p-4 w-full rounded-b-xl flex flex-row items-center cursor-default transform-none h-[22%]">
                    <div class="flex flex-row  gap-1 gap-x-2  md:w-[30%] xl:w-[38%] items-center  h-16"
                        :class="{ 'w-[70%] smm:w-3/4 sm:w-[35%] md:w-2/4  smm:mr-4': place != 'meetings', 'w-[0%] sm:w-[45%] ': place == 'meetings' }">
                        <p class="text-gray-200 text-sm overflow-hidden text-ellipsis whitespace-nowrap max-h-full">
                            {{
                                pet.description }}
                        </p>
                    </div>
                    <div class="md:w-[70%] xl:w-[62%] max-sm:flex  "
                        :class="{ 'w-fit sm:w-[65%] md:w-2/4 justify-end': place != 'meetings', 'w-full sm:w-[55%]': place == 'meetings' }">
                        <button type="button" v-if="place != 'meetings'"
                            class="border-white border-2 w-full outline-none flex justify-center items-center max-sm:px-3 gap-1 hover:bg-white hover:text-black transition duration-500 py-3 flex-nowrap text-nowrap text-white rounded-3xl"
                            @click="addToFavourite(pet)">
                            <UIcon name="line-md:heart" class="sm:hidden size-7" v-if="place != 'profile'" />
                            <UIcon name="solar:heart-broken-broken" class="sm:hidden size-7" v-else />
                            <!-- TODO: Make a dependence on being favorite or not even on the main page -->
                            <span class="max-sm:hidden" v-if="place != 'profile'">Добавить в избранных</span>
                            <span class="max-sm:hidden" v-else>Убрать из избранных</span>
                        </button>
                        <div v-else>
                            <h1 class="text-white  truncate">Дата: 16:00, 7 ноября</h1>
                            <h1 class="text-white   truncate">Адрес: ул. Пушкина, д. 92 </h1>
                        </div>
                    </div>
                </footer>
            </NuxtLink>
        </div>
        <div v-if="pets.length == 0" class="flex items-center flex-col">
            <h1 class="text-3xl text-gray-600 font-bold mb-4" v-if="place == 'profile'">У вас пока нет любимых
                животных..</h1>
            <h1 class="text-3xl text-gray-600 font-bold mb-4" v-if="place == 'meetings'">У вас пока нет встреч с
                животными..</h1>
            <NuxtLink to="/pets/page/1"
                class=" inline-block w-[9.1rem] shadow-lg py-3 px-4 text-xl text-nowrap text-white bg-[#74a5ff] hover:bg-[#528fff] rounded-3xl  font-extrabold transiton duration-300">
                К животным
            </NuxtLink>
        </div>
    </section>
</template>
