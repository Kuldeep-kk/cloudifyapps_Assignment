import React from 'react';
import PageWrapper from "@/app/Components/PageWrapper";
import DoneIcon from '@mui/icons-material/Done';
import { RxReload } from "react-icons/rx";
import styles from './gameover.module.css';

const GameOver = ({ onPlayAgain }) => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                <DoneIcon className={styles.icon} />
                <h2 className={styles.message}>Hope you learned something new!</h2>
                <div
                    className={styles.playAgainButton}
                    onClick={onPlayAgain}
                >
                    <RxReload size={18} />Play Again
                </div>
            </div>
        </PageWrapper>
    );
};

export default GameOver;
