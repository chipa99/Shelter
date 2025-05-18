<script setup>
const { isActive, fields } = defineProps(['isActive', 'fields']);
const { formFields, deleteAccount, handleClick, amendInfo, isEditing, isDisabled, isOpened, isSigned, isModaled } = useFormData();
(formFields.value).forEach(field => {
  if (fields[field.id]) {
    field.model = fields[field.id];
  }
});
</script>

<template>
  <section class="rounded-xl bg-main dark:bg-darkSecondary p-8 w-full lg:w-full" v-if="isActive">
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
            <label for="Изоображение" class=" text-xl"
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
              <li v-for="item, index in profileFormItems()" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sm:basis-1/2 lg:basis-3/4 h-full flex max-lg:flex-col justify-end lg:justify-center gap-6">
        <button @click="isDisabled = !isDisabled"
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
      <div v-for="field, index in formFields"
        class="flex gap-y-1 flex-col lg:last-of-type:col-span-2 last-of-type:row-span-1" :key="index">
        <label :for="field.placeholder" class=" text-xl"
          :class="{ 'after': field.neccesary, 'text-gray-400': isDisabled, 'text-light': !isDisabled }">{{
            (field.label || field.placeholder) }}</label>
        <input :id="field.placeholder" :disabled="isDisabled" :type="field.showPassword ? 'text' : field.type"
          @blur="handleClick(field)" @focus="handleClick(field)"
          class=" rounded-lg w-full text-gray-400 focus:text-black shadow-md  placeholder-gray-400  placeholder:text-wrap focus:bg-blue-100 outline-0 h-full  text-xl peer px-2 py-4 pl-4 ring-1  ring-gray-600 dark:ring-gray-500 dark:focus:text-darkLight   focus-within:ring-[#4b5fa0] focus-within:ring-2 focus-within:shadow-xl focus-within:bg-blue-100 transition duration-300  bg-white dark:bg-[#232d46] "
          :class="{ 'hover:ring-[#4b5fa0] hover:ring-2 hover:shadow-xl dark:hover:bg-darkMain dark:focus-within:bg-darkMain dark:hover:ring-thirdary': !isDisabled, 'pb-60 hover:bg-white focus-within:bg-white  ': index == 4 }"
          :placeholder="field.placeholder" v-model="field.model" />
      </div>
    </div>
  </section>
</template>