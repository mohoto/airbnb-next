import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HeaderHome from './Header'
import {useRouter} from 'next/router'


export default function Layout({ children }) {

    const {pathname} = useRouter()
  
    return (
        <>
            {/* {pathname !== '/' ?
                <Header /> : null
            } */}
            <Header />
                {children}
            <Footer />
        </>
    )
}
