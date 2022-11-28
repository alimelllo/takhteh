import MainSection from "../components/main-menu/MainSection" 
import Head from 'next/head';

export default function Home() {
  return (
   
    <div className='app'>
       <Head>
        <title>Takhteh</title>
        <meta property="og:title" content="Takhteh" key="title" />
      </Head>
    
    <MainSection />

    </div>
  )
}
