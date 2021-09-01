import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon
} from "@heroicons/react/solid";

export default function HeaderHome() {
    return (
        <header className="fixed top-0 z-50 grid grid-cols-3 p-4 bg-white shadow-md md:px-10">
            {/* Left */}
            <div className="relative flex items-center my-auto cursor-pointer h-9">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div className="flex items-center justify-between rounded-full md:border-2 md:shadow-sm">
                <input className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" type="text" placeholder="commencer votre recherche"/>
                <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex"/>
            </div>

            {/* Right */}
            <div className="flex items-center justify-end space-x-4 text-gray-700">
                <p className="hidden text-sm md:inline-flex">Devenez hôte</p>
                <GlobeAltIcon className="h-5 cursor-pointer"/>
                <div className="flex items-center p-1 space-x-2 bg-white border-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-5 " />
                    <UserCircleIcon className="h-9" />
                </div>
            </div>
        </header>
    )
}