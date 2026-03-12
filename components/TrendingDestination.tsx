"use client";

import TrendingDestinationCard from "./TrendingDestinationCard";

// import TrendingDestinationCard from "./TrendingDestinationCard";

const destinations = [
  {
    name: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    name: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
  },
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
  },
  {
    name: "Hyderabad",
    image:
      "https://t4.ftcdn.net/jpg/03/60/89/09/360_F_360890991_Ykybj5JO5HYBaqWeROz9cR2jWXN8HZxf.jpg",
  },
];

const TrendingDestinations = () => {
  return (
    <div className="max-w-[1100px] mx-auto my-12 px-4">

      <h2 className="text-xl font-semibold mb-1">
        Trending destinations
      </h2>

      <p className="text-muted-500 mb-6">
        Most popular choices for travelers from India
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {destinations.map((item) => (
          <TrendingDestinationCard
            key={item.name}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>

    </div>
  );
};

export default TrendingDestinations;