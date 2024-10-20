import axios from 'axios';
import {  Products } from '../../interface/products';
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';

export default function Product() {
  const [searchTerm, setSearchTerm] = useState('');
  const [productslist,setProductsList]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [error, setError] = useState<string | null>(null); // Error state
  
  

  async function getAllProducts() {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      setProductsList(response.data);
      setIsLoading(false);
    } catch (err) {
      setError('Error loading products. Please try again later.'); // Handle the error
      setIsLoading(false);
    }
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
  }
  const filteredProducts = productslist?.filter(
    (product: Products) =>
      product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  
  useEffect(() => {
    getAllProducts()
},[])
  
  
  
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div className="error-message">
          <h2>{error}</h2> {/* Display error message */}
        </div>
      ):(
        <>
          {/* <div className="application">
            <Helmet>
              <meta charSet="utf-8" />
              <title> Products</title>
            </Helmet>
          </div> */}
          <div className='container-fluid mt-5'>
            <input
              type='text'
              className='form-control w-75 mx-auto my-5'
              placeholder='Search........'
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className='row g-4'>
              {filteredProducts?.map((el: Products) => (
                <div className='col-md-3  ' key={el.id}>
                  <div className='product position-relative  '>
                      <div className='img d-flex justify-content-center align-items-center'>
                      <img src={el.image} className='w-75 p-4  ' alt='' />
                      </div>
                      <h6 className='text-main p-2'>{el.category}</h6>
                      <h3 className='h6 fw-bold p-2'>{el.title.split(' ').slice(0, 2).join(' ')}</h3>
                      <div className='d-flex justify-content-between p-2'>
                        <span>{el.price} EGP</span>
                        <span>
                          <i className='fa-solid fa-star rating-color'></i>
                          {el.rating.rate}
                        </span>
                      </div>
                    
                    <button className='btn bg-main text-white d-block w-100 mt-3' >Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}