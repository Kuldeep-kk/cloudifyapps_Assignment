'use client';
import Navbar from "@/app/Components/Navbar";
import MyBackground from "@/app/Components/MyBackground";
import HeroSection from "@/app/Components/HeroSection/HeroSection";
import PageWrapper from "@/app/Components/PageWrapper";
import {useState} from "react";

export default function Home() {
    const [showSlider, setShowSlider] = useState(false);
  return (


    <PageWrapper>

        <div className="relative overflow-hidden h-screen ">
            <Navbar/>
            <MyBackground showSlider={showSlider}/>
            <HeroSection showSlider={showSlider} setShowSlider={setShowSlider} />
            <h2 className={`absolute left-0 bottom-0 text-white text-sm p-3`} style={{fontFamily:'Inter'}}>Powered by CLOUDIFYAPPS</h2>
        </div>
    </PageWrapper>
  );
}
