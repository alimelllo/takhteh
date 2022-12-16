import Image from 'next/image';
import takhtelogo from '../../public/images/takhtelogo.png';
import shop from '../../public/images/shop.jpg';
import logo4113 from './../../public/images/4113.png';
import union from './../../public/images/icons/union.png';
import phone from './../../public/images//icons/phone.png';
import location from './../../public/images//icons/location.png';
import vans from './../../public/images//icons/vans.png';
import { Fade } from 'react-reveal';
import { useThemeContext } from '../../context/ThemeContext';

const Shop = ( props ) => {

  const { theme } = useThemeContext();
    return (
        <>

  <div id='shop' className='flex flex-row justify-between overflow-hidden mt-[10rem] md:flex-col'>
  <Fade left><p className={`text-center pl-[2rem] md:pl-0 text-[2.5rem] font-[Vibur] font-[600] mt-[2rem] ${ theme === 'light' ? 'text-[#363636]' : 'text-[#c3c3c3]'}  my-[1rem]`}>TAKHTEH SHOP</p></Fade>
<Fade right>
<div className='flex flex-row md:mx-auto my-5 md:mt-5 md:justify-around'>
   
  <div className={` ${ theme === 'light' ? 'bg-[#e9e9e9] shadow-2xl' : 'bg-[#a1a1a1] boxShadowDark'} my-[2rem] w-[4rem] md:w-[3.5rem] mx-5  rounded-[10px] `}>
  <Image src={union} layout="responsive" objectFit='cover' />
</div>
<div className={` ${ theme === 'light' ? 'bg-[#e9e9e9] shadow-2xl' : 'bg-[#a1a1a1] boxShadowDark'} my-[2rem] w-[4rem] md:w-[3.5rem] mx-5 p-1  rounded-[10px] `}>
  <Image src={takhtelogo} layout="responsive" objectFit='cover' />
</div>
<div className={` ${ theme === 'light' ? 'bg-[#e9e9e9] shadow-2xl' : 'bg-[#a1a1a1] boxShadowDark'} my-[2rem] w-[4rem] md:w-[3.5rem] mx-5 p-1  rounded-[10px] `}>
  <Image src={logo4113} layout="responsive" objectFit='cover' />
 </div>
 <div className={` ${ theme === 'light' ? 'bg-[#e9e9e9] shadow-2xl' : 'bg-[#a1a1a1] boxShadowDark'} my-[2rem] w-[4rem] md:w-[3.5rem] mx-5 p-1 rounded-[10px] `}>
  <Image src={vans} layout="responsive" objectFit='cover' />
 </div>
</div>
</Fade>
  </div>



<div className='flex flex-row justify-end mt-[5rem] md:flex-col-reverse overflow-hidden'>

<div className='pl-[2rem] text-[1.5rem] font-[600] text-[#9f9f9f] mt-[5rem] w-8/12 md:w-full '>
  <p> You can visit and buy your favorite accessories in tehran (marzdaran) from shop. </p>
  <div className='flex flex-row my-[1rem] mt-[3rem]'><div className='w-[3rem]'><Image src={phone} layout="responsive" objectFit='cover' /></div><p className='pt-1 pl-5'>+989120902035</p></div>
  <div className='flex flex-row my-[1rem] md:justify-center'><div className='w-[3rem] md:w-[10rem]'><Image src={location} layout="responsive" objectFit='cover' /></div><p className='pt-1 pl-5'>Tehran Marzadarn , alvand street , alvand mall , second floor pelaque 35.</p></div>
</div>

<Fade right>
<div className='w-4/12 md:w-full my-[2rem]'>
  <div className={`w-full rounded-l-[20px] md:rounded-none  ${ theme === 'light' ? 'boxShadow' : 'boxShadowDark'} opacity-[0.8] cursor-pointer hover:opacity-[1] transition-all duration-300`}>
   <Image src={shop} layout="responsive" className='rounded-l-[20px] md:rounded-none' objectFit='cover' />
  </div>
</div>
</Fade>

</div>
        </>
    )
}

export default Shop;