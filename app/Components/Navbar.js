'use client';
import React, { useEffect, useRef, useState } from 'react';
import logo from '@/public/assests/logo.png';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import Image from 'next/image';

const Navbar = () => {
    const [playing ,setPlaying] = useState(true);
    const toggle=()=>{
        setPlaying(!playing);

    }
    return (
        <nav className="flex justify-between p-3 z-10">
            <div className="flex justify-start items-center gap-2">
                <Image src={logo} alt="logo" className="w-10 h-10 bg-white p-1 rounded-full" />
                <div>
                    <h2 className="text-sm text-white font-bold">Cloudifyapp Pvt. Ltd.</h2>
                    <h5 className="text-xs text-white">By John Doe</h5>
                </div>
            </div>
            <div onClick={toggle}>
                {playing ? (
                    <VolumeOffRoundedIcon className="text-white text-3xl cursor-pointer"  />
                ) : (
                    <VolumeUpRoundedIcon className="text-white text-3xl cursor-pointer" />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
