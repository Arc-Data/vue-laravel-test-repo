<template>
    <div class="hidden md:flex flex-col font-body h-screen border-r border-slate-800 max-w-[280px] w-full px-8 py-10">
        <div class="flex items-center justify-between">
            <h1 class="text-lg font-bold font-heading text-primary">Categories</h1>
        </div>
        <div class="flex flex-col gap-2 px-2 mt-8 overflow-y-auto text-sm max-h-[500px]">
            <div
                v-for="category in categories"
                :key="category.categoryName"
                @click="handleClick(category.categoryName)"
                class="px-2 py-2 rounded hover:border-primary hover:cursor-pointer hover:bg-primary dark:hover:bg-secondary dark:hover:text-white"
            >
                {{ category.categoryName }}
            </div>
        </div>
        <fwb-toggle v-model="isDark" label="Toggle Dark Mode" class="mt-auto"/>
    </div>
</template>

<script>
import { FwbToggle } from 'flowbite-vue';
import { useDark, useToggle } from '@vueuse/core';

export default {
    
    name: 'Sidebar',
    components: {
        FwbToggle,
    },
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    setup(props, { emit }) {
        const isDark = useDark()
        const toggleDark = useToggle(useDark)

        const handleClick = (categoryName) => {
            emit('categorySelected', categoryName)
        }

        return {
            isDark,
            toggleDark,
            handleClick
        }
    }
}
</script>
