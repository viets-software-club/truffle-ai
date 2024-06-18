<script lang="ts">
import Chart, {
	CategoryScale,
	LinearScale,
	TimeScale,
	PointElement,
	LineController,
	LineElement,
	Title,
	Tooltip,
	Filler,
} from "chart.js/auto";
import { onMount } from "svelte";
import "chartjs-adapter-luxon";
import type { ChartConfiguration, ChartData, Point } from "chart.js";

type Props = {
	chartData: ChartData<"line", (number | Point)[], unknown>;
	showLegend: boolean;
};

const { chartData, showLegend = false }: Props = $props();
let chart: any = null;
let ctx: any;
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
	Filler,
);

$effect(() => {});
if (chartData) {
	if (chart) {
		chart.data = chartData;
		chart.update();
	}
}

onMount(() => {
	ctx = canvas.getContext("2d");
	const config: ChartConfiguration<"line", (number | Point)[], unknown> = {
		type: "line",
		data: chartData,
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			maintainAspectRatio: true,
			responsive: true,
			scales: {
				x: {
					type: "time",
					time: {
						tooltipFormat: "DD T",
					},
					title: {
						display: false,
						text: "Date",
					},
				},
				y: {
					title: {
						display: false,
						text: "value",
					},
				},
			},
		},
	};
	chart = new Chart(ctx, config);
});
</script>

<canvas bind:this={canvas} class="w-full h-full"></canvas>
