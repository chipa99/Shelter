<script setup>
import { useStore } from '~/stores/auth'
const { id } = useRoute().params;
const { isAuthed } = useStore();
const getPet = async () => (await useFetch(`/api/${id}`)).data.value;
onMounted(() => window.scrollTo(0, 100));
const pet = await getPet();
const takeHome = () => {
    isAuthed == false ? navigateTo('/login') : true;
};
</script>

<template>
    <div class="max-lg:px-12 xl:px-12 2xl:px-24 container mx-auto">
        <div
            class="max-lg:p-8 max-lg:dark:bg-[#232d46] rounded-xl lg:py-4 flex lg:flex-row flex-col-reverse max-lg:items-center lg:justify-between gap-8 min-h-[33.1rem]">
            <aside class="w-[32rem] lg:w-[43%] ">
                <h1 class="text-5xl text-bold text-black dark:text-light text-nowrap max-lg:truncate mb-6">{{ pet.name
                    }}</h1>
                <h2
                    class="text-3xl text-bold text-black dark:text-darkLight max-xl:text-2xl text-nowrap max-lg:truncate mb-2">
                    Дата
                    рождения: {{
                        pet.birthdate }}
                </h2>
                <h2
                    class="text-3xl text-bold text-black dark:text-darkLight max-xl:text-2xl  text-nowrap max-lg:truncate mb-2">
                    Окрас:
                    {{
                        pet.color }}</h2>
                <h2
                    class="text-3xl text-bold text-black dark:text-darkLight max-xl:text-2xl text-nowrap max-lg:truncate mb-6">
                    Тип
                    шерсти:
                    {{
                        pet.wool }}
                </h2>
                <p class="text-2xl max-h-[20rem] text-wrap truncate text-gray-600 dark:text-gray-400 mb-12">
                    {{ pet.description }}
                </p>
                <button @click="takeHome"
                    class="text-thirdary text-3xl hover:underline underline-offset-4 dark:text-light dark:decoration-light decoration-thirdary mb-2 transition-all duration-500">Забрать
                    животное домой</button>
                <button
                    class="text-red-400 text-3xl hover:underline underline-offset-4 decoration-red-400 transition-all duration-500">Добавить
                    в избранное</button>
            </aside>
            <aside class="rounded-lg bg-cover bg-no-repeat bg-center w-[32rem] h-[80vh] lg:h-[94vh]"
                :style="`background-image: url(` + pet.image + `)`">
            </aside>
        </div>
    </div>
</template>