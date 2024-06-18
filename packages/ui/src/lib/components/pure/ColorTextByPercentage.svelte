<script>
export let value = 0;
export let max = 100;

let color;
const percentage = (value / max) * 100;

if (percentage <= 10) {
	color = "red";
} else if (percentage <= 20) {
	color = "orange";
} else if (percentage >= 90) {
	color = "green";
} else {
	color = "black";
}
</script>

<div style="color: {color};"><slot /></div>