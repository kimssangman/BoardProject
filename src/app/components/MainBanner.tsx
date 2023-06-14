import Image from 'next/image'
import React from 'react'

export default function MainBanner() {
    return (
        <header className="relative">
            <div className="absolute inset-0 h-[330px]">
                <img
                    className="w-full h-full object-cover "
                    src="/images/meeting.jpg"
                    alt="Background Image"
                />
            </div>
            <div className="relative bg-opacity-75 bg-gray-300 py-8 h-[330px]">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Your Header Title</h1>
                    <p className="text-lg mt-4">Your Header Subtitle</p>
                </div>
            </div>
        </header>
    );

}
