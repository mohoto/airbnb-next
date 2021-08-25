import React from 'react'
import Image from 'next/image'

export default function BannerCard({image, title, description, buttonText}) {
    return (
        <section className="relative py-2 mt-20 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image className="rounded-2xl"
                src={image}
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className="absolute top-20 left-12 w-[40%] px-6">
                <h3 className="mb-4 text-5xl font-light text-white">{title}</h3>
                <p className="mb-8 text-lg text-white">{description}</p>
                <button className="px-5 py-3 font-semibold bg-white rounded-md">En savoir plus</button>
            </div>
        </section>
    )
}
