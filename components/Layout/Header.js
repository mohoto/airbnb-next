import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon
} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import * as rdrLocales from 'react-date-range/dist/locale';
import { useDispatch } from 'react-redux';
import { selectSearch, setSearch } from '../../lib/redux/reducers/searchSlice';
import { dateFormatted } from '../../lib/helpers';
import {useSelector} from 'react-redux'


export default function Header() {

    const router = useRouter();
    const dispatch = useDispatch();
    //const {location, startDate, endDate, numberGuest} = useSelector(selectSearch);

    const [inputSearch, setInputSearch] = useState('');
    const [guest, setGuest] = useState(1)
    const handleChange = e => {
        setInputSearch(e.target.value);
    }
    const handleChangeGuest = e => {
        setGuest(e.target.value);
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const cancelSearch = () => {
        setInputSearch('');
    }

    const submitSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: inputSearch,
                startDate: startDate.toISOString(),
                enddate: endDate.toISOString(),
                numberGuest: guest
            }
        });
        dispatch(setSearch({
            location: inputSearch,
            startDate: dateFormatted(startDate),
            endDate: dateFormatted(endDate),
            numberGuest: guest
        }))
        setInputSearch('');
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-4 bg-white shadow-md md:px-10">
            {/* Left */}
            <div className="relative flex items-center my-auto cursor-pointer w-36 h-11">
                <Link href="/" passHref>
                    <Image
                    src="/airbnb.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    width="100px"
                    /> 
                </Link>
            </div>

            {/* Middle */}
            <div className="flex items-center justify-between rounded-full md:border-2 md:shadow-sm">
                <input 
                className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" 
                type="text" 
                placeholder="commencer votre recherche"
                name="inputSearch"
                value={inputSearch}
                onChange={handleChange}
                />
                <SearchIcon className="hidden h-8 p-2 text-white rounded-full cursor-pointer bg-radical-red md:mx-2 md:inline-flex"/>
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
            {inputSearch && (
                <div className="absolute z-50 flex flex-col pb-4 mx-auto transform -translate-x-1/2 bg-white shadow-md top-20 left-1/2">
                    <DateRange
                    ranges={[selectionRange]}
                    locale={rdrLocales.fr}
                    minDate={new Date()}
                    rangeColors={['#FF385C']}
                    onChange={handleSelect}
                    />
                    <div className="flex items-center px-4 mb-4">
                        <h3 className="flex-grow font-semibold">Nombre de voyageurs</h3>
                        <UserIcon className="h-6" />
                        <input type="number" 
                        className="w-12 pl-2 text-lg outline-none"
                        value={guest} 
                        onChange={handleChangeGuest}
                        />
                    </div>
                    <div className="flex flex-col px-8 space-y-2">
                        <button className="flex-grow py-2 text-gray-500 border-2 border-gray-400 rounded-3xl" onClick={cancelSearch}>
                        Annuler
                        </button>
                        <button className="flex-grow py-2 text-white border-2 bg-radical-red rounded-3xl hover:g-radical-red-100 border-radical-red" onClick={submitSearch}>
                        Rechercher
                        </button>
                    </div>
                </div>

            )}
        </header>
    )
}
