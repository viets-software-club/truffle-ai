import type { FC } from 'react'
import type { SkeletonProps } from 'react-loading-skeleton'
import ReactLoadingSkeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import clsx from 'clsx'

const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => (
  <ReactLoadingSkeleton
    baseColor='#222222'
    highlightColor='#2D2E3D'
    className={clsx('!rounded-md', className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

export default Skeleton
