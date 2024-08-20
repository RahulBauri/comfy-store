import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className='pt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const {
          attributes: { title, price, image },
          id,
        } = product;

        const dollarsAmount = formatPrice(price);

        return (
          <Link
            to={`/products/${id}`}
            key={id}
            className='shadow-xl hover:shadow-2xl card w-full transition duration-300'
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='w-full object-cover rounded-xl h-64 md:h-48'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='capitalize tracking-wider card-title'>{title}</h2>
              <span className='text-secondary'>{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
