<script setup>
import { useField } from 'vee-validate';
const { item, isLeft } = defineProps(['item', 'isLeft']);
const { value, errorMessage, meta } = useField(() => item.name);
</script>

<template>
    <div :class="{ 'hidden': isLeft == false && item.name == 'firstname' }">
        <div :class="{ '!ring-red-400 ring-2': !meta.valid && meta.touched && !meta.pending }"
            class="relative basis-full mb-0.5 md:basis-1/2 rounded-lg p-2 pl-3 hover:ring-2 ring-1  ring-gray-300 focus-within:ring-[#4b5fa0] hover:ring-[#4b5fa0] dark:bg-[#232d46] focus-within:ring-2 focus-within:shadow-xl  dark:focus-within:bg-darkMain dark:hover:ring-light dark:focus-within:ring-light  dark:ring-gray-400  transition duration-300 group hover:shadow-xl shadow-[#4b5fa0]  bg-white   flex items-center flex-row gap-2">
            <UIcon :name="item.icon"
                class="text-gray-500 pointer-events-none absolute group-focus-within:text-black dark:group-focus-within:text-darkLight"
                size="24px">
            </UIcon>
            <input v-model="value" :placeholder="item.placeholder"
                class=" rounded-lg pl-8 w-full bg-white  placeholder-gray-500  dark:bg-[#232d46] dark:placeholder-gray-400 dark:text-gray-400  dark:focus:bg-darkMain dark:focus:text-darkLight dark:focus:placeholder-darkLight outline-0 text-2xl  transition duration-300 focus:text-black focus:placeholder-black" />
        </div>
        <span v-if="meta.touched && !meta.valid && !meta.pending" class="ml-2 text-base font-extrabold  text-red-400">
            {{ errorMessage }}
        </span>
    </div>
</template>