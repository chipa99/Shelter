<template>
    <section class="bg-main dark:bg-darkMain w-full pt-24">
        <blockquote class="text-black dark:text-light text-4xl font-bold text-center text-pretty  mb-16">
            “Волонтерство –
            это не только
            давать, но и получать.”
        </blockquote>
        <div
            class=" flex flex-row justify-end 2xl:pl-8 xl:bg-[url('/staff.png')] max-2xl:bg-[-30%] bg-contain bg-no-repeat">
            <aside class="w-full xl:w-1/2  flex flex-col justify-center items-center pb-20 ">
                <h1 class="text-3xl text-thirdary xl:text-black dark:text-darkLight text-center font-bold mb-2">
                    А если
                    сам хочу стать
                    волонтером?
                </h1>
                <h2 class="text-xl text-gray-500 dark:text-gray-400 text-center font-semibold mb-6">Оставь нам свою
                    анкету!
                </h2>
                <form
                    class="flex flex-col w-[400px] h-[500px] justify-self-center rounded-xl bg-[#f3e1d5] dark:bg-[#354768] py-6 px-4">
                    <h3 class="text-bold text-black text-center text-3xl mb-10 dark:text-darkLight ">
                        Немного о себе:
                    </h3>
                    <textarea
                        class="outline-none resize-none rounded-lg placeholder-gray-500 p-6 mb-8 w-full h-full text-lg dark:bg-darkMain "
                        placeholder="Напишите как вас зовут, откуда вы, можете приложить нужные ссылки и обязательно оставьте то, как с вами можно связаться! Спасибо :)"></textarea>
                    <appButton label="На встречу добру!" />
                </form>
            </aside>
        </div>
    </section>
</template>
