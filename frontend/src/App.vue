
<template>
	<div class="flex">
		<Sidebar />
		<div class="flex-1">
			<!-- <div>Hello world</div>
			<button class="bg-primary">Toggle Modes</button> -->
		</div>
	</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
	name: 'App',
	components: {
		Sidebar,
	},
	setup() {
		return {
			
		}
	}
}
</script>

<style scoped>

</style>

