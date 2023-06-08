import withAuth from '@/components/side-effects/withAuth'
import Image from 'next/image'

const FourOFour = () => (
  <div>
    <div className=" flex justify-center">
      <Image
        src="/404.jpg"
        alt="Image"
        className="absolute top-20 mx-auto"
        width={500}
        height={300}
      />
    </div>
    <a href="http://www.freepik.com" className="absolute bottom-0">
      Designed by stories / Freepik
    </a>
  </div>
)
export default withAuth(FourOFour)
