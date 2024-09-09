import { useOutletContext } from "react-router-dom"

function ItemsNum({ id, increment }) {
    const { numOfItems, setNumOfItems, quantities, setQuantities } = useOutletContext()
    
    const decrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 0
        }))

        setNumOfItems(numOfItems > 0 ? numOfItems - 1 : 0)
    }

    return (
        <div className="flex items-center space-x-4 shadow-lg">
            <button onClick={() => decrement(id)} className="remove-cart w-10">-</button>
            <span className="text-lg pt-2 custom">{quantities[id] || 0}</span>
            <button onClick={() => increment(id)} className="add-cart w-10">+</button>
        </div>
    )
}

export default ItemsNum