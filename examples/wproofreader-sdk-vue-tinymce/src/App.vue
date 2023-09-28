<script setup>
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';
import Editor from './components/Editor.vue'

WProofreaderSDK.configure({
	autoSearch: true,
	autoDestroy: true,
	enforceAI: true,
	serviceId: 'your-service-id'
});
</script>

<template>
	<main>
		<h1>WProofreader SDK & TinyMCE demo in Vue.js</h1>
		<Editor />
	</main>
</template>
