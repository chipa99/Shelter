<script setup>
onMounted(() => window.scrollTo(0, 100));
import { useStore } from '~/stores/auth';
const { $oid } = useStore().user._id;
definePageMeta({
    middleware: ['is-authed']
});
const info = ref([]);
const getInfo = async () => {
    const { data } = await useFetch('/api/profile', {
        method: 'post',
        body: { _id: $oid }
    });
    info.value = data.value;
}
await getInfo();
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
            <ProfileForm :is-active="navs[0].isActive" :fields="info" />
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