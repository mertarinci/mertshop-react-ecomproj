import React from "react";
import "./List.scss";
import Card from "../Card/Card";

function List() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Long Sleeve T-Shirt",
      isNew: true,
      oldPrice: 30,
      price: 20,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Gray Jacket",
      isNew: true,
      oldPrice: 40,
      price: 30,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Parka",
      isNew: true,
      oldPrice: 50,
      price: 35,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fancy Sweeter",
      isNew: true,
      oldPrice: 35,
      price: 25,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fancy Sweeter",
      isNew: true,
      oldPrice: 35,
      price: 25,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fancy Sweeter",
      isNew: true,
      oldPrice: 35,
      price: 25,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fancy Sweeter",
      isNew: true,
      oldPrice: 35,
      price: 25,
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fancy Sweeter",
      isNew: true,
      oldPrice: 35,
      price: 25,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
