import "./styles.css"

const ProductDetail = ( ) =>{
  return (
    <aside className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Deatil</h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}

export default ProductDetail;