import Image from "next/image";
import TopNavBar from "./components/topNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar/>

      {/* HERO SECTION */}
      <section className="">
        {/* bg video - hero*/}
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/AllCal_hero_vid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* video overlay */}
          <div className="absolute inset-0 bg-black/20"></div> 

          
      </section>
    </>
    
 );
}
