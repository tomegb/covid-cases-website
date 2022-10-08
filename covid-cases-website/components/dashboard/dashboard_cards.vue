<template>
	<div class="min-h-screen">
		<div class="... pb-8">
			<select class="select select-bordered w-full max-w-xs">
				<option disabled selected>States</option>
				<option>Baden Württemberg</option>
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
						<p v-for="normal of cases" :key="normal.cases">{{ cases.cases }}</p>
					</div>
					<div class="stat-desc">
						<p v-for="delta of cases" :key="delta.cases">{{ delta.cases }}</p>
					</div>
				</div>
			</div>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Deaths</div>
					<div class="stat-value">
						<p v-for="normal of deaths" :key="normal.deaths">{{ deaths.deaths }}</p>
					</div>
					<div class="stat-desc">
						<p v-for="delta of deaths" :key="delta.deaths">{{ delta.deaths }}</p>
					</div>
				</div>
			</div>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Recovered</div>
					<div class="stat-value">
						<p v-for="normal of recovered" :key="normal.recovered">{{ recovered.recovered }}</p>
					</div>
					<div class="stat-desc">
						<p v-for="delta of recovered" :key="delta.recovered">{{ delta.recovered }}</p>
					</div>
				</div>
			</div>
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-title">Week Incidence</div>
					<div class="stat-value">
						<p v-for="data of weekIncidence" :key="data.weekIncidence">
							{{ weekincidence.weekincidence }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'DashboardCards',
	data() {
		return {
			cases: []
		};
	},
	async created() {
		try {
			const res = await axios.get(`https://api.corona-zahlen.org/germany`);

			this.cases = res.data;
			this.deaths = res.data;
			this.recovered = res.data;
			this.lastUpdate = res.data;
			this.weekincidence = res.data;

			const res2 = await axios.get(`https://api.corona-zahlen.org/vaccinations`);

			this.vaccinated = res2.data;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	}
};
</script>
