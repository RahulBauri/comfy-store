import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col items-center text-white'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='text-3xl font-bold mt-4 tracking-tight sm:text-5xl text-primary'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7 text-primary'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className='mt-10'>
            <Link to='/' className='btn btn-secondary uppercase'>
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className='grid min-h-screen place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>there was an error...</h4>
    </main>
  );
};
export default Error;
