import ReactLoadingSkeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import clsx from 'clsx'

type Props = {
  className?: string
}

const LoadingBar = (props: Props) => (
  <ReactLoadingSkeleton
    baseColor='#222222'
    highlightColor='#2D2E3D'
    className={clsx('!rounded-md', props.className)}
    {...props}
  />
)

export default LoadingBar