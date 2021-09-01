import React from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import { selectSearch } from '../lib/redux/reducers/searchSlice';
import axios from 'axios'
import InfoCard from '../components/search/InfoCard';

export default function Search({searchResults}) {
    
    const router = useRouter();
    const {location, startDate, endDate, numberGuest} = useSelector(selectSearch);


    //const dateFormatted = format(new Date(startDate), 'dd MMMM yy');
    //console.log('dateFormatted:', dateFormatted)

    return (
        <main className="grid grid-cols-12 px-3 pt-6 md:px-10">
            <div className=" col-span-full md:col-span-7">
                <section>
                    <p className="text-xs">300+ logemets trouvés du {startDate} au {endDate} pour {numberGuest} { numberGuest > 1 ? 'personnes' : 'personne'}</p>
                    <h1 className="mt-2 mb-6 text-xl font-semibold md:text-3xl">Logement à {location}</h1>
                    <div className="flex justify-between">
                        <button className="hidden lg:inline-flex button">Annulation gratuite</button>
                        <button className="hidden lg:inline-flex button">Type de logement</button>
                        <button className="hidden lg:inline-flex button">Prix</button>
                        <button className="hidden lg:inline-flex button">Réservation instantanée</button>
                        <button className="button">Plus de filtre</button>
                    </div>
                </section>
                <section className="flex flex-col mt-12">
                    {searchResults.map(result => (
                        <InfoCard result={result}/>
                    ))}
                </section>
            </div>
        </main>
    )
}

export const getServerSideProps = async (context) => {
    /* const searchResults = await fetch("https://links.papareact.com/isz").then(
      (res) => res.json()
    ); */
    const {data: searchResults} = await axios.get("https://links.papareact.com/isz");
  
    return {
      props: {
        searchResults,
      },
    };
  }
