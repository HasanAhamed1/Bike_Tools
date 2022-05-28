import React from "react";

const ItemBanner = () => {
  return (
    <div className="flex gap-5">
      <div className="carousel carousel-vertical">
        <div className="carousel-item h-full">
          <button>
            <img src="https://i.ibb.co/QX18c7V/6.png" />
          </button>
        </div>
      </div>
      <div className="carousel carousel-vertical">
        <div className="carousel-item h-full">
          <button>
            <img src="https://i.ibb.co/LvVgCT8/7.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBanner;
