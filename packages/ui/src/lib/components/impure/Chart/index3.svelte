<!-- <script lang="ts">
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';
	import type { ChartConfiguration, ChartData, Point } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	type Data = {
		label: string;
		data: Point[];
	}[];

	export let chartData: ChartData<'line', (number | Point)[], unknown>['datasets'];

	const lineData: ChartData<'line', (number | Point)[], unknown> = { datasets: chartData };
</script>

<Line data={lineData} width={100} height={50} options={{ maintainAspectRatio: false }} /> -->
