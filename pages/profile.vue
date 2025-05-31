<script setup>
onMounted(() => window.scrollTo(0, 100));
definePageMeta({
    middleware: ['is-authed'],
    name: 'Профиль'
});
const { info, getPets, handle, navs } = useProfilePage();

const pets = await getPets();
const meetings = [];
</script>

<template>
    <div class="bg-secondary dark:bg-darkMain w-[100vw] h-fit">
        <div class="container xl:px-12 pt-20 2xl:px-28 mx-auto flex flex-row gap-4 xl:gap-8 py-6 h-fit">
            <verticalNav :navs="navs" @handle="handle" />
            <ProfileForm v-if="navs[0].isActive" :fields="info" />
            <section class="rounded-xl bg-main p-4 pr-3 w-full  h-[95vh] overflow-y-scroll " v-if="navs[1].isActive">
                <PetCards place="profile" :pets="pets" />
            </section>
            <section class="rounded-xl bg-main p-4 pr-3 w-full  h-[95vh] overflow-y-scroll " v-if="navs[2].isActive">
                <PetCards place="meetings" :pets="meetings" />
            </section>
        </div>
    </div>
</template>
