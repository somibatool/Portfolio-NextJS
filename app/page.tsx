import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection";
import ProjectCards from "./components/ProjectCards";

export default function Home() {
  return (
    <div>
      <main className="flex min-hscreen flex-col bg-[#121212]">
        <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
       <HeroSection/>
       < AboutSection />
       < ProjectSection />
    </div>
      </main>
    </div>
  );
}
