import LandingBlog from "@/components/Sections/LandingPage/Blog";
import CTA from "@/components/UI/CTA";
import Featured from "@/components/Sections/LandingPage/Featured";
import Hero from "@/components/Sections/LandingPage/Hero";
import Newsletter from "@/components/Sections/LandingPage/Newsletter";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Hero />
      {/* Featured Section */}
      <Featured /> 
      {/* News Letter */}
      {/* <Newsletter/> */}
      {/* CTA Section */}
      {/* <CTA /> */}
      {/* Blog Section */}
      {/* <LandingBlog /> */}
      
     
    </div>
  );
}
