import Image from 'next/image'
import { FC } from 'react'

type ImageProps = {
  src: string
  alt: string
}

const DocsImage: FC<ImageProps> = ({ src, alt }) => (
  <div className="relative my-4 w-full overflow-hidden rounded-lg shadow-2xl shadow-gray-800/20">
    <Image
      className="relative h-auto w-full"
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
    />
  </div>
)

export default DocsImage
