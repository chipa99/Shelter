import { useStore } from "~/stores/auth";
export const useFormData = () => {
    const isDisabled = ref(true);
    const isOpened = ref(false);
    const isSigned = ref(false);
    const isModaled = ref(false);
    const formFields = ref([{
        placeholder: 'Имя',
        id: 'firstname',
        model: ref(''),
        neccesary: true
    }, {
        id: 'surname',
        placeholder: 'Фамилия',
        model: ref('')
    }, {
        id: 'mail',
        placeholder: 'Почта',
        model: ref(''),
        neccesary: true,
        type: 'email'
    }, {
        id: 'password',
        placeholder: 'Пароль',
        model: ref(''),
        type: 'password',
        neccesary: true,
        showPassword: false
    }, {
        id: 'description',
        label: 'Информация о себе',
        placeholder: 'Здесь вы можете написать небольшое количество информации о себе',
        model: ref('')
    }]);
    const amendInfo = async () => {
        const sendData = {};
        (formFields.value).forEach(({ model, id }) => sendData[id] = model);
        await $fetch('/api/profile', {
            method: 'patch',
            body: sendData
        });
    }
    const handleClick = (field: any) => {
        if (field.id === 'password') {
            field.showPassword = !field.showPassword; // Toggle showPassword directly
        }
    };
    const toggleDisabled = () => {
        if (isDisabled.value === false) {
            amendInfo();
        }
        isDisabled.value = !isDisabled.value;
    }
    const deleteAccount = async () => { await $fetch('/api/profile', { method: 'delete', body: { _id: useStore().user._id.$oid } }); useStore().logOut(); await navigateTo('/pets/1') };
    return { formFields, handleClick, toggleDisabled, deleteAccount, isDisabled, isOpened, isSigned, isModaled };
};