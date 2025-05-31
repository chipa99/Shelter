<script setup>
import { useField } from 'vee-validate';
const { item, isLeft, isDisabled, index } = defineProps(['item', 'isLeft', 'isDisabled', 'index']);
const { value, errorMessage, meta } = useField(() => item.name);
const baseClasses = computed(() => {
    return {
        '!ring-red-400 ring-2': !meta.valid && meta.touched && !meta.pending && item.icon,
        'flex gap-y-1 flex-col last-of-type:row-span-1 lg:last-of-type:col-span-2 ': !item.icon,
        'relative basis-full mb-0.5 md:basis-1/2 rounded-lg p-2 pl-3 hover:ring-2 ring-1  ring-gray-300 focus-within:ring-[#4b5fa0] hover:ring-[#4b5fa0] dark:bg-[#232d46] focus-within:ring-2 focus-within:shadow-xl  dark:focus-within:bg-darkMain dark:hover:ring-light dark:focus-within:ring-light  dark:ring-gray-400  transition duration-300 group hover:shadow-xl shadow-[#4b5fa0]  bg-white   flex items-center flex-row gap-2': item.icon
    }
})
const inputClasses = computed(() => {
    return {
        '!ring-red-400 ring-2': !meta.valid && meta.touched && !meta.pending && !item.icon,
        'rounded-lg pl-8 w-full bg-white  placeholder-gray-500  dark:bg-[#232d46] dark:placeholder-gray-400 dark:text-gray-400  dark:focus:bg-darkMain dark:focus:text-darkLight dark:focus:placeholder-darkLight outline-0 text-2xl  transition duration-300 focus:text-black focus:placeholder-black': item.icon,
        'rounded-lg w-full text-gray-400 focus:text-black shadow-md  placeholder-gray-400  placeholder:text-wrap focus:bg-blue-100 outline-0 h-full  text-xl peer px-2 py-4 pl-4 ring-1  ring-gray-600 dark:ring-gray-500 dark:focus:text-darkLight   focus-within:ring-[#4b5fa0] focus-within:ring-2 focus-within:shadow-xl focus-within:bg-blue-100 transition duration-300  bg-white dark:bg-[#232d46]': !item.icon,
        'hover:ring-[#4b5fa0] hover:ring-2 hover:shadow-xl dark:hover:bg-darkMain dark:focus-within:bg-darkMain dark:hover:ring-thirdary': !isDisabled && !item.icon,
        'pb-60 hover:bg-white focus-within:bg-white': index == 4 && !item.icon
    }
})
</script>

<template>
    <div :class="{ 'hidden': isLeft == false && item.name == 'firstname' }" v-if="index !== 5">
        <div :class="baseClasses">
            <UIcon :name="item.icon" v-if="item.icon"
                class="text-gray-500 pointer-events-none absolute group-focus-within:text-black dark:group-focus-within:text-darkLight"
                size="24px">
            </UIcon>
            <label :for="item.name" class=" text-xl" v-else
                :class="{ 'after': item.neccesary, 'text-gray-300': isDisabled, 'text-thirdary': !isDisabled, '!text-red-400': !meta.valid && meta.touched && !meta.pending }">{{
                    (item.label || item.placeholder) }}</label>
            <input v-model="value" :placeholder="item.placeholder" :class="inputClasses" :id="item.name"
                :disabled="isDisabled" :type="item.showPassword ? 'text' : item.type" />
        </div>
        <span v-if="meta.touched && !meta.valid && !meta.pending" class="ml-2 text-base font-extrabold  text-red-400">
            {{ errorMessage }}
        </span>
    </div>
</template>

<style scoped>
.after::after {
    content: '*';
    color: #f87171;
    margin-left: 1px;
}
</style>