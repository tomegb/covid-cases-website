<template>
	<div class="min-h-screen">
		<div class="... pb-8">
			<select class="select select-bordered w-full max-w-xs">
				<option disabled selected>States</option>
				<option @click="loadData">Baden Württemberg</option>
				<option>Bayern</option>
				<option>Berlin</option>
				<option>Brandenburg</option>
				<option>Bremen</option>
				<option>Hamburg</option>
				<option>Hessen</option>
				<option>Mecklenburg-Vorpommern</option>
				<option>Niedersachsen</option>
				<option>Nordrhein Westfalen</option>
				<option>Rheinland-Pfalz</option>
				<option>Saarland</option>
				<option>Sachsen</option>
				<option>Sachsen-Anhalt</option>
				<option>Schleswig-Holstein</option>
				<option>Thüringen</option>
			</select>
		</div>
		<div class="flex flex-wrap">
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Cases</div>
					<div class="stat-value">
						<p v-for="item in list" :key="item.id">{{ item.cases }}</p>
					</div>
					<div class="stat-desc"></div>
				</div>
			</div>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Deaths</div>
					<div class="stat-value"></div>
					<div class="stat-desc"></div>
				</div>
			</div>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Recovered</div>
					<div class="stat-value"></div>
					<div class="stat-desc"></div>
				</div>
			</div>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Vaccinated</div>
					<div class="stat-value"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
export default {
	name: 'DashboardCards',
	async mounted() {
		Vue.axios.get('https://api.corona-zahlen.org/germany/').then((resp) => {
			// eslint-disable-next-line no-console
			console.warn(resp.data.data);
		});
	}
};
</script>
