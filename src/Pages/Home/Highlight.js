import React from "react";

const Highlight = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
      <button>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src="https://i.ibb.co/cCppXww/1.png" alt="Shoes" />
          </figure>
        </div>
      </button>
      <button>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src="https://i.ibb.co/Hd1Cq3v/2.png" alt="Shoes" />
          </figure>
        </div>
      </button>
      <button>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src="https://i.ibb.co/b1ypCWJ/3.png" alt="Shoes" />
          </figure>
        </div>
      </button>
    </div>
  );
};

export default Highlight;
