import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          explicabo nulla cupiditate, molestias est sequi labore quasi vitae
          optio, in, natus dignissimos alias nesciunt similique repellat
          distinctio blanditiis ratione! Totam doloremque sunt dicta recusandae
          voluptatem incidunt corrupti temporibus labore magnam.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card keyç={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
