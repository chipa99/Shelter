import { useStore } from "~/stores/auth";
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
export const useFormData = () => {
    const isDisabled = ref(true);
    const isOpened = ref(false);
    const isSigned = ref(false);
    const isModaled = ref(false);
    const isEditing = ref(false);
    const formFields = ref([{
        name: 'firstname',
        placeholder: 'Имя',
        id: 'firstname',
    }, {
        name: 'surname',
        placeholder: 'Фамилия',
        model: ref('')
    }, {
        name: 'mail',
        placeholder: 'Почта',
        neccesary: true,
        type: 'email'
    }, {
        name: 'password',
        placeholder: 'Пароль',
        type: 'password',
    }, {
        name: 'description',
        label: 'Информация о себе',
        placeholder: 'Здесь вы можете написать небольшое количество информации о себе',
    }, {
        name: 'image',
        label: 'Изоображение',
        placeholder: 'Ссылка'
    }]);

    const schema = object({
        mail: string().required('Данное поле обязательное').email('Это не почта'),
        firstname: string().required('Данное поле обязательное'),
        password: string(),
        surname: string(),
        description: string(),
        image: string()
    });
    const { handleSubmit, setFieldValue, values } = useForm({ validationSchema: schema });
    const amendInfo = handleSubmit(async (values) => {
        const user = await $fetch('/api/profile', {
            method: 'patch',
            body: values
        });
        console.log(user)
        useStore().logIn(user);
        isEditing.value = false;
        isDisabled.value = true;
    });
    const deleteAccount = async () => { await $fetch('/api/profile', { method: 'delete', body: { _id: useStore().user._id.$oid } }); useStore().logOut(); await navigateTo('/pets/1') };
    return { formFields, deleteAccount, amendInfo, isEditing, isDisabled, isOpened, isSigned, isModaled, setFieldValue, handleSubmit, values };
};