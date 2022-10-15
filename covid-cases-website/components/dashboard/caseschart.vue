<script>
import { Line } from 'vue-chartjs';

export default {
	extends: Line,
	props: {
		// eslint-disable-next-line vue/require-default-prop
		label: {
			type: String
		},
		// eslint-disable-next-line vue/require-default-prop
		chartData: {
			type: ArrayBuffer
		},
		// eslint-disable-next-line vue/require-default-prop
		options: {
			type: Object
		}
	},
	mounted() {
		const dates = this.chartData.map((d) => d.date).reverse();
		const totals = this.chartData.map((d) => d.total).reverse();

		this.renderChart(
			{
				labels: dates,
				datasets: [
					{
						label: this.label,
						data: totals
					}
				]
			},
			this.options
		);
	}
};
</script>
