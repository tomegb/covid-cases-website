<script setup lang="ts">
import '@fontsource/inter';
import '@fontsource/poppins';
import '@fontsource/space-mono';
import { useRoute } from 'vue-router';
import { useThemeStore } from './store/theme';

const route = useRoute();
const themeStore = useThemeStore();
</script>

<template>
	<div :data-theme="themeStore.theme.dark ? 'light' : 'dark'">
		<NuxtPage/>
		<NuxtLayout name="custom" />
	</div>
</template>
