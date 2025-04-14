<script setup>
const benefits = [{
    title: 'Тщательный ветеринарный осмотр',
    place: 'text-center lg:pr-20 lg:mb-28 md:col-span-2'
},
{
    title: '5 лет опыта',
    place: 'text-center lg:text-start md:pl-8 lg:pl-28'
},
{
    title: 'Любовь и социализация',
    place: 'text-center lg:text-end md:pr-8 lg:pr-20 lg:mb-60 '
}, {
    title: 'Штат из 30 человек',
    place: 'text-center lg:text-start lg:pl-2'
},
{
    title: 'Поддержка и консультации',
    place: 'text-center lg:text-end md:pr-8 lg:pr-2'
}]
</script>

<template>

    <div
        class="bg-[#5a5451] rounded-b-3xl  shadow-2xl overflow-hidden h-[130vh] lg:h-[110vh] max-lg:flex flex-col  relative pt-6 md:pt-8 ">

        <h1 class="font-bold text-5xl text-white text-center mb-8 ">Почему же мы?</h1>
        <h3 class="text-2xl text-gray-200 text-center text-pretty mb-24">Потому что наш приют – это место, где
            бездомные
            животные обретают вторую жизнь, а вы – верного друга.</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 max-lg:mb-20 max-lg:gap-y-12">
            <h2 v-for="benefit, index in benefits" :key="index" class="lg:text-nowrap text-3xl z-10  text-white"
                :class="benefit.place">{{
                    benefit.title }}</h2>
        </div>

        <!-- TODO: MD ADAPTIVE START -->
        <div class="absolute bottom-0 xl:right-20 w-full h-fit z-0 ">
            <img src="../public/benefits.png" class="w-full lg:w-11/12 xl:w-8/12 z-0 md:mx-auto" alt="dog">
        </div>

        <NuxtLink to="/pets/1"
            class="lg:absolute right-20 z-10 bottom-20 max-lg:w-fit self-center border-main border-2 rounded-xl text-white text-2xl px-4 py-2 hover:bg-main hover:text-black hover:shadow-md hover:shadow-thirdary transition-all duration-500">
            Найти друга
        </NuxtLink>
    </div>

</template>

<style scoped>
.image-bg {
    background-image: url('../public/benefits.png');
}
</style>
