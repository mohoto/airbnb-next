import React from 'react'
import Image from 'next/image'
import Mediumcard from './Mediumcard'

export default function SectionTwo({data}) {
    return (
        <section className="mt-5">
            <h2 className="text-3xl font-semibold">Chez vous, partout</h2>
            <div className="flex justify-between mt-8 overflow-scroll scrollbar-hide">
                {data.map(item => (
                    <Mediumcard key={item.img} item={item}/>
                ))}
            </div>
        </section>
    )
}
