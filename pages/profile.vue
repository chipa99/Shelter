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


const NavClick = (index) => {
    navs.value.forEach((value, indexFunc) => indexFunc == index ? value.isActive = true : value.isActive = false)
}
</script>

<template>
    <div class="bg-secondary w-[100vw] h-fit">
        <div class="container xl:px-12 2xl:px-32 mx-auto flex flex-row gap-4 xl:gap-8 py-6 h-fit">
           <verticalNav :navs="navs" @nav-click="NavClick" />
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