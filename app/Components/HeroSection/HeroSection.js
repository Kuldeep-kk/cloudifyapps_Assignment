'use client';
import React, {useState} from 'react';
import {FaRegPlayCircle} from "react-icons/fa";
import styles from './herosection.module.css';
import SliderCards from "@/app/Components/SliderCards/SliderCards";
import PageWrapper from "@/app/Components/PageWrapper";
import GameOver from "@/app/Components/GameOver";

const HeroSection = ({showSlider,setShowSlider}) => {

    const [gameOver, setGameOver] = useState(false);

    const handleGameOver = () => {
        setGameOver(true);
        setShowSlider(false);
    };

    const handlePlayAgain = () => {
        setGameOver(false);
        setShowSlider(false);
    };
    return (
<PageWrapper>
        <div className={`flex flex-col justify-center items-center h-screen w-full `}>

            {!showSlider && !gameOver && (
        <div className={`flex flex-col justify-center items-center w-full lg:w-1/2  px-10 gap-5`}>
            <h1 className={`text-white text-4xl md:text-5xl font-bold text-center`}>Addition and Subtraction Facts within 20 </h1>
            <p className={`text-white text-sm text-center md:text-lg md:w-2/3 lg:w-full`}>Test your knowledge with the following questions, tap a card to flip it and uncover the answer, good luck!</p>
            <div className={`flex justify-center items-center gap-3 py-3 px-5 rounded-3xl transition delay-75  ${styles.parentBtn}`} style={{background:"#FDF415"}} onClick={()=>setShowSlider(true)}>
                <FaRegPlayCircle size={20} className={`transform transition hover:rotate-180 delay-100 ${styles.childIcon}`}/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2 className={` font-semibold`}>Let's play</h2>
            </div>

        </div>
            )}
            {showSlider && <SliderCards onGameOver={handleGameOver} />}
            {gameOver && <GameOver onPlayAgain={handlePlayAgain}/> }

        </div>
</PageWrapper>


    );
};

export default HeroSection;