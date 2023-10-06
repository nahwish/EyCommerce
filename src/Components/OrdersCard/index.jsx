const OrdersCard = (props) => {
  const { totalPrice, totalProducts, dateOfOrder } = props;

  return (
    <div className="flex justify-between items-center border border-black p-4 rounded-lg mb-4 w-full">
      <p className="flex items-center gap-2">
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
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
          />
        </svg>
      </p>
      <div className="flex flex-col">
        <span className="font-light">{dateOfOrder}</span>
        <span className=" font-light">{totalProducts} Articles</span>
      </div>
      <span className="font-medium text-2xl">${totalPrice}</span>
    </div>
  );
};

export default OrdersCard;
