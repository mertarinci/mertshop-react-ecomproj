import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/983564/pexels-photo-983564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Long Sleeve T-Shirt",
      isNew: true,
      oldPrice: 30,
      price: 20,
      desc: "Long Sleeve Graphic TShirt",
    },
  ];

  return (
    <div className="cart">
      <h1>Product(s) in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$555</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
