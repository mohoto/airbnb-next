import React from 'react'
import SmallCard from './SmallCard'

export default function SectionOne({data}) {
    return (
        <section className="py-10">
            <h2 className="text-3xl font-semibold">Explorez les environs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map(item => (
                    <SmallCard key={item.img} item={item}/>
                ))}
            </div>
        </section>
    )
}
