import { useEffect, useState } from "react"
import Loading from "../Loading/loading";
import ToTop from "../return to top/returnToTop";
import AboutUs from "../about us/aboutUs";
import ItemsNum from "../items number/itemsNum";
import { useOutletContext } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function Home() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [returnToTop, setReturnToTop] = useState(false);
    const [arrowDirection, setArrowDirection] = useState({});
    const { cartItems, setCartItems, numOfItems, setNumOfItems, quantities, setQuantities } = useOutletContext()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://api.allorigins.win/raw?url=https://fakestoreapi.com/products?limit=15');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log('Error fetching products:', error);
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [])


    // checks if the height of the window is greater than 200px
    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 200) {
                setReturnToTop(true);
            } else {
                setReturnToTop(false);
            }
        }
        
        window.addEventListener('scroll', checkScroll);

        return () => window.removeEventListener('scroll', checkScroll);
    }, [])

    
    const increment = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }))
    }

    const handleDiv = (e, productId) => {
        let div = e.currentTarget.parentElement.nextElementSibling;
        if (div.classList.contains('show')) {
            div.classList.remove('show');
            setTimeout(() => {
                div.classList.add('hidden');
            }, 500);
            setArrowDirection((prev) => ({
                ...prev,
                [productId]: false
            }));
        } else {
            div.classList.remove('hidden');
            setTimeout(() => {
                div.classList.add('show');
            }, 10);
            setArrowDirection((prev) => ({
                ...prev,
                [productId]: true
            }));
        }
    };
            
    const addToCart = (product) => {
        let cartItem = cartItems.find((item) => item.id === product.id)

        if (quantities[product.id] === undefined) {
            alert("Please add quantity")
            return;
        }
        if (cartItem) {
            return;
        } else {
            setNumOfItems(numOfItems + quantities[product.id])
            setCartItems([...cartItems, {...product}])
        }
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ): (
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center">
            {products.map((product) => {
                return (
                    <div key={product.id} className="shadow-lg rounded-lg p-4 m-5 flex flex-col justify-between">
                        <div className="flex flex-col items-center mt-10">
                            <img className="h-40 object-cover object-center" src={product.image} alt={product.title} />
                            <h2 className="text-lg">{product.title}</h2>
                        </div>

                        <div className="flex flex-col items-center mt-5 space-y-5">
                            <p className="text-lg">${product.price}</p>
                            {/* Toggle between MdKeyboardArrowUp and MdKeyboardArrowDown based on arrowDirection state */}
                            {arrowDirection[product.id] ? (
                                <MdKeyboardArrowUp onClick={(e) => handleDiv(e, product.id)} className="w-10 h-10" />
                            ) : (
                                <MdKeyboardArrowDown onClick={(e) => handleDiv(e, product.id)} className="w-10 h-10" />
                            )}
                        </div>

                        <div className="open-div">
                            <ItemsNum id={product.id} increment={increment} />
                            <button onClick={() => { addToCart(product) }} className="add-cart">Add to cart</button>
                        </div>
                    </div>
                );
            })}
            </div>
            )}
            {returnToTop && <ToTop />}
            <AboutUs />
        </div>
    )
}

export default Home