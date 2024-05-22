
<template>
	<div class="flex min-h-screen">
		<Sidebar :categories="categories" @categorySelected="updateCategoryName"/>
		<div class="flex-1 px-4 py-20 md:px-20 ">
			<div class="flex justify-between">
				<h1 class="text-4xl font-bold font-heading">{{ selectedCategoryName }}</h1>
				<button class="bg-primary-500 text-sm  rounded-md py-2.5 px-4" @click="addTask">Add Task</button>
			</div>
			<div class="flex flex-col gap-2 mt-8 text-text-default">
				<div
					v-for="(task, index) in selectedCategoryTasks"
					:key="index"
					class="bg-primary-100 flex gap-4 items-center rounded-md shadow px-5 py-2.5" >
					<input type="checkbox" v-model="task.done">
					<div class="w-full border-b" v-if="editIndex === index">
						<input 
							type="text" 
							v-model="task.content"  
							@keyup.enter="saveTask(index)" 
							class="w-full bg-transparent border-none outline-none appearance-none"
							:autofocus="editIndex === index"
							ref="editInput">
					</div>
					<template v-else>
						<p @click="editIndex = index">{{  task.content }}</p>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, nextTick, reactive, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';

export default {
	name: 'App',
	components: {
		Sidebar,
	},
	setup() {
		const selectedCategoryName = ref('Home')
		const editIndex = ref(null)
		const categories = reactive(
			[
				{
					categoryName: "Home",
					data: []
				},
				{ 
					categoryName: "OJT",
					data: [
						{
						content: "Finish Vue Project",
						done: false,
						},
						{
						content: "Admin and User model separation",
						done: true,
						},	
					],
				},
				{ 
				categoryName: "WriteUps",
				data: [
					{
					content: "Settings Layout",
					done: false,
					},
					{
					content: "List of blocked users",
					done: false,
					},	
				],
				}
			]
		)

		const updateCategoryName = (categoryName) => {
			selectedCategoryName.value = categoryName
		}

		const selectedCategoryTasks = computed(() => {
			const category = categories.find(category => category.categoryName == selectedCategoryName.value)
			return category ? category.data : []
		})
		
		const addTask = () => {
			const category = categories.find(category => category.categoryName === selectedCategoryName.value)
			category.data.push({
				content: 'New Content',
				done: false,
			})
			nextTick(() => {
			const lastIndex = category.data.length - 1;
			editIndex.value = lastIndex;
			const input = this.$refs.editInput[lastIndex];
			input.focus();
		});
		}

		const saveTask = (index) => {
			if (selectedCategoryTasks.value[index].content.trim() === '') {
				selectedCategoryTasks.value[index].content = 'Untitled Task';
			}
			editIndex.value = null;
		}

		return {
			categories,
			selectedCategoryName,
			updateCategoryName,
			selectedCategoryName,
			selectedCategoryTasks,
			addTask,
			editIndex,
			saveTask,
		}
	},
}
</script>	