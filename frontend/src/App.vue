
<template>
	<div class="flex min-h-screen">
		<Sidebar :categories="categories" @categorySelected="updateCategoryName"/>
		<div class="flex-1 px-4 py-20 md:px-20 ">
			<div class="flex justify-between">
				<h1 class="text-4xl font-bold font-heading">{{ selectedCategoryName }}</h1>
				<button class="bg-primary rounded-md py-2.5 px-4" @click="addTask">Add Task</button>
			</div>
			<div class="flex flex-col gap-2 mt-8 text-text-default">
				<div
					v-for="task in selectedCategoryTasks"
					:key="task.content"
					class="bg-primary-200 flex gap-4 items-center rounded-md shadow px-5 py-2.5" >
					<input type="checkbox" :checked="task.done">
					<p>
						{{ task.content }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';

export default {
	name: 'App',
	components: {
		Sidebar,
	},
	setup() {
		const selectedCategoryName = ref('Home')
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
		}

		return {
			categories,
			selectedCategoryName,
			updateCategoryName,
			selectedCategoryName,
			selectedCategoryTasks,
			addTask,
		}
	},
}
</script>	