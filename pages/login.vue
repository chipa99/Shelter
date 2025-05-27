<script setup>
definePageMeta({
    layout: 'login',
    middleware: ['is-authed']
});
import { useStore } from '~/stores/auth';
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
const { logIn } = useStore();
const isLeft = ref(true);
const isHovered = ref(false);
const formFields = ref([{
    placeholder: 'Имя',
    name: 'firstname',
    icon: 'basil:user-outline',
}, {
    placeholder: 'Почта',
    name: 'mail',
    icon: 'line-md:email',
    type: 'email'
}, {
    placeholder: 'Пароль',
    name: 'password',
    icon: 'mdi:password-outline',
    type: 'password'
}]);
const regWays = ['hugeicons:vk', 'mingcute:google-fill', 'line-md:telegram'];

const schema = object({
    mail: string().required('Данное поле обязательное').email('Это не почта'),
    password: string().required('Данное поле обязательное').min(6, 'В пароле должно быть минимум 6 символов'),
    firstname: string().required('Данное поле обязательное')
});

const { handleSubmit, setFieldValue, setErrors, resetForm } = useForm({ validationSchema: schema });
const onSubmit = handleSubmit(async (values) => {
    const apiRoute = isLeft.value ? '/api/login' : '/api/profile';
    try {
        const { data, status, error, } = await useFetch(apiRoute, {
            method: 'POST',
            body: values,
        });
        if (status.value == 'success') {
            logIn(data.value);
            await navigateTo('/pets/1');
        } else {
            if (error.value.statusCode === 404 || error.value.statusCode === 401) {
                setErrors({ mail: 'Такого аккаунта не существует', password: 'Такого аккаунта не существует' });
            };
            if (error.value.statusCode === 409) {
                setErrors({ mail: 'Аккаунт с такой почтой уже существует' })
            };
        };
    } catch (err) {
        console.error(err)
    };
});
const swap = () => {
    isLeft.value = !isLeft.value;
    resetForm();
    if (!isLeft.value) {
        setFieldValue('firstname', 'W%HoU@cvk9fixNyF');
    }
};
</script>
<template>
    <div
        class="bg-main dark:bg-[#344368] rounded-md h-[570px] w-[1040px] flex absolute top-0 left-0 bottom-0 right-0 m-auto sm:max-lg:container max-sm:size-full">
        <aside
            class="max-lg:hidden basis-5/12 flex flex-col items-center shadow-xl z-10 shadow-thirdary bg-[url('/dog2.png')]  dark:shadow-thirdary/25 py-6  transition-all duration-500  bg-cover bg-center bg-thirdary rounded-l-md rounded-r-xl h-full w-full"
            :class="{ 'lg:translate-x-[615px]': !isLeft, 'lg:basis-5/12': !isHovered, 'lg:basis-6/12': isHovered && isLeft }">
            <header class="flex items-center">
                <h1 class="text-white text-2xl">Лапа Помощи</h1>
            </header>
        </aside>
        <form @submit.prevent="onSubmit"
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
                <LoginsInput v-for="item in formFields" :key="item.name" :item="item" :isLeft="isLeft" />
            </div>
            <footer class="flex justify-center">
                <button
                    class="rounded-full bg-[#4b5fa0] text-white hover:ring-2 ring-white hover:text-gray-200 transition duration-300 outline-white py-3.5 px-4 text-lg"
                    type="submit">
                    {{ isLeft ? "Создать аккаунт" : "Войти в систему" }}
                </button>
            </footer>
        </form>
        <div class="absolute z-10  top-56 left-[408px] transition duration-500 max-lg:hidden"
            @mouseenter="isHovered = true" @mouseleave="isHovered = false"
            :class="{ 'translate-x-[180px]': !isLeft, 'translate-x-[40px]': isHovered && isLeft }">
            <button class="bg-[#4b5fa0] rounded-full flex items-center p-2.5 outline-0 group text-white" type="button"
                @click="swap">
                <UIcon name="iconamoon:arrow-right-2" class="transition duration-500 "
                    :class="{ 'rotate-180': !isLeft }" size="28" />
            </button>
        </div>
    </div>
</template>