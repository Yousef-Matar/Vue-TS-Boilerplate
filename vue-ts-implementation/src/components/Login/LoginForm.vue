<template>
	<section>use Prime VUe</section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LoginForm",
	methods: {
		validateForm() {
			var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			var incorrectLoginFields = false;
			console.log(emailRegex, incorrectLoginFields);
			this.submitForm();
		},
		submitForm() {
			console.log("submit");
		},
		reRoute(pageName: string) {
			console.log(pageName);
			//this.$router.push({ name: pageName });
		}
	}
});
</script>
<style scoped lang="scss"></style>
