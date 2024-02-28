"use client";
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Slide = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["/lp1.jpg", "/lp2.jpg", "/lp3.jpg"]; // Add your image paths here

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 10000);

        return () => clearInterval(interval);
    }, [currentImageIndex]); // Reset the interval whenever the currentImageIndex changes

    return (
        <div >
            <div className="flex items-center justify-between relative">
                
                <div className="flex items-center justify-center w-full relative">
                    <img
                        alt="Woman sitting"
                        className="inset-0 w-full h-[390px] object-cover  shadow-lg"
                        src={images[currentImageIndex]}
                    />

                    
<div className="absolute inset-0 flex items-center pl-7">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                            <h2 className="text-3xl font-bold text-[#333]">Learning that gets you</h2>
                            <p className="mt-4 text-lg text-[#333] text-center">
                                Skills for your present (and your future). Get started with us.
                            </p>
                        </div>
                    </div>
                    <ChevronRightIcon className="text-black cursor-pointer absolute right-2 bg-white rounded-full " onClick={nextImage} />
                    <ChevronLeftIcon className="text-black cursor-pointer absolute left-0  bg-white rounded-full" onClick={prevImage} />
                </div>
            </div>
        </div>
    );
};

export default Slide;
