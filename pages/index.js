import Head from 'next/head'
import Hero from '../components/Home/Hero'
import SectionOne from '../components/Home/sectionOne'
import axios from 'axios'
import SectionTwo from '../components/Home/SectionTwo'
import BannerCard from '../components/Home/BannerCard'

export default function Home({dataCities, dataFeatures}) {

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div>
      <Head>
        <title>Rb'NB App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"> */}
      
      <Hero />
      <main className="md:px-20">
        <SectionOne data={dataCities}/>
        <SectionTwo data= {dataFeatures}/>
        <BannerCard 
        image="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
        title="Je deviens hôte"
        description="Gagnez un revenu complémentaire et saisissez de nouvelles opportunités en louant votre logement."
        buttonText="En savoir plus"
        />
      </main>

    </div>
  )
}

export const getStaticProps = async () => {
  const {data: dataCities } = await axios.get('https://links.papareact.com/pyp');
  const {data: dataFeatures} = await axios.get('https://links.papareact.com/zp1');
                            
   return {
    props: {
      dataCities,
      dataFeatures
    }
  } 
} 
