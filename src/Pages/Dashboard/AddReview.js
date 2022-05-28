import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const AddReview = ({ isLoading }) => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = "3486ee0fb229eca8173cad281f670dce";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const addreview = {
            img: img,
            name: data.name,
            email: data.email,
            review: data.review,
            ratings: data.ratings,
          };
          fetch("https://calm-scrubland-52483.herokuapp.com/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addreview),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Review Added Successfully");
                reset();
              } else {
                toast.error("Sorry faild to add the review!");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Add Review</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ------image---- */}
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            placeholder="Product Image"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        {/* ------Name------ */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input
            type="name"
            disabled
            value={user.displayName}
            className="input input-bordered w-full max-w-xs"
            {...register("name", {})}
          />
        </div>

        {/* ------Email------ */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            disabled
            value={user.email}
            className="input input-bordered w-full max-w-xs"
            {...register("email", {})}
          />
        </div>

        {/* -----Review----- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Review</span>
          </label>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered w-full max-w-xs"
            {...register("review", {})}
          />
        </div>

        {/* -------ratings----- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">ratings</span>
          </label>
          <input
            type="text"
            placeholder="ratings"
            className="input input-bordered w-full max-w-xs"
            {...register("ratings", {
              required: {
                value: true,
                message: "ratings is Required",
              },
            })}
          />
        </div>

        <br />
        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};
export default AddReview;
