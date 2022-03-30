<script setup lang="ts">
import { TestApi } from '~/api/test';
import { useMainStore } from '~/stores/useMainStore';
const { t, locale } = useI18n()
const { isDark, toggleDark } = useDarks()
const { increment } = useMainStore()
const { counter } = storeToRefs(useMainStore());

const toggleLocale = () => {
	locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
}

const language = computed(() =>
	locale.value === 'zh-CN' ? '中文' : 'English'
)

const theme = computed(() =>
	isDark.value ? 'dark' : 'light'
)
const { data } = TestApi.getLink();
</script>

<template>
	<div v-for="i in data">
		<span>{{ i.name }}</span>
		<span>{{ i.url }}</span>
	</div>
	<div>{{ counter }}</div>
	<el-button type="success" @click="increment">counter++</el-button>

	<div class="cursor-pointer m-6" @click="toggleDark()">theme: {{ theme }}</div>
	<div class="cursor-pointer mt-6 ml-6" @click="toggleLocale()">
		<div>language: {{ language }}</div>
		<div>base: {{ t('about') }}</div>
		<div>
			nesting: {{ t('nesting.sir') }}
			{{ t('nesting.lady') }}
		</div>
	</div>
</template>
