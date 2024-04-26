<!-- <script lang="ts">
	import { browser } from '$app/environment';
	import Chart from 'chart.js';

	type DataPoint = {
		y: number;
		x: number;
	};
	type Data = {
		title: string;
		data: DataPoint[];
	}[];
	type Props = {
		data: Data[];
	};
	let { data }: Props = $props();

	const config = {
		type: 'line',
		data: data,
		options: {
			scales: {
				x: {
					type: 'time',
					time: {
						tooltipFormat: 'DD T'
					},
					title: {
						display: true,
						text: 'Date'
					}
				},
				y: {
					title: {
						display: true,
						text: 'value'
					}
				}
			}
		}
	};
	const c = document.getElementById('chart') as ChartItem;
	if (browser && c instanceof HTMLElement) new Chart(c, config);

  onMount(async (promise) => {
		  ctx = chartCanvas.getContext('2d');
			var chart = new Chart(ctx, {
				type: 'line',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Revenue',
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: chartValues
						}]
				}
		});

</script>

<canvas id="chart"></canvas> -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Chart, {
		CategoryScale,
		LinearScale,
		TimeScale,
		PointElement,
		LineController,
		LineElement,
		Title,
		Tooltip,
		Filler
	} from 'chart.js/auto';
	import 'chartjs-adapter-luxon';
	import type { ChartConfiguration, ChartData, Point } from 'chart.js';

	type Props = {
		chartData: ChartData<'line', (number | Point)[], unknown>;
		showLegend: boolean;
	};

	let { chartData, showLegend = false }: Props = $props();

	let ctx;
	let canvas: any;
	Chart.register(
		LineController,
		CategoryScale,
		LinearScale,
		TimeScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Filler
	);

	const config: ChartConfiguration<'line', (number | Point)[], unknown> = {
		type: 'line',
		data: chartData,

		options: {
			plugins: {
				legend: {
					display: false
				}
			},
			maintainAspectRatio: true,
			responsive: true,
			scales: {
				x: {
					type: 'time',
					time: {
						tooltipFormat: 'DD T'
					},
					title: {
						display: false,
						text: 'Date'
					}
				},
				y: {
					title: {
						display: false,
						text: 'value'
					}
				}
			}
		}
	};

	onMount(() => {
		ctx = canvas.getContext('2d');
		const chart = new Chart(ctx, config);
	});
</script>

<canvas bind:this={canvas} class="w-full h-full" />
