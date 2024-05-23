<template>
	<div class="flex min-h-screen">
		<Sidebar 
			:categories="categories" 
			@addCategory="addCategory"
			@categorySelected="selectCategoryName"/>
		<div class="flex-1 px-4 py-20 md:px-20">
			<div class="flex justify-between">
				<h1 v-if="!isEditingCategoryName" class="text-4xl font-bold font-heading" @click="toggleEditingCategoryName">
					{{ selectedCategoryName }}
				</h1>
				<input v-else 
					type="text" 
					v-model="newCategoryName"
					@blur="saveCategoryName" 
					@keyup.enter="saveCategoryName" 
					class="w-full bg-transparent border-b border-primary-default"/>
				<div>
					<button class="bg-primary-500 text-sm rounded-md py-2.5 px-4 min-w-[120px]" @click="addTask">Add Task</button>
				</div>
			</div>
			<div class="flex flex-col gap-2 mt-8 text-text-default">
				<div
					v-for="(task, index) in selectedCategoryTasks"
					:key="index"
					class="bg-primary-100 flex gap-4 items-center rounded-md shadow px-5 py-2.5">
					<input type="checkbox" v-model="task.done">
					<div class="w-full border-b" v-if="editIndex === index">
						<input 
							type="text" 
							v-model="task.content"  
							@keyup.enter="saveTask(index)" 
							class="w-full bg-transparent border-none outline-none appearance-none"
							:autofocus="editIndex === index"
							@blur="editIndex = null"
							ref="editInput">
					</div>
					<template v-else>
						<p @click="editIndex = index">{{ task.content }}</p>
						<div 
							@click="deleteTask(index)"
							class="w-10 p-2 ml-auto text-center rounded-full shadow cursor-pointer group hover:bg-primary-50 bg-primary-300">
							<font-awesome-icon icon="trash" class="group-hover:text-accent-default"></font-awesome-icon>
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, nextTick, reactive, ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
	name: 'App',
	components: {
		Sidebar,
		FontAwesomeIcon,
	},
	setup() {
		const selectedCategoryName = ref('Home');
		const newCategoryName = ref('');
		const isEditingCategoryName = ref(false);
		const editIndex = ref(null);

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
		);

		const selectCategoryName = (categoryName) => {
			selectedCategoryName.value = categoryName;
		};

		const selectedCategoryTasks = computed(() => {
			const category = categories.find(category => category.categoryName == selectedCategoryName.value);
			return category ? category.data : [];
		});

		const addCategory = (category) => {
			categories.push(category)
		}
		
		const addTask = () => {
			const category = categories.find(category => category.categoryName === selectedCategoryName.value);
			category.data.push({
				content: 'New Content',
				done: false,
			});
			nextTick(() => {
				const lastIndex = category.data.length - 1;
				editIndex.value = lastIndex;
				const input = this.$refs.editInput[lastIndex];
				input.focus();
			});
		};

		const saveTask = (index) => {
			if (selectedCategoryTasks.value[index].content.trim() === '') {
				selectedCategoryTasks.value[index].content = 'Untitled Task';
			}
			editIndex.value = null;
		};

		const deleteTask = (index) => {
			const category = categories.find(category => category.categoryName === selectedCategoryName.value);
			if (category) {
				category.data.splice(index, 1);
			}
		};

		const toggleEditingCategoryName = () => {
			isEditingCategoryName.value = !isEditingCategoryName.value;
			if (isEditingCategoryName.value) {
				newCategoryName.value = selectedCategoryName.value;
			}
		};

		const saveCategoryName = () => {
			if (newCategoryName.value.trim() !== '') {
				const category = categories.find(category => category.categoryName === selectedCategoryName.value);
				if (category) {
					category.categoryName = newCategoryName.value;
					selectedCategoryName.value = newCategoryName.value;
				}
			}
			isEditingCategoryName.value = false;
		};

		return {
			categories,
			selectedCategoryName,
			selectCategoryName,
			selectedCategoryTasks,
			addTask,
			editIndex,
			saveTask,
			deleteTask,
			isEditingCategoryName,
			newCategoryName,
			toggleEditingCategoryName,
			saveCategoryName,
			addCategory,
		};
	},
}
</script>
