<script setup>
definePageMeta({
    layout: 'login'
})
const isLeft = ref(true);
const isHovered = ref(false);

const formFields = ref([{
    placeholder: 'Name',
    icon: 'basil:user-outline',
    model: ref('')
}, {
    placeholder: 'Email',
    icon: 'line-md:email',
    model: ref('')
}, {
    placeholder: 'Password',
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
        placeholder: 'Name',
        icon: 'basil:user-outline',
        model: ref('')
    });
}

const sendForm = () => {
    // TODO: MAKE THE SEND ALGORITM USEFETCH...
}

</script>

<template>
    <div
        class="bg-main rounded-md   h-[500px] w-[939px] flex absolute top-0 left-0 bottom-0 right-0 m-auto sm:max-lg:container max-sm:size-full">
        <aside
            class="max-lg:hidden basis-5/12 flex flex-col items-center shadow-xl z-10 shadow-thirdary py-6  transition-all duration-500  bg-cover bg-center bg-thirdary rounded-l-md rounded-r-xl h-full w-full"
            :class="{ 'lg:translate-x-[550px] ': !isLeft, 'lg:basis-5/12': !isHovered, 'lg:basis-6/12': isHovered && isLeft }">
            <header class="flex items-center">
                <h1 class="text-white text-2xl">Лапа Помощи</h1>
            </header>

        </aside>

        <form @submit.prevent="sendForm"
            class=" lg:basis-7/12 basis-full pt-6 transition-all px-6 duration-500 max-sm:justify-center flex flex-col z-0"
            :class="{ 'lg:-translate-x-[393px]': !isLeft, 'lg:basis-7/12': !isHovered, 'lg:basis-6/12': isHovered && isLeft }">

            <header class="flex flex-col items-center  mb-6 gap-6">
                <h1 class="text-[#4b5fa0] text-3xl text-center ">
                    <span v-if="isLeft">Регистрация</span>
                    <span v-else>Войти в систему</span>
                </h1>
                <div class="flex  gap-2">
                    <button type="button"
                        class="p-1 border-gray-300 border-2 flex items-center rounded-full transition duration-300 hover:shadow-md shadow-gray-300 bg-transparent hover:bg-[#d6c7be] hover:text-white"
                        v-for="button, index in regWays" :key="index">
                        <UIcon :name="button" size="32" />
                    </button>
                </div>
                <button class="text-gray-400 bg-transparent hover:text-gray-600 transition duration-300" @click="swap">
                    <span v-if="isLeft"> Или войдите с
                        помощью
                        своих данных
                    </span>
                    <span v-else>Или
                        создайте новый аккаунт</span>
                </button>
            </header>
            <div class="flex flex-col items-center gap-y-4 mb-6">
                <div class="relative basis-full md:basis-1/2 rounded-lg p-2 pl-3 hover:ring-2 ring-[#4b5fa0] transition duration-300 hover:shadow-xl shadow-[#4b5fa0]  bg-white   flex items-center flex-row gap-2"
                    v-for="field, index in formFields" :key="index">
                    <UIcon :name="field.icon" class="text-gray-500 pointer-events-none absolute peer-focus:text-black"
                        size="24px">
                    </UIcon>
                    <input :type="field.type"
                        class=" rounded-lg pl-8 w-full bg-white placeholder-gray-500  outline-0 text-2xl  peer focus:placeholder-black"
                        :placeholder="field.placeholder" v-model="field.model.value" />
                </div>
            </div>
            <footer class="flex justify-center">
                <button
                    class="rounded-full bg-[#4b5fa0] text-white hover:ring-2 ring-white hover:text-gray-200 transition duration-300 outline-white py-3.5 px-4 text-lg"
                    type="submit">
                    <span v-if="isLeft">Создать аккаунт</span>
                    <span v-else>Войти в систему</span>
                </button>
            </footer>
        </form>
        <div class="absolute z-10  top-48 left-[370px] transition duration-500 max-lg:hidden"
            @mouseenter="isHovered = true" @mouseleave="isHovered = false"
            :class="{ 'translate-x-[155px]': !isLeft, 'translate-x-[40px]': isHovered && isLeft }">
            <button class="bg-[#4b5fa0] rounded-full flex items-center p-2.5 outline-0 group text-white" type="button"
                @click="swap">
                <UIcon name="iconamoon:arrow-right-2" class="transition duration-500 "
                    :class="{ 'rotate-180': !isLeft }" size="28"></UIcon>
            </button>
        </div>
    </div>
</template>



<style scoped>
div aside {
    background-image: url('../public/dog2.png');
}
</style>