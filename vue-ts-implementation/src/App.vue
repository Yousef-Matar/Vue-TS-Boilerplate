<template>
	<TopNavigation
		:theme="currentTheme"
		@changeTheme="(newTheme) => (currentTheme = newTheme)" />
	<main>
		<RouterView />
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import TopNavigation from "@/components/Navigation/TopNavigation.vue";
export default defineComponent({
	name: "App",
	components: { TopNavigation },
	data() {
		return {
			currentTheme: ""
		};
	},
	created() {
		this.currentTheme = localStorage.getItem("theme") || "light";
	},
	watch: {
		currentTheme: {
			handler(newTheme: string) {
				const bodyElement = document.body;
				this.currentTheme = newTheme;
				switch (this.currentTheme) {
					case "light":
						bodyElement.classList.replace("dark", this.currentTheme);
						break;
					case "dark":
						bodyElement.classList.replace("light", this.currentTheme);
						break;
				}
			},
			immediate: true
		},
		$route: {
			handler(to) {
				document.title = to.meta.title || "Sample Project";
			},
			immediate: true
		}
	}
});
</script>

<style lang="scss">
.navbar {
	& + * {
		margin-top: 70px;
	}
}
main {
	& > *:first-child {
		padding: 1em;
		margin-bottom: 1em;
		padding-bottom: 6.5em;
		text-align: center;
		&:not(.no-clip) {
			clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
		}
	}
}
</style>
