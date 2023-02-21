<template>
	<main>
		<RouterView />
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	data() {
		return {};
	},

	watch: {
		$route: {
			handler(to) {
				document.title = to.meta.title || "Sample Project";
			},
			immediate: true
		}
	}
});
</script>

<style lang="scss"></style>
