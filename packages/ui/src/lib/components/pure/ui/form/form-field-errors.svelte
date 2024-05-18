<script lang="ts">
	import * as FormPrimitive from 'formsnap';
	import { cn } from '$lib/utils/index.js';

	type $$Props = FormPrimitive.FieldErrorsProps & {
		errorClasses?: string | undefined | null;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let errorClasses: $$Props['class'] = undefined;
</script>

<FormPrimitive.FieldErrors
	class={cn('text-sm text-destructive', className)}
	{...$$restProps}
	let:errors
	let:fieldErrorsAttrs
	let:errorAttrs
>
	<slot {errors} {fieldErrorsAttrs} {errorAttrs}>
		<div {...errorAttrs} class={cn(errorClasses)}>{errors.join(', ')}</div>
	</slot>
</FormPrimitive.FieldErrors>
