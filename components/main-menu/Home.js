import { useState , useEffect } from 'react';
import Image from 'next/image';
import main2 from '../../public/images/main2.jpg';

import takhtelogo from '../../public/images/takhtelogo.png';
import logo4113 from './../../public/images/4113.png';
import ScrollIntoView from 'react-scroll-into-view';
import Fade from 'react-reveal/Fade';
import light from '../../public/images/icons/light.png';
import dark from '../../public/images/icons/dark.png';
import Document from 'next/document';
import { useThemeContext } from '../../context/ThemeContext';

const Home  = (  ) => {

  const { theme , themeHandler } = useThemeContext();

    const [ clientWindowHeight, setClientWindowHeight ] = useState("");
    // const [ theme , SetTheme ] = useState('light');

    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    });
 
    useEffect(() => {
         theme === 'light' ? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = '#292929';
    } , [theme]);


    return (
    <>
   <div className='MAIN-CONTAINER flex flex-col font-[Vibur] overflow-hidden'>

<div className='MAIN flex flex-col '>

  <Image priority src={main2} layout="fill" objectFit='cover' />

<Fade top>
 <div className={`fixed ${clientWindowHeight > 40 && theme === 'light' ? 'glassEffect boxShadow text-[#3a3a3a]' : clientWindowHeight > 40 && theme === 'dark' ? 'text-[#4b4b4b] bg-[#2a2a2a] boxShadowDark' : 'text-[#2e2e2e]'} w-full transition-all duration-300 flex flex-row md:justify-around md:text-[1.5rem]  hover:font-[600] text-[1.75rem] z-20`}>
  <div className='w-[5%] md:w-[15%] p-2 mt-1 ml-5 md:ml-1'>
   <Image src={logo4113} layout="responsive" objectFit='scale-down' />
    </div>
  
    <div className='flex flex-row w-4/12 md:w-[55%] md:justify-between ml-5 py-2 text-center'>
       <p className={`w-3/12 pt-4 md:pt-2 hover:scale-125 transition-all duration-200 cursor-pointer font-[700]  ${ theme === 'light' ? 'text-[#343434]' : clientWindowHeight < 40 ? 'text-[#343434]' :'text-[#b9b9b9]'} `}>TAKHTEH</p>
       { clientWindowHeight > 40 && <Fade ><div onClick={() =>{  theme === 'light' ? themeHandler('dark')  : themeHandler('light') ; theme === 'light' ? themeHandler('dark')  : themeHandler('light')  }} className={` w-[10%] md:w-[15%] pt-2 ml-[2rem]  cursor-pointer font-[700] hover:text-[#000000]`}><Image src={ theme === 'light' ? dark : light }/></div></Fade>}    
   </div>
  </div>
</Fade>

<Fade right>
<div className='flex flex-row z-10 ml-[5rem] md:glassEffect md:ml-0 md:justify-center md:mt-5'>
<div className='w-3/12 md:w-10/12 md:bg-[#aebbaf71] rounded-[20px] p-[2rem] mt-[5rem] mr-[5rem] md:mr-0'>
  <Image src={takhtelogo} layout="responsive" objectFit='cover' />
  <p className='font-[Vibur] tracking-[2px] font-[600] text-[2rem] text-[#505050] md:text-[white] text-center'>TAKHTEH SNOWBOARDS</p>
  <ScrollIntoView selector="#products" smooth={true}><button className='w-full boxShadow md:shadow-2xl mt-3 rounded-[10px] hover:scale-110 p-3 transition-all duration-300 text-[1.5rem] text-white bg-gradient-to-r from-[#2e4b2ee6] to-[#597a59e6] hover:bg-[#0f3b20]' >PRODUCTS</button></ScrollIntoView>
</div>
</div>
</Fade>

</div>
</div>

</>
    )
}

export default Home;