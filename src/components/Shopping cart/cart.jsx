import { useOutletContext } from "react-router-dom"
import ItemsNum from "../items number/itemsNum"
import FinalPrice from "../Final price/finalPrice"
import { useEffect } from "react"

function Cart() {
    const { cartItems, setCartItems, numOfItems, setNumOfItems, quantities, setQuantities } = useOutletContext()

    useEffect(() => {
        // Find items with quantity 0 and remove them
        const itemsToRemove = cartItems.filter(item => quantities[item.id] === 0).map(item => item.id);

        if (itemsToRemove.length > 0) {
            itemsToRemove.forEach(id => removeFromCart(id));
        }
    }, [quantities, cartItems])

    
    const increment = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }))

        setNumOfItems(numOfItems + 1)
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(item => item.id !== id))
        setNumOfItems(prev => prev - (quantities[id] || 0))
        setQuantities(prev => {
            const newQuantities = { ...prev }
            delete newQuantities[id]
            return newQuantities
        })
    }

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * quantities[item.id], 0)

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                {cartItems.length === 0 ? (
                    <p className='text-center text-3xl mt-44 text-red-600'>Your cart is empty</p>
                ) : (
                    <div className="flex flex-col sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                        {cartItems.map((product) => (
                            <div key={product.id} className="shadow-lg rounded-lg p-4 m-5 flex flex-col justify-between">
                                <div className="flex flex-col items-center mt-10">
                                    <img className="h-40 object-cover object-center" src={product.image} alt={product.title} />
                                    <h2 className="text-lg">{product.title}</h2>
                                </div>
                                <div className="flex flex-col items-center py-4">
                                    <p className="text-lg">${product.price}</p>
                                    <p className="text-lg">Quantity: {quantities[product.id] || 0}</p>
                                    <ItemsNum id={product.id} increment={increment} />         
                                    <button onClick={() => removeFromCart(product.id)} className="remove-cart h-12">Remove from cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <FinalPrice totalQuantity={numOfItems < 0 ? 0 : numOfItems} totalPrice={totalAmount.toFixed(2)} />
        </div>
    )
}

export default Cart
