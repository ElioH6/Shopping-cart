function ToTop() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <button
            onClick={scrollToTop}
            className="fixed top-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
        >
            ↑ Return to Top
      </button>

    )
}

export default ToTop