<template>
	<section>
		<img
			src="@/assets/images/Batman.webp"
			class="main-logo"
			draggable="false"
			alt="Main Logo" />
		<h1>Welcome Message</h1>
		<p>Sub Header</p>
	</section>
</template>
<script lang="ts">
export default {
	name: "HomeLayout"
};
</script>
<style scoped lang="scss">
img {
	margin: 0;
	width: 200px;
	height: 200px;
}
/*h1 {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 80%;
	margin: auto;
}
p {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 50%;
	margin: auto;
}*/
</style>
