import { FaPlus } from "react-icons/fa"

type productCardProps = {
    productId: string,
    photo:string,
    name:string,
    price:number,
    stock:number,
    handler : ()=> void

}

// const server = "djfnejf"
const ProductCard = ({productId,photo,name,price,stock,handler}:productCardProps) => {


  
  return (
        <div className="product-card">

            <img src={photo}  alt={name} />
            <p>{name}</p>
            <span>₹{price}</span>

            <div>   
                <button onClick={()=> {handler()}}>
                    <FaPlus/>

                </button>
            </div>
            
        </div>
  )
}

export default ProductCard