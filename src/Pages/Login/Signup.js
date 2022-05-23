import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from '../Hooks/useToken';

const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();
    
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    
      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || gUser);

      const navigate = useNavigate();
    
      let signInError;
    
      if(loading || gLoading || updating){
          return <Loading></Loading>
      }
    
      if(error || gError || updateError){
          signInError = <p className="text-red-500 font-small">{error?.message || gError?.message || updateError?.message}</p>
      }
    
      if (token) {
        console.log(user || gUser);
        navigate('/');
      }
    
      const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
      }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/wSV9w26/2000000283-removebg-preview.png" className="hidden lg:block" />
    <div className="flex h-screen items-center lg:pl-16 lg:mr-14">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold uppercase mb-2">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
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

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-xs" {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is Required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    }
                  })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs" {...register("password", {
                    required: {
                        value: true,
                        message: 'password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'password Must be 6 characters or longer'
                    }
                  })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}          
              </label>
            </div>
            {signInError}    
            <input className="btn w-full max-w-xs text-white" type="submit" value="Signup" />
          </form>

          <p><small>Already have an account <Link className="text-primary" to='/login'>Please login</Link></small></p>

          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        
    );
};
export default Signup;