<script setup>
const advantages =
    [{
        title: 'Выбор',
        description: 'Выберите животное, которое вам понравилось',
        icon: 'fluent:animal-dog-24-regular',
        button: 'К животным'
    },
    {

        title: 'Регистрация',
        description: 'Несколько полей, и подходящая для вас дата, когда вы сможете приехать',
        icon: 'codicon:sign-in',
        button: 'К регистрации'
    },
    {
        title: 'Консультация',
        description: 'Мы скажем, подойдет ли вам это животное, если нет - выберем другое',
        icon: 'heroicons:question-mark-circle',
        button: 'К консультации'
    }];
</script>

<template>
    <div class="bg-main  overflow-hidden py-40 shadow-2xl">
        <h2 class="text-xl font-bold text-thirdary text-center">Лапа Помощи</h2>
        <h1 class="text-4xl smm:text-5xl font-bold text-gray-800 mb-32 text-center">
            Что же нужно сделать?
        </h1>
        <div
            class="max-md:container max-md:mx-auto lg:container lg:mx-auto max-lg:w-full  grid grid-cols-1 md:grid-cols-3 gap-y-6 lg:gap-6">
            <div class="flex flex-col items-center text-center h-fit smm:h-[27rem] md:h-[31rem] lg:h-[28rem] bg-[#f3e1d5] lg:rounded-xl max-lg:w-full p-4 pb-8"
                v-for="advantage, index in advantages" :key="index">
                <div class="w-full mb-6">
                    <UIcon :name="advantage.icon" class="size-36 text-thirdary" />
                </div>
                <h2 class="text-3xl font-semibold text-nowrap mb-6">{{ advantage.title }}</h2>
                <h3 class="text-lg text-gray-500 text-pretty mb-10 smm:mb-auto">{{ advantage.description }}</h3>
                <NuxtLink to="/pets/1"
                    class="inline-block py-3 px-5 text-2xl text-nowrap text-white bg-[#74a5ff] hover:bg-[#6590e0] rounded-2xl drop-shadow-xl font-extrabold transiton duration-300 hover:text-gray-200">
                    {{ advantage.button }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
