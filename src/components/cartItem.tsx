import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProp = {
  cartItem : any
}

const CartItem = ({ cartItem }: CartItemProp) => {

    //   productId: "asfsfm",
    // photo: "https://m.media-amazon.com/images/I/71WkDp--uqL._SX679_.jpg",
    // name: "Macbook",
    // price: 3000,
    // quantity: 4,
    // stock: 10,
  
  const { photo, name, price, productId, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div >
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>


      <button>
        <FaTrash/>
      </button>
    </div>
  );
}

export default CartItem