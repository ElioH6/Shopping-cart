function NavBarIcon({ icon, text = 'tooltip !', productNum, onClick }) {
    return (
        <div
            className="relative sidebar-icon group cursor-pointer"
            onClick={onClick}
        >
            {icon}

            {/* if productNum is not undefined show the number */}
            {productNum !== undefined && (
                <span className="absolute top-3 right-[-4px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {productNum < 0 ? 0 : productNum}
                </span>             
            )}
            <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
    );
}

export default NavBarIcon