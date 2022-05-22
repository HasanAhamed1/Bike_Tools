import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 bg-[url('https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-129717.jpg?t=st=1653200585~exp=1653201185~hmac=b5eba1d4587ea1d5b6edbe3eec2d2493cc60415f652e37da219dcba4546a266e&w=740')]">
  <div class="hero-content flex-col lg:flex-row-reverse lg:px-16">
    <img src="https://i.ibb.co/LdhrDrp/layer-img-1-removebg-preview.png" />
    <div>
      <h3 className='text-3xl'>Best Deal</h3>
      <h1 class="text-6xl font-bold">15%-20% off</h1>
      <p class="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;