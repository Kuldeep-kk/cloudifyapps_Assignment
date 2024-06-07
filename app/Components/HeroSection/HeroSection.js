'use client';
import React, { useState } from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
import styles from './herosection.module.css';
import SliderCards from "@/app/Components/SliderCards/SliderCards";
import PageWrapper from "@/app/Components/PageWrapper";
import GameOver from "@/app/Components/GameOver/GameOver";

const HeroSection = ({ showSlider, setShowSlider }) => {

    const [isGameOver, setIsGameOver] = useState(false);
    const handleGameOver = () => {
        setIsGameOver(true);
        setShowSlider(false);
    };
    const handlePlayAgain = () => {
        setIsGameOver(false);
        setShowSlider(false);
    };

    return (
        <PageWrapper>
            <div className={`${styles.heroMain}`}>

                {!showSlider && !isGameOver && (
                    <div className={`${styles.heroContent}`}>
                        <div className={`${styles.heroContentQuotes}`}>
                        <h1 className={styles.heroTitle}>
                            Addition and Subtraction Facts within 20
                        </h1>
                        <p className={styles.heroDescription}>
                            Test your knowledge with the following questions, tap a card to flip it and uncover the answer, good luck!
                        </p>
                        </div>

                        <div
                            className={styles.parentBtn}
                            onClick={() => setShowSlider(true)}
                        >
                            <FaRegPlayCircle
                                size={20}
                                className={styles.childIcon}
                            />
                            <h2 className={styles.btnText}>Let&#39;s play</h2>
                        </div>
                    </div>
                )}
            </div>
            {/* Show Slider Cards component when showSlider is true */}
            {showSlider && <SliderCards onGameOver={handleGameOver} />}

            {/* Show Game Over component when isGameOver is true */}
            {isGameOver && <GameOver onPlayAgain={handlePlayAgain} />}
        </PageWrapper>
    );
};

export default HeroSection;
