function FinalPrice({ totalQuantity, totalPrice }) {
    return (
        <footer className='flex justify-end items-center sticky bottom-0 bg-white p-5 border-t-2 shadow-inner space-x-8 pr-9'>
            <div className='text-xl'>Total quantities: {totalQuantity}</div>
            <div><p className='text-xl'>Total: ${totalPrice}</p></div>
      </footer>
    )
}

export default FinalPrice