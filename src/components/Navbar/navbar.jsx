import { IoHomeOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import NavBarIcon from "../Sidebar icon/navBarIcon";

function Navbar({ num }) {
    const toBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }

    return (
        <div className="flex flex-col p-6 px-10 sm:flex-row justify-between items-center bg-primary text-blue-500">
            <h1 className="text-3xl pb-4 sm:p-0 text-nowrap">My shopping website</h1>
            <div className="flex space-x-8">
                <Link to='/'>
                        <NavBarIcon
                         icon={<IoHomeOutline />}
                         text="Home" 
                         />
                    </Link>
                    <NavBarIcon 
                        icon={<IoInformationCircleOutline />} 
                        text="About us" 
                        onClick={toBottom}
                    />
                <Link to='/cart'>
                    <NavBarIcon 
                        icon={<TiShoppingCart />} 
                        text="Basket" 
                        productNum={num}
                    />
                </Link>    
            </div>
        </div>
    )
}

export default Navbar