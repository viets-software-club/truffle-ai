type ErrorProps = {
  title: string
  message: string
}

const Error = ({ title, message }: ErrorProps) => (
  <div className="flex grow flex-col items-center justify-between bg-radial-gradient">
    <div />
    <div className="flex flex-col items-center">
      <p className="mb-4 text-36 font-semibold text-gray-100">{title}</p>
      <p>{message}</p>
    </div>
    <div className="self-center pb-4 text-12 text-gray-300">© 2023 La Famiglia x Rostlab</div>
  </div>
)
export default Error
