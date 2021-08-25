import React from 'react'
import Image from 'next/image'

export default function Mediumcard({item}) {
    return (
        <div className="cursor-pointer">
            <div className="relative w-64 h-64 p-3 m-2 transition duration-150 ease-out rounded-xl hover:scale-105">
                <Image 
                src={item.img}
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
                />
            </div>
            <h3 className="pl-2 mt-2 text-lg font-semibold">{item.title}</h3>
        </div>
    )
}
