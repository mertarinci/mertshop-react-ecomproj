import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

function List({ subCats, catId, sort, maxPrice }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}${
      sort === null ? "" : `&sort=price:${sort}`
    }`
  );

  console.log(sort);
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default List;
