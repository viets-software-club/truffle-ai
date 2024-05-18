<script lang="ts">
	import { Icon } from 'svelte-icon-pack';
	type Props = {
		src: IconType;
		size?: string | number | undefined;
		viewBox?: string | undefined;
		color?: string | undefined;
		title?: string | undefined;
		className?: string | undefined;
	};
	const { ...props } = $props();
</script>

<Icon {...props} />
