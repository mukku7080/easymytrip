import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Offers } from "@/components/Offer";
import SearchWidget from "@/components/SearchWidget";
import TrendingDestinations from "@/components/TrendingDestination";

export default function Home() {
  return (
    <div >
      <Hero />
      <SearchWidget />
      <Offers />
      <TrendingDestinations />
    </div>
  );
}