const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl sm:text-6xl font-bold leading-none tracking-tight'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A veritatis ex
        nobis repudiandae itaque praesentium. Minus optio corrupti enim,
        excepturi soluta, et non qui amet quod ex, dolores reprehenderit!
        Cupiditate nulla corporis nesciunt quae perferendis maiores reiciendis
        a. Nam quo ea maiores esse similique reiciendis excepturi minus corrupti
        iste corporis!
      </p>
    </>
  );
};
export default About;
