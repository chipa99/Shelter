<script setup>
onMounted(() => window.scrollTo(0, 120));
const { isFavorite, getPet, addToFavorite } = usePet();
const pet = await getPet();
const isOpened = ref(false);
const takeHome = () => {
    store.isAuthed === false ? navigateTo("/login") : true;
    isOpened.value = true;
};
</script>

<template>
    <div class="md:max-lg:px-12  xl:px-16 2xl:px-28 md:container mx-auto pt-20">
        <UModal v-model="isOpened" :ui="{ body: '!w-[1300px] !bg-white' }">
            <div class="p-4 flex flex-col">
                <h1 class="text-gray-600 font-extrabold text-4xl mb-8">Данная функция все еще в разработке...</h1>
                <UIcon name="icomoon-free:spinner11" size="60px" class="self-center animate-spin rotate-x-60" />
            </div>
        </UModal>
        <div
            class="max-lg:p-4 sm:max-lg:p-8 max-lg:dark:bg-[#232d46] rounded-xl lg:py-6 flex lg:flex-row flex-col-reverse max-lg:items-center lg:justify-between gap-8 min-h-[33.1rem]">
            <aside class="md:w-[32rem] lg:w-[43%] ">
                <h1 class="text-4xl md:text-5xl text-bold text-black dark:text-light text-nowrap max-lg:truncate mb-6">
                    {{
                        pet.name
                    }}</h1>
                <p
                    class="text-2xl md:text-3xl text-bold text-black dark:text-darkLight max-xl:text-2xl  md:text-nowrap sm:max-lg:truncate mb-2">
                    Дата
                    рождения: {{
                        pet.birthdate }}
                </p>
                <p
                    class="text-2xl md:text-3xl text-bold text-black dark:text-darkLight max-xl:text-2xl md:text-nowrap sm:max-lg:truncate mb-2">
                    Окрас:
                    {{
                        pet.color }}</p>
                <p
                    class="text-2xl md:text-3xl text-bold text-black dark:text-darkLight max-xl:text-2xlmd:text-nowrap sm:max-lg:truncate mb-6">
                    Тип
                    шерсти:
                    {{
                        pet.wool }}
                </p>
                <p class="text-xl md:text-2xl max-h-[20rem] text-wrap truncate text-gray-600 dark:text-gray-400 mb-12">
                    {{ pet.description }}
                </p>
                <button @click="takeHome"
                    class="text-thirdary text-3xl hover:underline underline-offset-4 dark:text-light dark:decoration-light decoration-thirdary mb-2 transition-all duration-500">Забрать
                    животное домой</button>
                <button @click="addToFavorite"
                    class="text-red-400 text-3xl hover:underline underline-offset-4 decoration-red-400 transition-all duration-500">
                    {{ !isFavorite ? 'Добавить в избранное' : 'Удалить из избранных' }}</button>
            </aside>
            <aside class="rounded-lg bg-cover bg-no-repeat bg-center w-full md:w-[32rem] h-[80vh] lg:h-[84vh]"
                :style="`background-image: url(` + pet.image + `)`">
            </aside>
        </div>
    </div>
</template>