'use client';
import React, { useState } from 'react';
import {motion, AnimatePresence, useMotionValue, useTransform} from 'framer-motion';
import Image from 'next/image';
import Solution1Src from '@/public/assests/1.png';
import Solution2Src from '@/public/assests/2.png';
import Solution3Src from '@/public/assests/3.png';
import Solution4Src from '@/public/assests/4.png';
import Solution5Src from '@/public/assests/5.png';
import Solution6Src from '@/public/assests/6.png';
import Solution7Src from '@/public/assests/7.png';
import Solution8Src from '@/public/assests/8.png';
import Solution9Src from '@/public/assests/9.png';
import Solution10Src from '@/public/assests/10.png';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { PiHandTap } from 'react-icons/pi';
import styles from './slidercards.module.css';

const SliderCards = ({ onGameOver }) => {
    const QA = [
        {
            question: "Eve has 9 apples and she was given 7 more. How many apples does she have now?",
            revealAns: "Eve has 16 apples now (9 + 7 = 16)",
            revealSrc: Solution1Src,
        },
        {
            question: "Lucas had 14 candies. He ate 5. How many candies does he have left?",
            revealAns: "Lucas has 9 candies left (14 - 5 = 9)",
            revealSrc: Solution2Src,
        },
        {
            question: "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
            revealAns: "There are 5 cats left in the room (11 - 6 = 5)",
            revealSrc: Solution3Src,
        },
        {
            question: "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now?",
            revealAns: "Tom now has 14 pencils (8 + 6 = 14)",
            revealSrc: Solution4Src,
        },
        {
            question: "Maria had 20 cupcakes. She gave 11 cupcakes to her friends. How many cupcakes does Maria have left? ",
            revealAns: "Maria has 9 cupcakes left (20 - 11 = 9)",
            revealSrc: Solution5Src,
        },
        {
            question: "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
            revealAns: "There are 12 goldfish in the aquarium now (7 + 5 = 12)",
            revealSrc: Solution6Src,
        },
        {
            question: "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total?",
            revealAns: "There are 16 oranges in total (10 + 6 = 16)",
            revealSrc: Solution7Src,
        },
        {
            question: "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
            revealAns: "There are 11 apples left in the box (18 - 7 = 11)",
            revealSrc: Solution8Src,
        },
        {
            question: "Rita had 12 balloons, and 7 flew away. How many balloons does Rita have now?",
            revealAns: "Rita has 5 balloons now (12 - 7 = 5)",
            revealSrc: Solution9Src,
        },
        {
            question: "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
            revealAns: "Michael has $20 now (15 + 5 = 20)",
            revealSrc: Solution10Src,
        }
    ];

    const [currentCard, setCurrentCard] = useState(0);
    const [revealAnswer, setRevealAnswer] = useState(false);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setRevealAnswer(false);
        setDirection(1);
        if (currentCard === QA.length - 1) {
            onGameOver();
        } else {
            setCurrentCard((prev) => (prev + 1) % QA.length);
        }
    };

    const handlePrev = () => {
        setRevealAnswer(false);
        setDirection(-1);
        setCurrentCard((prev) => (prev - 1 + QA.length) % QA.length);
    };

    const handleReveal = () => {
        setRevealAnswer(!revealAnswer);
    };

    const variants = {
        enter: (direction) => ({
            x: direction === 1 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction === 1 ? -300 : 300,
            opacity: 0,
        }),
    };

    const flipVariants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 },
    };


    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <div className={styles.counterText}>
                    {currentCard + 1} / {QA.length}
                </div>
                <div className={styles.indicators}>
                    {QA.map((_, index) => (
                        <motion.div
                            key={index}
                            className={styles.indicator}
                            animate={{scale: index === currentCard ? 2 : 1}}
                            transition={{duration: 0.3}}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.cardArea}>
                <button
                    className={styles.navButton}
                    onClick={handlePrev}
                    disabled={currentCard === 0}
                >
                    <MdOutlineArrowBackIos
                        size={25}
                        className={styles.arrow}
                    />
                </button>
                <div className={styles.mainCard}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentCard}
                            className={styles.motionDiv}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{duration: 0.5}}
                        >
                            <motion.div
                                className={styles.cardInner}
                                onClick={handleReveal}
                                initial="front"
                                animate={revealAnswer ? "back" : "front"}
                                variants={flipVariants}
                                transition={{duration: 0.6}}
                                whileHover={{}}
                                style={{perspective: 1000}}
                            >
                                <motion.div className={styles.cardFace}
                                            style={{position: 'absolute', backfaceVisibility: 'hidden'}}>
                                    <div className={styles.questionCard}>
                                        <p className={styles.questionText}>{QA[currentCard].question}</p>
                                        <div className={styles.tapToReveal}>
                                            <PiHandTap size={25}/>
                                            Tap to reveal the answer
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div className={styles.cardFace} style={{
                                    position: 'absolute',
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)'
                                }}>
                                    <div className={styles.answerCard}>
                                        <Image
                                            src={QA[currentCard].revealSrc}
                                            alt="Solution"
                                            className={styles.solutionImage}
                                        />
                                        <div className={styles.answerText}>
                                            <p>{QA[currentCard].revealAns}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button
                    className={styles.navButton}
                    onClick={handleNext}
                >
                    <MdOutlineArrowForwardIos
                        size={25}
                        className={styles.arrow}
                    />
                </button>
            </div>
            <div className={`${styles.mobileNavButton}`}>

                <button
                    className={`${styles.mobNav}`}

                    onClick={handlePrev}
                    disabled={currentCard === 0}
                >
                    <MdOutlineArrowBackIos
                        size={25}
                        className={styles.arrow}
                    />
                </button>

                <button
                    className={`${styles.mobNav}`}
                    onClick={handleNext}
                >
                    <MdOutlineArrowForwardIos
                        size={25}
                        className={styles.arrow}
                    />
                </button>

            </div>
        </div>
    );
};

export default SliderCards;
