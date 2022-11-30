import { useState , useEffect } from 'react';
import Image from 'next/image';
import main from '../../public/images/main.jpg';
import takhtelogo from '../../public/images/takhtelogo.png';
import logo4113 from './../../public/images/4113.png';
import ScrollIntoView from 'react-scroll-into-view';
import Fade from 'react-reveal/Fade';

const Home  = ( ) => {

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
      console.log(clientWindowHeight)
    };
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    });


    return (
    <>
   <div className='MAIN-CONTAINER flex flex-col font-[monospace] overflow-hidden'>

<div className='MAIN flex flex-col '>

  <Image src={main} layout="fill" objectFit='cover' />

<Fade top>
 <div className={`fixed ${clientWindowHeight > 40 ? 'glassEffect boxShadow text-[#3a3a3a]' : 'text-[#191919]'} w-full transition-all duration-250 flex flex-row justify-between md:justify-around md:text-[1.5rem]  hover:font-[600] text-[1.75rem] md:bg-gradient-to-r from-[#808080c2] to-[#ffffffa3] z-20`}>
  <div className='w-[5%] p-2 mt-1 ml-5 md:hidden'>
   <Image src={logo4113} layout="responsive" objectFit='scale-down' />
    </div>
  
    <div className='flex flex-row w-4/12 md:w-full  py-4 justify-around text-center'>
    <ScrollIntoView selector="#products" smooth={true}> <p className={`w-3/12 md:w-3/12 hover:scale-110 transition-all duration-200 cursor-pointer font-[700]  hover:text-[#000000]`}>Products</p> </ScrollIntoView>
    <ScrollIntoView selector="#team" smooth={true}> <p className={`w-3/12 md:w-3/12 hover:scale-110 transition-all duration-200 cursor-pointer font-[700]  hover:text-[#000000]`}>Team</p> </ScrollIntoView>
    <ScrollIntoView selector="#shop" smooth={true}> <p className={`w-3/12 md:w-3/12 hover:scale-110 transition-all duration-200 cursor-pointer font-[700]  hover:text-[#000000]`}>Shop</p> </ScrollIntoView>
    </div>
  </div>
</Fade>

<Fade right>
<div className='flex flex-row justify-end z-10 '>
<div className='w-3/12 md:w-10/12 md:mx-auto p-[2rem] mt-[5rem] mr-[5rem]'>
  <Image src={takhtelogo} layout="responsive" objectFit='cover' />
  <p className='font-[Vibur] tracking-[2px] font-[600] text-[3rem] text-[#414141] text-center'>Takhte SnowBoards</p>
  <ScrollIntoView selector="#products" smooth={true}><button className='w-full shadow-2xl mt-3 rounded-[10px] hover:scale-110 p-3 transition-all duration-300 text-[1.5rem] text-white bg-gradient-to-r from-[#4d80e5f3] to-[#0e489ee6] hover:bg-[#3333d1]' >Products</button> </ScrollIntoView>
</div>
</div>
</Fade>

</div>
</div>

</>
    )
}

export default Home;