"use client";

type TrendingDestinationCardProps = {
  image: string;
  name: string;
};

const TrendingDestinationCard = ({
  image,
  name,
}: TrendingDestinationCardProps) => {
  return (
    <div className="relative h-[200px] rounded-lg overflow-hidden cursor-pointer group">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* City Name */}
      <p className="absolute bottom-3 left-3 text-white text-lg font-bold z-10">
        {name}
      </p>

    </div>
  );
};

export default TrendingDestinationCard;