import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = ({ products }) => {
  return (
    <div className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </div>
  );
};
export default FeaturedProducts;
