import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";

function FeaturedProducts({ type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(res);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
        {data.map((item) => (
          <Card keyç={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
