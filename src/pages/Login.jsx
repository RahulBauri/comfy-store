import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data));
      toast.success('logged in successfully');

      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';

      toast.error(errorMessage);

      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });

      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error, please try again');
    }
  };

  return (
    <section className='grid place-items-center h-screen'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput label='Email' type='email' name='identifier' />
        <FormInput label='Password' type='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button
          onClick={loginAsGuestUser}
          type='button'
          className='btn btn-secondary btn-block uppercase'
        >
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-3 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
