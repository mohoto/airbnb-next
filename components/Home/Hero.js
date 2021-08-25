import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
            src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
            layout="fill"
            objectFit="cover"
            />
            <div className="absolute flex items-center justify-center w-full h-full">
                <div className="flex flex-col items-center">
                    <p>Vous ne savez pas où partir ? Parfait !</p>
                    <button type="button" className="px-10 py-4 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90">Je suis flexible</button>
                </div>
            </div> 
        </div>
    )
}
