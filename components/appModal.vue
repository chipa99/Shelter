<script setup>
const { isModaled } = defineProps(['is-modaled'])
let formFields = [{
    model: ref(''),
    placeholder: 'Username',
    icon: 'mdi:user',
    type: "text"
}, {
    model: ref(''),
    placeholder: 'Password',
    icon: 'mdi:password',
    type: "password"
}];

const isReg = ref(false);

function swapper() {
    isReg.value = !isReg.value;
    formFields.forEach(({ model }) => {
        model.value = '';
    });
    if (formFields.length == 2) {
        formFields[0].placeholder = 'Email';
        formFields[0].icon = 'fluent:person-mail-24-filled';
        formFields[0].type = 'email';
        formFields[1].placeholder = 'Fullname'
        formFields[1].icon = 'material-symbols:id-card';
        formFields[1].type = 'text';
        formFields.push({
            model: ref(''),
            placeholder: 'Avatar(link)',
            icon: 'icon-park-solid:avatar',
            type: 'url'
        }, {
            model: ref(''),
            placeholder: 'Password',
            icon: 'mdi:password',
            type: 'password'
        })
    } else {
        formFields = [{
            model: ref(''),
            placeholder: 'Username',
            icon: 'mdi:user',
            type: "text"
        }, {
            model: ref(''),
            placeholder: 'Password',
            icon: 'mdi:password',
            type: "password"
        }];
    }
}
</script>

<template>
    <UModal v-model="isModaled" :ui="{ width: '', base: 'max-sm:w-full  max-sm:h-screen', padding: '', margin: '' }">
        <UCard
            :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800', base: 'max-sm:h-full max-sm:flex max-sm:flex-col max-sm:justify-center' }"
            class="bg-light">
            <template #header>
                <div class="flex flex-row items-center justify-between">
                    <h3 class="*:font-semibold truncate text-2xl text-gray-900 dark:text-white">
                        <span v-if="!isReg">
                            Войти в аккаунт
                        </span>
                        <span v-else>
                            Зарегистрироваться
                        </span>
                    </h3>
                    <button @click="$emit('modal')" class="flex items-center ">
                        <UIcon name="si:close-fill" class="hover:text-gray-500 transition duration-500" size="24px">
                        </UIcon>
                    </button>
                </div>
            </template>
            <form class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3" @submit.prevent="sendForm">
                <div class="relative basis-full md:basis-1/2 rounded-lg p-2 pl-3  bg-secondary  outline-0 flex items-center flex-row gap-2"
                    v-for="field, index in formFields" :key="index">
                    <UIcon :name="field.icon" class="text-gray-500 pointer-events-none absolute peer-focus:text-black"
                        size="24px">
                    </UIcon>
                    <input :type="field.type"
                        class=" rounded-lg pl-8 w-full bg-secondary placeholder-gray-500 outline-0 text-2xl  peer focus:placeholder-black"
                        :placeholder="field.placeholder" v-model="field.model.value" />
                </div>
                <div class="md:col-span-2 flex justify-end text-gray-600"><span @click="swapper"
                        class="hover:cursor-pointer text-lg hover:text-black transition duration-300"><span
                            v-if="isReg">Еще
                            нет
                            аккаунта?</span> <span v-else>Уже есть аккаунт?</span></span>
                </div>
                <div class="md:col-span-2 flex justify-end">
                    <button type="submit"
                        class="py-3 w-full md:w-1/2 px-4 bg-light font-medium transition duration-500  hover:bg-thirdary hover:text-secondary ease-in-out outline-0  rounded-lg text-xl">
                        Отправить
                    </button>
                </div>
            </form>
        </UCard>
    </UModal>
</template>

<style></style>