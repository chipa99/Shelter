import { useStore } from '~/stores/auth';

export const useProfilePage = async () => {
    const { $oid } = useStore().user._id;
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
    const NavClick = (index) => {
        navs.value.forEach((value, indexFunc) => indexFunc == index ? value.isActive = true : value.isActive = false)
    };
    const info = ref({});
    const getInfo = async () => {
        const { data } = await useFetch('/api/profile', {
            method: 'post',
            body: { _id: $oid }
        });
        info.value = data.value;
    };
    await getInfo();
    const getPets = async () => {
        const { pets } = (await useFetch('/api', { query: { skip: 0, query: {} } })).data.value;
        return pets
    };
    const pets = await getPets();
    return { navs, NavClick, info, pets };
};