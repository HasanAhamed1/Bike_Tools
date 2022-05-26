import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const AddProduct = ({isLoading}) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const imgStorageKey = '3486ee0fb229eca8173cad281f670dce';

      const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result => {
          if(result.success){
            const img = result.data.url;
            const product = {
              img: img,
              name: data.name,
              shortDescription: data.description,
              minOrderQuantity: data.minQuantity,
              availableQuantity: data.availableQuantity,
              price: data.price
            }
            fetch('http://localhost:5000/tools',{
              method: 'POST',
              headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(inserted => {
              if(inserted.insertedId){
                toast.success('Product Added Successfully')
                reset();
              }
              else{
                toast.error('Faild to add the product');
              }
            })
          }
          
        })
      }

      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div>
            <h1>Add a new Product</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 justify-items-center">

            <div>
              {/* ------image---- */}
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                placeholder="Product Image"
                className="input input-bordered w-full max-w-xs" {...register("image", {
                    required: {
                        value: true,
                        message: 'Image is Required'
                    }
                  })}
              />
              <label className="label">
              {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
              </label>
            </div>

            {/* ------Product Name------ */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Product Name</span>
              </label>
              <input
                type="name"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs" {...register("name", {
                    required: {
                        value: true,
                        message: 'Product Name is Required'
                    }
                  })}
              />
              <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>} 
              </label>
            </div>

            {/* -----short description----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-full max-w-xs" {...register("description", {
                    required: {
                        value: true,
                        message: 'Description is Required'
                    }
                  })}
              />
              <label className="label">
              {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
              </label>
            </div>

            {/* -------Min Quantity----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Minimum Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Minimum Quantity"
                className="input input-bordered w-full max-w-xs" {...register("minQuantity", {
                    required: {
                        value: true,
                        message: 'quantity is Required'
                    }
                  })}
              />
            </div>
            </div>

            <div>
              {/* ---------Available Quantity----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Available Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-xs" {...register("availableQuantity", {
                    required: {
                        value: true,
                        message: 'quantity is Required'
                    }
                  })}
              />
            </div>

            {/* --------Price------- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs" {...register("price", {
                    required: {
                        value: true,
                        message: 'price is Required'
                    }
                  })}
              />
            </div>
            <br />
            <input className="btn w-full max-w-xs text-white" type="submit" value="Add Product" />
            </div>
          </form>
        </div>
    );
};

export default AddProduct;