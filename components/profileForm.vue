<script setup>
const { isActive, fields } = defineProps(['isActive', 'fields']);
const isDisabled = ref(true);
const isOpened = ref(false);
const isSigned = ref(false);
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
(formFields.value).forEach(field => {
  if (fields[field.id]) {
    field.model = fields[field.id];
  }
});
const amendInfo = async () => {
  const sendData = {};
  (formFields.value).forEach(({ model, id }) => sendData[id] = model);
  await useFetch('/api/profile', {
    method: 'patch',
    body: sendData
  });
}
const handleClick = (field) => {
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
</script>

<template>
  <section class="rounded-xl bg-main p-8 w-full lg:w-full" v-if="isActive">
    <div class="flex flex-col sm:flex-row h-fit items-center mb-8">
      <div class="relative rounded-[90%] sm:basis-1/2 lg:basis-1/4 max-sm:mb-8">
        <img src="~/public/avatar.jpg" alt="avatar" class="object-cover rounded-[90%] object-[10%] size-40 " />
        <button
          class="rounded-[100%] bg-thirdary py-1 px-1.5 absolute bottom-[6%] outline-0 max-sm:right-0 max-md:right-12 md:max-lg:left-[36%] lg:right-[7%] xl:right-[17%] 2xl:right-[19%]"
          @click="isOpened = !isOpened">
          <UIcon name="ic:round-photo-camera" size="24" class="text-white align-middle" />
        </button>
        <div
          :class="{ 'w-72 h-[400px] shadow-xl p-4 -bottom-[190%] -right-[150%]': isOpened, 'size-0 *:hidden bottom-0 right-0': !isOpened }"
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
      <div class="sm:basis-1/2 lg:basis-3/4 h-full flex max-lg:flex-col justify-end lg:justify-center gap-6">
        <button @click="toggleDisabled"
          class=" inline-block  py-3 px-4 text-lg md:max-lg:w-3/4 xl:text-xl text-nowrap text-black hover:text-white shadow-md hover:shadow shadow-[#74a5ff] ring-2 ring-[#74a5ff] hover:bg-[#74a5ff] rounded-3xl drop-shadow-xl font-extrabold transiton duration-300">
          <span v-if="isDisabled">Изменить данные</span><span v-else>Сохранить изменения</span>
        </button>
        <button @click="isModaled = true"
          class=" inline-block text-nowrap py-3 px-4 text-lg md:max-lg:w-3/4 xl:text-xl  text-gray-300 hover:text-white  hover:bg-red-400 rounded-3xl drop-shadow-xl transiton duration-300 ">
          Удалить аккаунт
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
      <div v-for="field, index in formFields"
        class="flex gap-y-1 flex-col lg:last-of-type:col-span-2 last-of-type:row-span-1" :key="index">
        <label :for="field.placeholder" class=" text-xl"
          :class="{ 'after': field.neccesary, 'text-gray-400': isDisabled }">{{
            (field.label || field.placeholder) }}</label>
        <input :id="field.placeholder" :disabled="isDisabled" :type="field.showPassword ? 'text' : field.type"
          @blur="handleClick(field)" @focus="handleClick(field)"
          class=" rounded-lg w-full text-gray-400 focus:text-black shadow-md  placeholder-gray-400  placeholder:text-wrap focus:bg-blue-100 outline-0 h-full  text-xl peer focus:placeholder-black px-2 py-4 pl-4 ring-1  ring-gray-600    focus-within:ring-[#4b5fa0] focus-within:ring-2 focus-within:shadow-xl focus-within:bg-blue-100 transition duration-300  bg-white"
          :class="{ 'hover:ring-[#4b5fa0] hover:ring-2 hover:shadow-xl ': !isDisabled, 'pb-60 hover:bg-white focus:bg-white': index == 4 }"
          :placeholder="field.placeholder" v-model="field.model" />
      </div>
    </div>
  </section>
</template>