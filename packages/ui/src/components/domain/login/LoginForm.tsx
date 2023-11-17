import { FormEvent, FC } from 'react'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'

type LoginFormProps = {
  loading: boolean
  error: boolean
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const LoginForm: FC<LoginFormProps> = ({ loading, error, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    noValidate
    className='flex w-full flex-col items-center justify-center gap-2'>
    <Input
      placeholder='Email address'
      id='email'
      name='email'
      type='email'
      className='w-full max-w-full py-3'
    />
    <Input
      placeholder='Password'
      name='password'
      type='password'
      className='w-full max-w-full py-3'
    />
    {error && (
      <div className='mt-4 text-center text-sm text-red-500'>
        Invalid email or password. Please note that only invited users or La Famiglia employees can
        sign in.
      </div>
    )}
    <Button
      variant='highlighted'
      type='submit'
      name='provider'
      value='email'
      className='mt-4 w-full justify-center py-3 text-white'>
      {loading ? 'Loading...' : 'Log in'}
    </Button>
  </form>
)

export default LoginForm
