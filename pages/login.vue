<script setup>
definePageMeta({
    layout: 'login',
    middleware: ['is-authed']
});
import { useStore } from '~/stores/auth';
const { logIn } = useStore();
const isLeft = ref(true);
const isHovered = ref(false);
const formFields = ref([{
    placeholder: 'Имя',
    name: 'firstname',
    icon: 'basil:user-outline',
    model: ref('')
}, {
    placeholder: 'Почта',
    name: 'mail',
    icon: 'line-md:email',
    model: ref('')
}, {
    placeholder: 'Пароль',
    name: 'password',
    icon: 'mdi:password-outline',
    model: ref('')
}]);
const regWays = ['hugeicons:vk', 'mingcute:google-fill', 'line-md:telegram']


const swap = () => {
    isLeft.value = !isLeft.value;
    if (formFields.value.length == 3) {
        formFields.value.shift();
        return
    };
    formFields.value.unshift({
        placeholder: 'Имя',
        name: 'firstname',
        icon: 'basil:user-outline',
        model: ref('')
    });
}

const sendForm = async () => {
    const sendData = {};
    (formFields.value).forEach(({ model, name }) => sendData[name] = model);
    const apiRoute = isLeft.value ? '/api/login' : '/api/profile';
    try {
        const { data, status } = await useFetch(apiRoute, {
            method: 'POST',
            body: sendData,
        });
        if (status.value === 'success') {
            logIn(data.value);
            await navigateTo('/pets/1');
        } else {
            console.error('Login/Registration failed');
            console.log(data.value);
        }
    } catch (error) {
        console.error('An error occurred during the request', error);
    }
}

</script>

<template>
    <div
        class="bg-main dark:bg-[#344368] rounded-md h-[500px] w-[939px] flex absolute top-0 left-0 bottom-0 right-0 m-auto sm:max-lg:container max-sm:size-full">
        <aside
            class="max-lg:hidden basis-5/12 flex flex-col items-center shadow-xl z-10 shadow-thirdary bg-[url('/dog2.png')]  dark:shadow-thirdary/25 py-6  transition-all duration-500  bg-cover bg-center bg-thirdary rounded-l-md rounded-r-xl h-full w-full"
            :class="{ 'lg:translate-x-[550px]': !isLeft, 'lg:basis-5/12': !isHovered, 'lg:basis-6/12': isHovered && isLeft }">
            <header class="flex items-center">
                <h1 class="text-white text-2xl">Лапа Помощи</h1>
            </header>
        </aside>
        <form @submit.prevent="sendForm"
            class=" lg:basis-7/12 basis-full pt-6 transition-all px-6 duration-500 max-sm:justify-center flex flex-col z-0"
            :class="{ 'lg:-translate-x-[393px]': !isLeft, 'lg:basis-7/12': !isHovered, 'lg:basis-6/12': isHovered && isLeft }">
            <header class="flex flex-col items-center  mb-6 gap-6">
                <h1 class="text-[#4b5fa0] dark:text-light text-3xl text-center ">
                    {{ isLeft ? "Регистрация" : "Войти в систему" }}
                </h1>
                <div class="flex  gap-2">
                    <button type="button"
                        class="p-1.5 ring-gray-300 ring-2 flex items-center rounded-full transition duration-300 hover:shadow-md shadow-gray-300 bg-transparent hover:bg-thirdary hover:ring-0 hover:text-white"
                        v-for="button, index in regWays" :key="index">
                        <UIcon :name="button" size="32" />
                    </button>
                </div>
                <button
                    class="text-gray-400 bg-transparent hover:text-gray-600 dark:hover:text-gray-500 transition duration-300"
                    @click="swap" type="button">
                    {{ isLeft ? "Или войдите с помощью своих данных" : "Или создайте новый аккаунт" }}
                </button>
            </header>
            <div class="flex flex-col items-center gap-y-4 mb-6">
                <div class="relative basis-full md:basis-1/2 rounded-lg p-2 pl-3 hover:ring-2 ring-1 ring-gray-300 hover:ring-[#4b5fa0] dark:bg-[#232d46]  dark:focus-within:bg-darkMain dark:hover:ring-light  dark:ring-gray-400  transition duration-300 group hover:shadow-xl shadow-[#4b5fa0]  bg-white   flex items-center flex-row gap-2"
                    v-for="field, index in formFields" :key="index">
                    <UIcon :name="field.icon"
                        class="text-gray-500 pointer-events-none absolute group-focus-within:text-black dark:group-focus-within:text-darkLight"
                        size="24px">
                    </UIcon>
                    <input
                        class=" rounded-lg pl-8 w-full bg-white  placeholder-gray-500 dark:bg-[#232d46] dark:placeholder-gray-400 dark:text-gray-400  dark:focus:bg-darkMain dark:focus:text-darkLight dark:focus:placeholder-darkLight outline-0 text-2xl  transition duration-300 focus:text-black focus:placeholder-black"
                        :placeholder="field.placeholder" />
                </div>
            </div>
            <footer class="flex justify-center">
                <button
                    class="rounded-full bg-[#4b5fa0] text-white hover:ring-2 ring-white hover:text-gray-200 transition duration-300 outline-white py-3.5 px-4 text-lg"
                    type="submit">
                    {{ isLeft ? "Создать аккаунт" : "Войти в систему" }}
                </button>
            </footer>
        </form>
        <div class="absolute z-10  top-48 left-[370px] transition duration-500 max-lg:hidden"
            @mouseenter="isHovered = true" @mouseleave="isHovered = false"
            :class="{ 'translate-x-[155px]': !isLeft, 'translate-x-[40px]': isHovered && isLeft }">
            <button class="bg-[#4b5fa0] rounded-full flex items-center p-2.5 outline-0 group text-white" type="button"
                @click="swap">
                <UIcon name="iconamoon:arrow-right-2" class="transition duration-500 "
                    :class="{ 'rotate-180': !isLeft }" size="28" />
            </button>
        </div>
    </div>
</template>