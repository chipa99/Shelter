<script setup>

const { fields } = defineProps(['isActive', 'fields']);
const { formFields, deleteAccount, handleClick, amendInfo, isEditing, isDisabled, isOpened, isSigned, isModaled, setFieldValue, values, handleSubmit } = useFormData();
(formFields.value).forEach(field => {
  if (fields[field.name]) {
    setFieldValue(field.name, fields[field.name]);
  }
});
const disabling = handleSubmit(() => { !isDisabled.value ? isEditing.value = true : false; isDisabled.value = false; });
</script>

<template>
  <section class="rounded-xl bg-main dark:bg-darkSecondary p-8 w-full lg:w-full">
    <UModal v-model="isEditing">
      <div class="p-4">
        <h1 class="text-gray-600 font-extrabold text-4xl mb-8">Изменить данные</h1>
        <h2 class="text-gray-600 text-lg mb-8">Вернуть обратно уже нельзя.</h2>
        <button @click="amendInfo"
          class="w-full rounded-md bg-gray-200 flex justify-center items-center hover:bg-gray-300 transition-all duration-300 text-gray-600 text-lg py-3 mb-2 shadow">Cохранить</button>
        <button
          class="w-full rounded-md bg-blue-400 flex  justify-center items-center hover:bg-blue-500 transition-all duration-300 text-white text-lg py-3 mb-2 shadow"
          @click="isEditing = false">Отменить</button>
      </div>
    </UModal>
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
    <div class="flex flex-col sm:flex-row h-fit items-center mb-8">
      <div class="relative rounded-[90%] sm:basis-1/2 lg:basis-1/4 max-sm:mb-8">
        <img :src="values.image || '/placeholder.jpg'" alt="avatar" class="rounded-[90%]  object-cover size-40 " />
        <button
          class="rounded-[100%] bg-thirdary py-1 px-1.5 absolute bottom-[6%] outline-0 max-sm:right-0 max-md:right-12 md:max-lg:left-[36%] lg:right-[7%] xl:right-[17%] 2xl:right-[19%]"
          @click="isOpened = !isOpened">
          <UIcon name="ic:round-photo-camera" size="24" class="text-white align-middle" />
        </button>
        <div
          :class="{ 'w-72 h-[400px] shadow-xl p-4 -bottom-[190%] -right-[150%]': isOpened, 'size-0 *:hidden bottom-0 right-0': !isOpened }"
          class=" absolute bg-gray-50 z-10  rounded-xl  transition-all duration-100 hover">
          <h1 class="font-extrabold text-center mb-2">Аватар</h1>
          <img :src="values.image || '/placeholder.jpg'" alt="avatar"
            class="rounded-[100%] mb-2 size-48 mx-auto object-cover">
          <LoginsInput :item="formFields[5]" :isDisabled="isDisabled" class="mb-3" />
          <div class="flex row justify-between items-center flex-wrap">
            <span class="text-xs hover:text-blue-400 hover:cursor-pointer peer ">Опубликовывая
              фото, вы
              <br>
              отвечаете за правила
              адекватности..
            </span>
            <UCheckbox class="inline-block" color="blue" v-model="isSigned" />
            <ul class="*:opacity-0 peer-hover:*:opacity-100 *:transition-opacity *:duration-700">
              <li v-for="item, index in profileFormItems()" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sm:basis-1/2 lg:basis-3/4 h-full flex max-lg:flex-col justify-end lg:justify-center gap-6">
        <button @click="disabling"
          class=" inline-block  py-3 px-4 text-lg md:max-lg:w-3/4 xl:text-xl text-nowrap text-black hover:text-white shadow-md hover:shadow shadow-[#74a5ff] ring-2 ring-[#74a5ff] hover:bg-[#74a5ff] dark:text-white rounded-3xl drop-shadow-xl font-extrabold transiton duration-300">
          {{ isDisabled ? 'Изменить данные' : 'Сохранить изменения' }}
        </button>
        <button @click="isModaled = true"
          class=" inline-block text-nowrap py-3 px-4 text-lg md:max-lg:w-3/4 xl:text-xl  text-gray-300 hover:text-white dark:text-gray-500 dark:hover:text-white dark:hover:bg-red-900 hover:bg-red-400 rounded-3xl drop-shadow-xl transiton duration-300 ">
          Удалить аккаунт
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
      <LoginsInput v-for="item, index in formFields" :item="item" :isDisabled="isDisabled" :index="index"
        class="flex gap-y-1 flex-col last-of-type:row-span-1 lg:last-of-type:col-span-2" :key="index" />
    </div>
  </section>
</template>

<style scoped>
.hover:has(span:hover) {
  height: 610px !important;
  bottom: -320%;
  transition-duration: 300ms;
  transition-delay: 200ms;
}
</style>