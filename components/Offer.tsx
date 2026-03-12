"use client";

export const Offers = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 mt-16">

      <h2 className="text-xl font-semibold">
        Offers
      </h2>

      <p className="text-muted-500 mb-6">
        Promotions, deals and special offers for you
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-md p-5 flex flex-col md:flex-row gap-4">

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Take your longest holiday yet
            </h3>

            <p className="text-muted-500 mb-4">
              Browse properties offering long-term stays.
            </p>

            <button className="bg-primary-500 text-white px-4 py-2 rounded-md">
              Find a stay
            </button>
          </div>

          <img
            src="https://storage.googleapis.com/banani-generated-images/generated-images/573adeff-6e39-477e-a16e-dbb9c5adc957.jpg"
            className="w-full md:w-[160px] h-auto object-cover rounded-md"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-md p-5 flex flex-col md:flex-row gap-4">

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              Take your longest holiday yet
            </h3>

            <p className="text-muted-500 mb-4">
              Browse properties offering long-term stays.
            </p>

            <button className="bg-primary-500 text-white px-4 py-2 rounded-md">
              Search for flights
            </button>
          </div>

          <img
            src="https://storage.googleapis.com/banani-generated-images/generated-images/573adeff-6e39-477e-a16e-dbb9c5adc957.jpg"
            className="w-full md:w-[160px] h-auto object-cover rounded-md"
          />
        </div>

      </div>
    </div>
  );
};