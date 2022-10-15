<template>
	<div class="... pt-24"></div>
	<h2>Cases</h2>
	<line-chart :chart-data="arrCases" :options="chartOptions" label="Cases"></line-chart>
</template>

<script>
import axios from 'axios';

import caseschart from './caseschart.vue';

export default {
	name: 'DashboardCharts',
	componentes: {
		caseschart
	},
	data() {
		return {
			cases: [],
			date: [],
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false
			}
		};
	},
	async created() {
		try {
			const { data } = await axios.get(`https://api.corona-zahlen.org/germany/history`);

			data.forEach((d) => {
				// eslint-disable-next-line no-undef
				const date = moment(d.date, 'YYYYMMDD').format('MM/DD');

				const { cases } = d;

				this.arrCases.push({ date, total: cases });

				// eslint-disable-next-line no-console
				console.log(this.arrCases);
			});
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	}
};
</script>
