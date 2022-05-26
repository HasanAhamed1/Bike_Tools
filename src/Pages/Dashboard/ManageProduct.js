import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProductRow from './ProductRow';


const ManageProducts = () => {
    const {data: products, isLoading, refetch} = useQuery('products', () => fetch('https://calm-scrubland-52483.herokuapp.com/tools', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Products: {products.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Id</th>
        <th>Product Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            products.map((product, index) => <ProductRow
             key={product._id}
             product={product}
             index={index}
             refetch={refetch}
             ></ProductRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProducts;