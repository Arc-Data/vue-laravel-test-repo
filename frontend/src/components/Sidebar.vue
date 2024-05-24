<template>
    <div class="hidden md:flex flex-col font-body h-screen border-r border-slate-800 max-w-[280px] w-full px-8 py-10">
        <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold font-heading text-primary-default">Categories</h3>
            <div 
                @click="handleAddCategory"
                class="grid items-center justify-center w-10 p-2 rounded-full cursor-pointer bg-primary-200 text-primary-default">
                <font-awesome-icon icon="plus" class=""></font-awesome-icon>
            </div>
        </div>
        <div class="flex flex-col gap-2 px-2 mt-8 overflow-y-auto text-sm max-h-[500px]">
            <div
                v-for="category in categories"
                :key="category.id"
                @mouseover="hoverIndex = category.id"
                @mouseleave="hoverIndex = null"
                @click="handleClick(category.id)"
                class="flex items-center justify-between px-2 py-2 rounded hover:border-primary hover:cursor-pointer hover:bg-primary-default hover:text-background-default"
            >
                <p>{{ category.categoryName }}</p>
                <font-awesome-icon icon="trash" v-if="hoverIndex == category.id && category.categoryName !== 'Home' " @click.stop="handleDeleteCategory(category.id)"></font-awesome-icon>
            </div>
        </div>
        <fwb-toggle v-model="isDark" label="Toggle Dark Mode" class="mt-auto"/>
    </div>
</template>

<script>
import { FwbToggle } from 'flowbite-vue';
import { useDark, useToggle } from '@vueuse/core';
import { v4 as uuidv4} from 'uuid'
import { ref } from 'vue';

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
        const hoverIndex = ref(null)
        const isDark = useDark()
        const toggleDark = useToggle(useDark)

        const handleClick = (id) => {
            emit('categorySelected', id)
        }

        const handleDeleteCategory = (id) => {
            emit('deleteCategory', id)
        }

        const handleAddCategory = () => {
            emit('addCategory', {
                id: uuidv4(),
                categoryName: 'New Category',
                data: [],
            })
        }

        return {
            isDark,
            toggleDark,
            handleClick,
            handleAddCategory,
            handleDeleteCategory,
            hoverIndex,
        }
    }
}
</script>
