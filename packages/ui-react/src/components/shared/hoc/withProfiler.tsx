import { Profiler, createElement } from 'react'

// see https://react.dev/reference/react/Profiler#onrender-callback
const onRender: React.ProfilerOnRenderCallback = (
	id,
	phase,
	actualDuration,
	baseDuration
) => {
	// eslint-disable-next-line no-console
	console.info(
		`Rerender ${id} on ${phase} in ${actualDuration}ms and base ${baseDuration}ms`
	)
}

const withProfiler =
	(id: string) =>
	<T extends JSX.IntrinsicAttributes>(
		WrappedComponent: React.ComponentType<T>
	) => {
		const displayName =
			WrappedComponent.displayName || WrappedComponent.name || 'Component'

		// Allow prop-spreading as this is HOC
		const ComponentWithProfiler = (props: T) => (
			<Profiler id={id} onRender={onRender}>
				{createElement(WrappedComponent, props)}
			</Profiler>
		)

		ComponentWithProfiler.displayName = `withProfiler(${displayName})`
		return ComponentWithProfiler
	}

export default withProfiler
