import React from 'react'
import Image from 'next/image'

export default function SmallCard({item}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
            <div className="relative w-16 h-16">
                <Image 
                src={item.img}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                />
            </div>
            <div>
                <h3 className="font-semibold">{item.location}</h3>
                <h4 className="text-gray-500">{item.distance}</h4>
            </div>
        </div>
    )
}
