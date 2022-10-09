<!--
<template>
	<div class="... pt-24"></div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
	name: 'DashboardCharts',
	data() {
		return {
			cases: [],
			date: []
		};
	},
	async created() {
		try {
			const { data } = await axios.get(`https://api.corona-zahlen.org/germany/history`);

			data.forEach((d) => {
				const date = moment(d.date, 'YYYYMMDD').format('MM/DD');
			});
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	}
};
</script>
-->
