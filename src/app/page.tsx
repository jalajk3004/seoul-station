import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Customers from "@/components/Customers";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Products />
      <Gallery />
      <Customers />
      {/* <Story /> */}
    </div>
  );
}
