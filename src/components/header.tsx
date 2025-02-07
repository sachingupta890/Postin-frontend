import { useState } from "react"
import { BiLogOut } from "react-icons/bi"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import {Link} from "react-router-dom"


const user = {_id:"wwe",role:"admin"}
const Header = () => {

    const logoutHandler = ()=>{
        setIsOpen(false)
    }

    const [isOpen , setIsOpen ] = useState<boolean>(false)
  return (
    <nav className="header">
        <Link onClick={()=> setIsOpen(false)}
        to={"/"}>HOME</Link>
        <Link onClick={()=> setIsOpen(false)}
        to = {"/search"}><FaSearch/></Link>
        <Link 
        to = {"/cart"}><FaShoppingBag/></Link>

        {
            user?._id ?
            <>
                <button onClick={()=> setIsOpen((prev)=> !prev) }>
                    <FaUser/>
                </button>
                <dialog open = {isOpen}>
                    <div>
                        {
                            user.role === "admin" && (
                                <Link to = {"/admin/dashboard"}>Admin</Link>
                            )

                        }
                        <Link onClick={()=> setIsOpen(false)} to={"/orders"}>Orders</Link>
                        <button onClick={logoutHandler}>
                            <FaSignOutAlt/>
                        </button>
                    </div>
                </dialog>
            </>
            :
            <Link  onClick={()=> setIsOpen(false)} to = {"/login"}>
                <FaSignInAlt/>
        
            </Link>
        }

        
    </nav>
  )
}

export default Header