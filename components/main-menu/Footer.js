import Image from 'next/image';
import instagram from './../../public/images//icons/instagram.png';
import whatsapp from './../../public/images//icons/whatsapp.png';
import gmail from './../../public/images//icons/gmail.png';
import twitter from './../../public/images//icons/twitter.png';

const Footer = () => {
    return ( 
        <>
     
<div className='flex flex-row justify-center mx-auto mb-5 mt-[10rem] md:mt-[5rem] w-3/12 md:w-full '>

<div className=' w-[4rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
  <Image src={instagram} layout="responsive" objectFit='cover' />
 </div>
 <div className=' w-[4rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
  <Image src={whatsapp} layout="responsive" objectFit='cover' />
 </div>
 <div className='w-[4rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
  <Image src={gmail} layout="responsive" objectFit='cover' />
 </div>
 <div className='w-[4rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
  <Image src={twitter} layout="responsive" objectFit='cover' />
 </div>


</div>

<p className='text-[#a1a1a1] text-center mt-5 my-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace]'>&copy;2022 Takhte SnowBoards IR,inc.All rights reserved </p>

        </>
    )
}

export default Footer;