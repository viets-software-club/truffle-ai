<!-- <script lang="ts">
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import type { ChartConfiguration, ChartData, Point } from "chart.js";
import { Line } from "svelte-chartjs";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	CategoryScale,
);

type Data = {
	label: string;
	data: Point[];
}[];

export let chartData: ChartData<
	"line",
	(number | Point)[],
	unknown
>["datasets"];

const lineData: ChartData<"line", (number | Point)[], unknown> = {
	datasets: chartData,
};
</script>

<Line data={lineData} width={100} height={50} options={{ maintainAspectRatio: false }} /> -->
