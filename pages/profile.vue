<script setup>
onMounted(() => window.scrollTo(0, 100));
import { useStore } from '~/stores/auth';
const { $oid } = useStore().user._id;
const formFields = [{
    placeholder: 'Имя',
    id: 'firstname',
    model: ref(''),
    neccesary: true
}, {
    id: 'surname',
    placeholder: 'Фамилия',
    model: ref('')
}, {
    id: 'email',
    placeholder: 'Почта',
    model: ref(''),
    neccesary: true
}, {
    id: 'password',
    placeholder: 'Пароль',
    model: ref(''),
    neccesary: true
}, {
    id: 'description',
    label: 'Информация о себе',
    placeholder: 'Здесь вы можете написать небольшое количество информации о себе',
    model: ref('')
}];
// const getInfo = async () => {
//     const { data } = useFetch('/api/profile', {
//         method: 'post',
//         body: { $oid }
//     });
//     formFields.forEach(({ model, id }) => {
//         const upperkeys = (data.value).map(() => Object.keys(data.value));
//         upperkeys.forEach((value, index) => { value == id ? model.value = (data.value)[index] : true });
//     })
//     return data.value
// }
// const info = await getInfo();
const deleteAccount = async () => useFetch('/api/profile', { method: 'delete', body: { $oid } });
const getPets = async () => {
    const { pets } = (await useFetch('/api', { query: { skip: 0, query: {} } })).data.value;
    return pets
}
const pets = await getPets();

const navs = ref([{
    label: 'Профиль',
    icon: 'iconamoon:profile-light',
    isActive: true
}, {
    label: 'Понравившиеся',
    icon: 'hugeicons:folder-favourite',
    isActive: false
}, {
    label: 'Встречи',
    icon: 'healthicons:group-discussion-meeting-outline',
    isActive: false
}]);

const meetings = [];
const isModaled = ref(false);
const isDisabled = ref(true);
const isOpened = ref(false);
const isSigned = ref(false);
const NavClick = (index) => {
    navs.value.forEach((value, indexFunc) => indexFunc == index ? value.isActive = true : value.isActive = false)
}
</script>

<template>
    <div class="bg-secondary w-[100vw] h-fit">
        <UModal v-model="isModaled">
            <div class="p-4">
                <h1 class="text-gray-600 font-extrabold text-4xl mb-8">Удалить аккаунт?</h1>
                <h2 class="text-gray-600 text-lg mb-8">Вернуть обратно уже нельзя.</h2>
                <button @click="deleteAccount"
                    class="w-full rounded-md bg-gray-200 flex justify-center items-center hover:bg-gray-300 transition-all duration-300 text-gray-600 text-lg py-3 mb-2 shadow">Удалить</button>
                <button
                    class="w-full rounded-md bg-red-400 flex  justify-center items-center hover:bg-red-500 transition-all duration-300 text-white text-lg py-3 mb-2 shadow"
                    @click="isModaled = false">Отменить</button>
            </div>
        </UModal>
        <div class="container xl:px-12 2xl:px-32 mx-auto flex flex-row gap-4 xl:gap-8 py-6 h-fit">
            <aside class="rounded-lg bg-thirdary p-2 max-lg:hidden w-[320px] h-fit">
                <nav class="w-full">
                    <button v-for="nav, index in navs" :key="index" @click="NavClick(index)"
                        class="pl-4   text-white text-xl rounded-md hover:cursor-pointer w-full py-3.5 focus-visible:ring-2  ring-[#cedfff] outline-0 flex flex-row items-center gap-4 hover:bg-[#6e90d1] transition delay-75 duration-200">
                        <UIcon :name="nav.icon" size="26" />
                        <span>{{ nav.label }}</span>
                        <UIcon name="hugeicons:tick-01" class="ml-auto mr-4 -mt-1 transition-opacity delay-[25ms]"
                            size="30px" :class="{ 'opacity-0': !nav.isActive }">
                        </UIcon>
                    </button>
                </nav>
            </aside>
            <section class="rounded-xl bg-main p-8 w-full lg:w-full" v-if="navs[0].isActive">
                <div class="flex flex-row h-fit items-center mb-8">
                    <div class="relative rounded-[90%] w-1/4 ">
                        <img src="~/public/avatar.jpg" alt="avatar"
                            class="object-cover rounded-[90%] object-[10%] shadow-xl size-40 " />
                        <button
                            class="rounded-[100%] bg-thirdary py-1 px-1.5 absolute bottom-[6%] outline-0 right-[19%]"
                            @click="isOpened = !isOpened">
                            <UIcon name="ic:round-photo-camera" size="24" class="text-white align-middle" />
                        </button>
                        <div :class="{ 'w-72 h-[400px] shadow-xl p-4 -bottom-[190%] -right-[150%]': isOpened, 'size-0 *:hidden bottom-0 right-0': !isOpened }"
                            class=" absolute bg-gray-50 z-10  rounded-xl  transition-all duration-100 hover">
                            <h1 class="font-extrabold text-center mb-2">Аватар</h1>
                            <img src="../public/placeholder.jpg" alt="avatar" class="rounded-[100%] mb-2">
                            <div class="flex gap-y-1 flex-col mb-3">
                                <label :for="Изоображение" class=" text-xl"
                                    :class="{ 'text-gray-400': (isDisabled && !isSigned), 'text-black': (!isDisabled && isSigned) }">Изоображение</label>
                                <input :disabled="(isDisabled && !isSigned)"
                                    class=" rounded-lg w-full   placeholder-gray-400 focus:bg-blue-100 outline-0 h-full  text-xl peer focus:placeholder-black px-2 py-4 pl-4 ring-1  ring-gray-600    focus-within:ring-[#4b5fa0] focus-within:ring-2 focus-within:shadow-xl focus-within:bg-blue-100 transition duration-300  bg-white"
                                    :class="{ 'hover:ring-[#4b5fa0] hover:ring-2 hover:shadow-xl ': (!isDisabled && isSigned) }"
                                    placeholder="Изоображение" id="Изоображение" />
                            </div>
                            <div class="flex row justify-between items-center flex-wrap">
                                <span class="text-xs hover:text-blue-400 hover:cursor-pointer peer ">Опубликовывая
                                    фото, вы
                                    <br>
                                    отвечаете за правила
                                    адекватности..
                                </span>
                                <UCheckbox class="inline-block" color="blue" v-model="isSigned" />
                                <ul class="*:opacity-0 peer-hover:*:opacity-100 *:transition-opacity *:duration-700">
                                    <li>Вы сами отвечаете за контент вашего аватар</li>
                                    <li>Главный контент должен находиться по середине</li>
                                    <li>Предпочтительный размер изображения не больше 1300 на 900 пикселей</li>
                                    <li>Ссылка к изображению должна быть общедоступной</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="w-3/4 h-full flex justify-end lg:justify-center gap-6">
                        <button @click="isDisabled = !isDisabled"
                            class=" inline-block  py-3 px-4 text-xl text-nowrap text-black hover:text-white shadow-md hover:shadow shadow-[#74a5ff] ring-2 ring-[#74a5ff] hover:bg-[#74a5ff] rounded-3xl drop-shadow-xl font-extrabold transiton duration-300">
                            <span v-if="isDisabled">Изменить данные</span><span v-else>Сохранить изменения</span>
                        </button>
                        <button @click="isModaled = true"
                            class=" inline-block text-nowrap py-3 px-4 text-xl text-gray-300 hover:text-white  hover:bg-red-500 rounded-3xl drop-shadow-xl transiton duration-300 ">
                            Удалить аккаунт
                        </button>

                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-4 gap-y-8">
                    <div v-for="field, index in formFields"
                        class="flex gap-y-1 flex-col last-of-type:col-span-2 last-of-type:row-span-1" :key="index">
                        <label :for="field.placeholder" class=" text-xl"
                            :class="{ 'after': field.neccesary, 'text-gray-400': isDisabled }">{{
                                (field.label || field.placeholder) }}</label>
                        <input :id="field.placeholder" :disabled="isDisabled"
                            class=" rounded-lg w-full shadow-md  placeholder-gray-400  placeholder:text-wrap focus:bg-blue-100 outline-0 h-full  text-xl peer focus:placeholder-black px-2 py-4 pl-4 ring-1  ring-gray-600    focus-within:ring-[#4b5fa0] focus-within:ring-2 focus-within:shadow-xl focus-within:bg-blue-100 transition duration-300  bg-white"
                            :class="{ 'hover:ring-[#4b5fa0] hover:ring-2 hover:shadow-xl ': !isDisabled, 'pb-60 hover:bg-white focus:bg-white': index == 4 }"
                            :placeholder="field.placeholder" v-model="field.model.value" />
                    </div>
                </div>
            </section>
            <section class="rounded-xl bg-main p-4 pr-3 w-full  h-[95vh] overflow-y-scroll "
                :class="{ 'flex items-center justify-center': pets.length == 0 }" v-if="navs[1].isActive">
                <PetCards :pets="pets" place="profile" />
            </section>
            <section class="rounded-xl bg-main p-4 pr-3 w-full  h-[95vh] overflow-y-scroll " v-if="navs[2].isActive">
                <PetCards class="v-else" place="meetings" :pets="pets" />
            </section>
        </div>
    </div>
</template>

<style scoped>
.after::after {
    content: '*';
    color: #f87171;
    margin-left: 1px;
}

.hover:has(span:hover) {
    height: 610px !important;
    bottom: -320%;
    transition-duration: 300ms;
    transition-delay: 200ms;
}

* {
    scrollbar-width: 9px !important;
}

::-webkit-scrollbar {
    width: 9px !important;
    background-color: var(main);
    z-index: -10;
}

::-webkit-scrollbar-thumb {
    background: rgb(227, 227, 227);
    z-index: -10;
    height: 20px;
}
</style>