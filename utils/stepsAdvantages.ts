export default function () {
    return [{
        title: 'Выбор',
        description: 'Выберите животное, которое вам понравилось',
        icon: 'fluent:animal-dog-24-regular',
        button: 'К животным',
        link: '/pets/1'
    },
    {
        title: 'Регистрация',
        description: 'Несколько полей, и подходящая для вас дата, когда вы сможете приехать',
        icon: 'codicon:sign-in',
        button: 'К регистрации',
        link: '/login'
    },
    {
        title: 'Консультация',
        description: 'Мы скажем, подойдет ли вам это животное, если нет - выберем другое',
        icon: 'heroicons:question-mark-circle',
        button: 'К консультации',
        link: '/login'
    }];
}