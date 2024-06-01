'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from "@/app/Components/PageWrapper";
import styles from './slidercards.module.css';
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
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md";
import {PiHandTap} from "react-icons/pi";

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
            question: "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now??",
            revealAns: "There are 12 goldfish in the aquarium now (7+5=12)",
            revealSrc: Solution6Src,
        },
        {
            question: "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total?",
            revealAns: "There are 16 oranges in total (10 + 6 = 16)",
            revealSrc: Solution7Src,
        },
        {
            question: "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
            revealAns: "There are 11 apples left in the box (18-7=11)",
            revealSrc: Solution8Src,
        },
        {
            question: "Rita had 12 balloons, and 7 flew away. How many balloons does Rita have now?",
            revealAns: "Rita has 5 balloons now (12-7=5)",
            revealSrc: Solution9Src,
        },
        {
            question: "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
            revealAns: "Michael has $20 now (15+5=20)",
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
            x: direction === 1 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction === 1 ? -100 : 100,
            opacity: 0,
        }),
    };
    const [isHovered, setIsHovered] = useState(false);

    return (

            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-row items-center mb-4 justify-center gap-5">
                    <div className="text-white">
                        {currentCard + 1} / {QA.length}
                    </div>
                    <div className="flex justify-center ">
                        {QA.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full mx-1 bg-gray-300`}
                                animate={{scale: index === currentCard ? 2 : 1}}
                                transition={{duration: 0.3}}
                            />
                        ))}
                    </div>

                </div>
                <div className={`flex flex-col md:flex-row w-full px-5 md:px-0 items-center justify-evenly h-[450px] ${styles.cardArea} gap-10`}>
                <div className={` h-10 hidden md:block`}>
                        <button
                            className="h-10"
                            onClick={handlePrev}
                            disabled={currentCard === 0}
                        >
                            <MdOutlineArrowBackIos  style={{ background: isHovered ? "#FDF415" : "#5D524D" }} size={25} className={`h-12 w-12 p-3 rounded-full text-white transition delay-75 active:scale-90 hover:text-black`} onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}  />
                        </button>
                    </div>
                    <div className={`relative w-full md:w-3/6 flex flex-col items-center  h-[450px] ${styles.mainCard} `}>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentCard}
                                className=" absolute w-full "
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{duration: 0.5}}
                            >
                                <div className={`bg-white h-[450px] w-full rounded-3xl cursor-pointer ${styles.animDiv}`} onClick={handleReveal}>
                                    <motion.div
                                        initial={{opacity: 1}}
                                        animate={{opacity: revealAnswer ? 0 : 1}}
                                        transition={{duration: 0.5}}
                                    >
                                        {!revealAnswer && (
                                            <div className={`flex flex-col items-center justify-center h-[450px] relative ${styles.queDiv}`}>
                                                <p className={`text-[35px] ${styles.que} md:text-[40px] lg:text-[45px] text-center w-[85%] font-serif`}>{QA[currentCard].question}</p>
                                                <div
                                                    className="absolute bottom-10 flex justify-center items-center gap-4  text-sm text-slate-400 "

                                                ><PiHandTap size={25} />
                                                    Tap to reveal the answer
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                    {revealAnswer && (
                                        <motion.div
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 0.5}}
                                            className="p-2"
                                        >

                                            <Image src={QA[currentCard].revealSrc} alt="Solution" className={`w-full h-[350px] rounded-t-3xl ${styles.revealImage}`}/>
                                            <div className={`flex flex-col items-center justify-center h-[90px]`}>
                                            <p className={`text-[26px] text-center font-serif ${styles.ans}`}>{QA[currentCard].revealAns}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={`h-10 hidden md:block`}>
                        <button

                            onClick={handleNext}
                            >
                            <MdOutlineArrowForwardIos style={{background: "#FDF415"}}  size={25} className={`h-12 w-12 p-3 rounded-full transition delay-75 active:scale-90`}/>
                        </button>
                    </div>

                </div>
                <div className={`flex justify-between w-full px-8 mt-5 md:hidden ${styles.bottomBtn}`}>
                    <div className={` h-10`}>
                        <button
                            className="h-10"
                            onClick={handlePrev}
                            disabled={currentCard === 0}
                        >
                            <MdOutlineArrowBackIos style={{background: isHovered ? "#FDF415" : "#5D524D"}} size={25}
                                                   className={`h-12 w-12 p-3 rounded-full text-white transition delay-75 active:scale-90 hover:text-black`}
                                                   onMouseEnter={() => setIsHovered(true)}
                                                   onMouseLeave={() => setIsHovered(false)}/>
                        </button>
                    </div>
                    <div className={`h-10`}>
                        <button

                            onClick={handleNext}
                        >
                            <MdOutlineArrowForwardIos style={{background: "#FDF415"}} size={25}
                                                      className={`h-12 w-12 p-3 rounded-full transition delay-75 active:scale-90`}/>
                        </button>
                    </div>

                </div>

            </div>

    );
};

export default SliderCards;
