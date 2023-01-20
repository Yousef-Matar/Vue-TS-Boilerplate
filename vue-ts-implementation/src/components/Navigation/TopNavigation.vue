<template>
	<nav class="navbar">
		<ul class="navbar-nav">
			<RouterLink
				:to="{ name: 'HomeView' }"
				class="nav-item">
				Home
			</RouterLink>
			<RouterLink
				:to="{ name: 'AboutView' }"
				class="nav-item">
				About
			</RouterLink>
			<div class="navbar-right">
				<RouterLink
					:to="{ name: 'LoginView' }"
					class="nav-item position-right">
					Login
				</RouterLink>
				<a
					v-if="theme == 'light'"
					class="color-preview"
					href="javascript:void(0);"
					@click="changeTheme('dark')">
					Dark
				</a>
				<a
					v-if="theme == 'dark'"
					class="color-preview"
					href="javascript:void(0);"
					@click="changeTheme('light')">
					Light
				</a>
			</div>
		</ul>
	</nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "TopNavigation",
	props: {
		theme: String
	},
	methods: {
		changeTheme(theme: string) {
			localStorage.setItem("theme", theme);
			this.$emit("changeTheme", theme);
		}
	}
});
</script>
<style scoped lang="scss">
.navbar {
	top: 0;
	height: 70px;
	position: fixed;
	z-index: 5;
	width: 100%;
	ul {
		&.navbar-nav {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			height: 100%;
			gap: 0.5rem;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			.navbar-right {
				display: flex;
				align-items: center;
				height: 100%;
				gap: 0.5rem;
				width: 100%;
				justify-content: flex-end;
			}
			a {
				display: flex;
				align-items: center;
				width: fit-content;
				padding-left: 1rem;
				padding-right: 1rem;
				height: 100%;
				size: 0.7rem;
				font-weight: bold;
			}
			.color-preview {
				gap: 0.25rem;
				width: fit-content;
				&::before {
					content: " ";
					border-width: 2px;
					border-style: solid;
					border-radius: 50%;
					width: 2rem;
					height: 2rem;
					display: inline-block;
					vertical-align: middle;
				}
			}
		}
	}
}
</style>
