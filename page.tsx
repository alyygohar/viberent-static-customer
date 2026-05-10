import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Locations from "@/components/Locations";
import HandSelectedHomes from "@/components/HandSelectedHomes";
import FindNearYou from "@/components/FindNearYou";
import HowItWorks from "@/components/HowItWorks";
import ManagedWithCare from "@/components/ManagedWithCare";
import Testimonials from "@/components/Testimonials";
import OwnerCTA from "@/components/OwnerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />
      <Locations />
      <HandSelectedHomes />
      <FindNearYou />
      <HowItWorks />
      <ManagedWithCare />
      <Testimonials />
      <OwnerCTA />
      <Footer />
    </main>
  );
}
