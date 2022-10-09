<template>
	<div class="... pt-12">
		<div class="... flex justify-center">
			<div class="flex flex-wrap">
				<div class="... px-8">
					<div class="stats bg-base-200 shadow">
						<div class="stat">
							<div class="stat-title">Cases</div>
							<div class="stat-value">
								<p key="normal.cases" for="data of cases">{{ cases.cases }}</p>
							</div>
							<!--
								<div class="stat-desc">
									<p v-for="delta of cases" :key="delta.cases">{{ delta.cases }}</p>
								</div>
								-->
						</div>
					</div>
				</div>
				<div class="... px-8">
					<div class="stats bg-base-200 shadow">
						<div class="stat">
							<div class="stat-title">Deaths</div>
							<div class="stat-value">
								<p key="normal.cases" for="data of cases">{{ cases.deaths }}</p>
							</div>
							<!--
								<div class="stat-desc">
									<p v-for="delta of deaths" :key="delta.deaths">{{ delta.deaths }}</p>
								</div>
								-->
						</div>
					</div>
				</div>
				<div class="... px-8">
					<div class="stats bg-base-200 shadow">
						<div class="stat">
							<div class="stat-title">Recovered</div>
							<div class="stat-value">
								<p key="normal.cases" for="data of cases">{{ cases.recovered }}</p>
							</div>
							<!--
								<div class="stat-desc">
									<p v-for="delta of recovered" :key="delta.recovered">{{ delta.recovered }}</p>
								</div>
								-->
						</div>
					</div>
				</div>
				<div class="... px-8">
					<div class="stats bg-base-200 shadow">
						<div class="stat">
							<div class="stat-title">Incidence 7 Days</div>
							<div class="stat-value">
								<p key="data.weekIncidence" for="data of weekIncidence">
									{{ weekIncidence.weekIncidence }}
								</p>
							</div>
						</div>
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
			cases: [],
			deaths: [],
			recovered: [],
			weekIncidence: [],
			lastUpdate: []
		};
	},
	async created() {
		try {
			const res = await axios.get(`https://api.corona-zahlen.org/germany`);

			this.cases = res.data;
			this.deaths = res.data;
			this.recovered = res.data;
			this.weekIncidence = res.data;
			this.lastUpdate = res.data;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	}
};
</script>

<!--

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
		
-->
