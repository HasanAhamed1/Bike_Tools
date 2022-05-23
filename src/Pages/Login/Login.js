import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import useToken from "../Hooks/useToken";


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  useEffect( () => {
    if (token) {
        navigate(from, { replace: true });
      }
  }, [token, from, navigate]);

  if(loading || gLoading){
      return <Loading></Loading>
  }

  if(error || gError){
      signInError = <p className="text-red-500 font-small">{error?.message || gError?.message}</p>
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://i.ibb.co/LdhrDrp/layer-img-1-removebg-preview.png" className="hidden lg:block" />

      <div className="flex h-screen items-center lg:pr-16">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold uppercase mb-2">Login</h2>
          
          <form onSubmit={handleSubmit(onSubmit)}>

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
            <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
          </form>
          <p><small>New to Bikers Spot <Link className="text-primary" to='/signup'>Create New Account</Link></small></p>

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

export default Login;