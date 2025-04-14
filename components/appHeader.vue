<script setup>
const links = ref([{
    label: 'Наши лапули',
    to: '/pets/1'
}, {
    label: 'О приюте',
    to: '/'
}, {
    label: 'Уход',
    to: '/'
}]);


const isOpened = ref(false);
onMounted(() => {
    const width = ref(window.innerWidth);
    width.value < 720 ? links.value.unshift({ label: 'Войти в аккаунт', to: '/profile' }) : true;
});
</script>

<template>
    <div>
        <header class="bg-main ">
            <nav class="container mx-auto py-2 flex flex-row justify-around  items-center flex-wrap">
                <div class="order-1 xl:basis-2/12 w-1/2"><img src="../public/logo.png"
                        class="w-35 h-[70px] hover:cursor-pointer" alt="brand_image">
                </div>
                <div :class="{ 'max-xl:h-0 max-xl:opacity-0': !isOpened, ' max-xl:py-2.5 max-xl:flex max-lg:h-[9.5rem] max-xl:h-[8.5rem]': isOpened }"
                    class=" order-3 xl:order-2 xl:basis-4/12 flex basis-full max-xl:flex-col gap-x-10 gap-y-2 justify-center transition-all duration-[400ms] ease-[cubic-bezier(0.455, 0.030, 0.515, 0.955)]">
                    <NuxtLink
                        class="text-xl hover:text-gray-500 text-black transition duration-300 outline-0 text-nowrap text-center"
                        v-for="link, index in links" :key="index" :to="link.to">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <div class="xl:order-3 order-2 xl:basis-3/12 w-1/2 flex justify-end gap-3 ">
                    <NuxtLink
                        class="text-xl rounded-3xl shadow-lg hover:shadow-gray-400 px-4 max-md:hidden py-[0.6rem] flex items-center outline-0 bg-thirdary text-white transition-shadow duration-500"
                        to="/login">Вход
                        и
                        Регистрирация
                    </NuxtLink>
                    <button @click="isOpened = !isOpened"
                        class="xl:hidden flex items-center p-2 bg-secondary transition duration-500 hover:cursor-pointer hover:bg-thirdary hover:text-white hover rounded-lg">
                        <UIcon name="fluent:navigation-16-filled" size="36px"></UIcon>
                    </button>
                </div>
            </nav>
        </header>
    </div>
</template>