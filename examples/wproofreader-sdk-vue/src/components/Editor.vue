<script>
export default {
	setup: () => {
		const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
		return { text };
	}
};
</script>

<template>
	<textarea data-wsc-autocreate="true" v-model="text" rows="10"></textarea>
</template>

<style>
textarea {
	width: 600px;
}
</style>
