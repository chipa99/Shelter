<script setup>
import { useStore } from '~/stores/auth'
const { id } = useRoute().params;
const { isAuthed } = useStore();
const getPet = async () => {
    const { data } = useFetch(`/api/${id}`);
    return data.value
}
window.scrollTo(0, 91);
const pet = await getPet();
const takeHome = () => {
    isAuthed == false ? navigateTo('/login') : true;
};
</script>

<template>
    <div class="xl:px-12 2xl:px-32 container mx-auto">
        <div class="p-4 flex flex-row gap-8 min-h-[33.1rem]">
            <aside class="basis-full">
                <h1 class="text-5xl text-bold text-black text-nowrap max-lg:truncate mb-6">{{ pet.name }}</h1>
                <h2 class="text-3xl text-bold text-black text-nowrap max-lg:truncate mb-2">Дата рождения: {{
                    pet.birthdate }}
                </h2>
                <h2 class="text-3xl text-bold text-black text-nowrap max-lg:truncate mb-2">Окрас: {{ pet.color }}</h2>
                <h2 class="text-3xl text-bold text-black text-nowrap max-lg:truncate mb-6">Тип шерсти: {{ pet.wool }}
                </h2>
                <p class="text-2xl max-h-[20rem] text-wrap truncate text-gray-600 mb-8">
                    {{ pet.description }}
                </p>
                <button @click="takeHome"
                    class="text-thirdary text-3xl transition-all duration-500 hover:underline underline-offset-4  decoration-thirdary mb-2">Забрать
                    животное домой</button>
                <button
                    class="text-red-400 text-3xl transition-all duration-500 hover:underline underline-offset-4  decoration-red-400">Добавить
                    в избранное</button>
            </aside>
            <aside class="rounded-lg bg-cover bg-no-repeat w-[80rem] h-[94vh]"
                :style="`background-image: url(` + pet.image + `)`">
            </aside>
        </div>
    </div>
</template>