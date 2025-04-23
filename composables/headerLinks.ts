export const useHeaderLinks = () => {
    return ref([{
        label: 'Наши лапули',
        to: '/pets/1'
    }, {
        label: 'О приюте',
        to: '/'
    }, {
        label: 'Уход',
        to: '/'
    }]);
}