<template>
	<LoginForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LoginForm from "@/components/Login/LoginForm.vue";
export default defineComponent({
	name: "App",
	components: { LoginForm }
});
</script>
