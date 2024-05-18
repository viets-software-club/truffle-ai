<script>
  export let value = 0;
  export let max = 100;

  let color = '';
  let percentage = (value / max) * 100;

  if (percentage <= 10) {
    color = 'red';
  } else if (percentage <= 20) {
    color = 'orange';
  } else if (percentage >= 80) {
    color = 'lightgreen';
  } else if (percentage >= 90) {
    color = 'green';
  }
</script>

<span style="color: {color};"><slot /></span>