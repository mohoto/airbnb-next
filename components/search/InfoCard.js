import React from 'react'
import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

export default function InfoCard({result}) {
    return (
        <div className="flex flex-col px-2 transition duration-200 ease-in-out border-b cursor-pointer md:flex-row py-7 hover:opacity-80 hover:shadow-lg first:border-t">
            <div className="relative flex-shrink-0 h-48 mb-4 md:h-52 md:w-80 md:mb-0">
                <Image
                src={result.img}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                />
            </div>
            <div className="flex flex-col flex-grow md:pl-5">
                <div className="flex justify-between">
                    <p className="text-sm font-light">{result.location}</p>
                    <HeartIcon className="h-6 cursor-pointer"/>
                </div>
                <h4 className="text-xl">{result.title}</h4>
                <div className="w-10 pt-2 border-b" />
                <p className="pt-2 text-sm text-gray-500 font-extralight">{result.description}</p>
                <div className="flex items-end justify-between flex-grow">
                    <p className="flex items-center text-sm">
                        <StarIcon className="h-4 text-red-500" />
                        {result.star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold">{result.price}</p>
                        <p className="text-xs text-right font-extralight">{result.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
