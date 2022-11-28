import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import takhtelogo from '../../public/images/takhtelogo.png';
import jacket1 from '../../public/images/jacket1.jpeg';
import main from '../../public/images/main.jpg';
import main2 from '../../public/images/main2.jpg';
import { useState , useEffect } from 'react';
import logo4113 from './../../public/images/4113.png'
import graffitiBoard from '../../public/images/Borads/graffiti.png';
import gorbe1 from '../../public/images/Borads/gorbe-1.png';
import gorbe2 from '../../public/images/Borads/gorbe-2.png';
import gorbe3 from '../../public/images/Borads/gorbe-3.png';
import gorbe4 from '../../public/images/Borads/gorbe-4.png';


import green1 from '../../public/images/fixes/green1.webp';
import green2 from '../../public/images/fixes/green2.webp';
import green3 from '../../public/images/fixes/green3.webp';
import green4 from '../../public/images/fixes/green4.webp';


import blue1 from '../../public/images/fixes/blue1.webp';
import blue2 from '../../public/images/fixes/blue2.webp';
import blue3 from '../../public/images/fixes/blue3.webp';
import blue4 from '../../public/images/fixes/blue4.webp';

const MainSection = () => {


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


{/*          first section       */}
{/* ============================ */}
<div className='MAIN flex flex-col '>

  <Image src={main} layout="fill" objectFit='cover' />

{/*          header      */}
{/* ============================ */}
<div className={`fixed ${clientWindowHeight > 40 ? 'glassEffect boxShadow text-[#3a3a3a]' : 'text-[#191919]'} w-full   transition-all duration-250 flex flex-row justify-between md:justify-around md:text-[1.5rem]  hover:font-[600] tracking-[1px] text-[2rem] md:bg-gradient-to-r from-[#808080c2] to-[#ffffffa3] z-20`}>
  <div className='w-[5%] p-3 ml-5 md:hidden'>
  <Image src={logo4113} layout="responsive" objectFit='scale-down' />
  </div>
  
    <div className='flex flex-row w-4/12 md:w-full md:py-5 py-5 justify-around text-center'>
        <p className={`w-3/12 md:w-3/12 hover:scale-110 transition-all duration-200 cursor-pointer font-[700]  hover:text-[#000000]`}>Products</p> 
        <p className={`w-3/12 md:w-3/12 hover:scale-110 transition-all duration-200 cursor-pointer font-[700]  hover:text-[#000000]`}>Team</p>
        <p className={`w-3/12 md:w-3/12 hover:scale-110 transition-all duration-200 cursor-pointer font-[700]  hover:text-[#000000]`}>Shop</p>
    </div>
</div>
{/*          header      */}
{/* ============================ */}

<div className='flex flex-row justify-end z-10 '>
<div className='w-3/12 md:w-10/12 md:mr-5 p-[2rem] mt-[5rem] mr-[5rem]'>
  <Image src={takhtelogo} layout="responsive" objectFit='cover' />
  <p className='font-[Vibur] tracking-[2px] font-[600] text-[3rem] text-[#414141] text-center'>Takhte SnowBoards</p>
  <button className='w-full shadow-2xl mt-3 rounded-[10px] hover:scale-110 p-3 transition-all duration-300 text-[1.5rem] text-white bg-[#1b619e]' >Products</button>
</div>
</div>


</div>
</div>
{/*          first section      */}
{/* ============================ */}


{/* ============================ */}
{/*          Product Section      */}

<div className='w-[15%] shadow-2xl rounded-[15px] p-5 mx-auto my-[10rem] md:my-[15rem] md:w-[50%]'>
  <Image src={logo4113} layout="responsive" objectFit='contain' />
  <p className='text-center text-[1.5rem]'>4113 Takhte SnowBoards</p>
</div>



<div className='w-full flex flex-wrap p-[2rem]'>

<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={graffitiBoard} layout="responsive" objectFit='contain' />
</div>

<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe1} layout="responsive" objectFit='contain' />
</div>

<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe2} layout="responsive" objectFit='contain' />
</div>

<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe3} layout="responsive" objectFit='contain' />
</div>

<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe4} layout="responsive" objectFit='contain' />
</div>

<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe3} layout="responsive" objectFit='contain' />
</div>


{/*         fixes         */}
{/* ===================== */}
<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={green1} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={green2} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={green3} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={green4} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={blue1} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={blue2} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={blue3} layout="responsive" objectFit='contain' />
</div>

<div className='w-3/12 md:w-6/12 shadow-2xl mt-5'>
<Image src={blue4} layout="responsive" objectFit='contain' />
</div>


</div>






{/*          Product Section      */}
{/* ============================ */}





{/* ============================ */}
{/*          Team Section      */}





{/* <div className='mt-[5rem] p-5 shadow-2xl'>
 <Image src={main2} layout="responsive" objectFit='scale-down' />
</div> */}


{/*          Team Section      */}
{/* ============================ */}


































































   
  
    </>
 )
}

export default MainSection;