<script setup>
const skip = (Number(useRoute().params.page) - 1) * 9
const getPets = async () => {
    const { data } = await useFetch('/api', {
        query: {
            skip,
            query: {}
        }
    });
    return data.value
}
const all = await getPets();
</script>

<template>
    <div class="container mx-auto xl:px-16 2xl:px-28">
        <searchForm />
        <PetCards :pets="all.pets" place="main" />
        <footer class="mt-4 flex justify-center">
            <AppPagination :totalItems="all.total" />
        </footer>
    </div>
</template>
