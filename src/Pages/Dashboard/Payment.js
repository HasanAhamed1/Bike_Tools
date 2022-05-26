import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51L3gQbDORVbkEhANZHLsbgh8Lyh18aTHjvK2JFlkE7eoO9IudVqOs3oXjhSIrHCDeyvjJMkkUSKm8Wo63WrIXEkr00VeaUlWL1');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/bookings/${id}`;

  const { data: order, isLoading } = useQuery(["bookings", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      
          <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success">Hello, {order.userName}</p>
              <h2 class="card-title">Pay for {order.tool}</h2>
              
              <p>Please Pay: {order.price}</p>
            </div>
          </div>
          <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body"></div>
            <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
          </div>
        </div>
      
  );
};

export default Payment;