import Image from "next/image";

function Cart() {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Left Section: Cart Details (60%) */}
      <div className="w-full md:w-[70%] p-4 rounded-lg">
        {/* Free Delivery Section */}
        <div className="text-left mb-6 bg-gray-100 p-4 rounded-md">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Free Delivery</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Applies to orders of ₹ 14,000.00 or more.{' '}
            <a href="#" className="underline text-gray-900">View Details</a>
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Bag</h2>

        {/* Cart Item 1 */}
        <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex flex-col sm:flex-row items-start">
          <Image
            src="/g1.png"
            alt="Nike Dri-FIT"
            width={150}
            height={150}
            className="rounded-md object-cover w-full sm:w-auto"
          />
          <div className="sm:ml-4 flex flex-col justify-between w-full mt-4 sm:mt-0">
            <div className="flex justify-between items-start sm:items-center text-sm sm:text-lg">
              <h3 className="font-semibold text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <span className="font-semibold"><p className="text-gray-900">MRP: ₹ 3,895.00</p></span>
            </div>
            <div className="text-sm sm:text-base mt-2">
              <p className="text-gray-600">Men &apos;s Short-Sleeve Running Top</p>
              <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
              <p className="text-gray-600">Size L &emsp; Quantity 1</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <Image
                src="/Vector.png"
                alt="Heart Icon"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              <Image
                src="/Vector (1).png"
                alt="Delete Icon"
                width={18}
                height={18}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Other Cart Items */}
        {/* Similar updates as above for items 2 and 3 */}
      </div>

      {/* Right Section: Summary (40%) */}
      <div className="w-full md:w-[30%] p-4 rounded-lg bg-gray-100">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Summary</h2>
        <div className="flex justify-between text-gray-800 mb-4 text-sm sm:text-base">
          <p>Subtotal</p>
          <p>₹ 29,585.00</p>
        </div>
        <div className="flex justify-between text-gray-800 mb-4 text-sm sm:text-base">
          <p>Estimated Delivery</p>
          <p>₹ 200.00</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-gray-800 font-semibold text-lg sm:text-xl mb-4">
          <p>Total</p>
          <p>₹ 29,785.00</p>
        </div>
        <button className="w-full text-white bg-black p-3 rounded-full font-medium shadow-md">
          <a href="/Order">Member Checkout</a>
        </button>
      </div>
    </div>
  );
}

export default Cart;
