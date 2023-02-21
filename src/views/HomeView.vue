<template>
	<HomeLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HomeLayout from "@/components/Home/HomeLayout.vue";
export default defineComponent({
	name: "App",
	components: { HomeLayout }
});
</script>
