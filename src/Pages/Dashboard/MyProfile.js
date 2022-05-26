import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyProfile = ({isLoading}) => {
    const [user] = useAuthState(auth);
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
            const addreview = {
              img: img,
              name: data.name,
              email: data.email,
              address: data.address,
              status: data.status,
              phone: data.phone
            }
            fetch('http://localhost:5000/profile',{
              method: 'POST',
              headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(addreview)
            })
            .then(res => res.json())
            .then(inserted => {
              if(inserted.insertedId){
                toast.success('Successfull')
                reset();
              }
              else{
                toast.error('Sorry faild!');
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
            <h1>MY PROFILE:</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

           
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

            {/* ------Name------ */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                value={user.displayName}
                className="input input-bordered w-full max-w-xs" {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                  })}
              />
              <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>} 
              </label>
            </div>

            {/* ------Email------ */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                className="input input-bordered w-full max-w-xs" {...register("email", {
                    required: {
                        value: true,
                        message: 'Product Name is Required'
                    }
                  })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} 
              </label>
            </div>

            {/* -----Address----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs" {...register("address", {
                    required: {
                        value: true,
                        message: 'address is Required'
                    }
                  })}
              />
              <label className="label">
              {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
              </label>
            </div>

            {/* -------Education----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Your Job</span>
              </label>
              <input
                type="text"
                placeholder="Your current status"
                className="input input-bordered w-full max-w-xs" {...register("status", {
                    required: {
                        value: true,
                        message: 'status is Required'
                    }
                  })}
              />
            </div>

            {/* -------phone----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Contact Number</span>
              </label>
              <input
                type="tel"
                placeholder="Contact Number"
                className="input input-bordered w-full max-w-xs" {...register("phone", {
                    required: {
                        value: true,
                        message: 'phone is Required'
                    }
                  })}
              />
            </div>
            
            <br />
            <input className="btn w-full max-w-xs text-white" type="submit" value="Submit" />
            
          </form>
        </div>
    );
};

export default MyProfile;
