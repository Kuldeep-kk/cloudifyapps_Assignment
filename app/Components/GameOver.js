import React from 'react';
import PageWrapper from "@/app/Components/PageWrapper";
import DoneIcon from '@mui/icons-material/Done';
import {RxReload} from "react-icons/rx";

const GameOver = ({ onPlayAgain }) => {
    return (
        <PageWrapper>
        <div className="flex flex-col items-center justify-center h-full gap-6">
            <DoneIcon className={`text-9xl p-5 border-4 rounded-full text-white`}/>
            <h2 className={`text-white font-semibold text-xl`}>Hope you learned something new!</h2>
            <div
                className="px-4 py-2 rounded-md flex justify-center items-center gap-4 transition delay-75 font-semibold cursor-pointer"
                onClick={onPlayAgain}
                style={{background:"#FDF415"}}
            >
                <RxReload size={18}/>Play Again
            </div>
        </div>
</PageWrapper>
    );
};

export default GameOver;
