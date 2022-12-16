import Image from "next/image";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
import jacket from '../../public/images/jacket.jpg';
import logo4113 from './../../public/images/4113.png';
import graffitiBoard from '../../public/images/Borads/graffiti.png';
import brucelee from '../../public/images/Borads/brucelee.png';
import chaplin from '../../public/images/Borads/chaplin.png';
import wood from '../../public/images/Borads/wood.png';
import zahak from '../../public/images/Borads/zahhak.png';
import rostam from '../../public/images/Borads/rostam.png';
import graffiti1 from '../../public/images/Borads/graffiti1.png';
import gorbe1 from '../../public/images/Borads/gorbe-1.png';
import gorbe2 from '../../public/images/Borads/gorbe-2.png';
import gorbe3 from '../../public/images/Borads/gorbe-3.png';


import black1 from '../../public/images/Fixes/black1.webp';
import black2 from '../../public/images/Fixes/black2.webp';
import black3 from '../../public/images/Fixes/black3.webp';
import black4 from '../../public/images/Fixes/black4.webp';

import blue1 from '../../public/images/Fixes/blue1.webp';
import blue2 from '../../public/images/Fixes/blue2.webp';
import blue3 from '../../public/images/Fixes/blue3.webp';
import blue4 from '../../public/images/Fixes/blue4.webp';

import orange1 from '../../public/images/Fixes/orange1.webp';
import orange2 from '../../public/images/Fixes/orange2.webp';
import orange3 from '../../public/images/Fixes/orange3.webp';
import orange4 from '../../public/images/Fixes/orange4.webp';

import white1 from '../../public/images/Fixes/white1.webp';
import white2 from '../../public/images/Fixes/white2.webp';
import white3 from '../../public/images/Fixes/white3.webp';
import white4 from '../../public/images/Fixes/white4.webp';

import green1 from '../../public/images/Fixes/green1.webp';
import green2 from '../../public/images/Fixes/green2.webp';
import green3 from '../../public/images/Fixes/green3.webp';
import green4 from '../../public/images/Fixes/green4.webp';


const Products = ( props ) => {


    return (
    <>
       <Flip left>
<div id='products'  className={`w-[15%] shadow-2xl ${props.theme === 'light' ? 'shadow-2xl' : 'boxShadowDark text-[#c5c5c5]'}  rounded-[15px] p-5 mx-auto my-[10rem] mt-[25rem] md:w-[50%]`}>
  <Image src={logo4113} layout="responsive" objectFit='contain' />
  <p className='text-center text-[1.5rem]'>4113 Takhte SnowBoards</p>
</div>
       </Flip>

<div className="flex flex-row flex-wrap w-full justify-around font-[Vibur]">

<div className={`w-3/12 mt-[5rem]  m-1 md:w-10/12 bg-gradient-to-r from-[#701ac1] to-[#33b8af] ${ props.theme === 'light' ? 'boxShadow' : 'boxShadowDark'} rounded-[10px]`}>
       <p className={`text-[2rem] relative py-3 ${ props.theme === 'light' ? 'shadow-2xl' : 'boxShadowDark' }  z-20 text-[#ffffff] text-center`}>BOARDS</p>
       <div className=" z-10"><Image className="rounded-b-[10px]" layout="responsive" objectFit="cover" src={graffiti1}/></div>
</div>

<div className={`w-3/12 mt-[5rem]  m-1 md:w-10/12 bg-gradient-to-r from-[#c11a55] to-[#c15a1a] ${ props.theme === 'light' ? 'boxShadow' : 'boxShadowDark'} rounded-[10px]`}>
       <p className={`text-[2rem] relative py-3 ${ props.theme === 'light' ? 'shadow-2xl' : 'boxShadowDark' }  z-20 text-[#ffffff] text-center`}>BOOTS</p>
       <div className=" z-10"><Image className="rounded-b-[10px]" layout="responsive" objectFit="cover" src={orange2}/></div>
</div>

<div className={`w-3/12 mt-[5rem]  m-1 md:w-10/12 bg-gradient-to-r from-[#2e4b2ee6] to-[#597a59e6]  ${ props.theme === 'light' ? 'boxShadow' : 'boxShadowDark'} rounded-[10px]`}>
       <p className={`text-[2rem] relative py-3 ${ props.theme === 'light' ? 'shadow-2xl' : 'boxShadowDark' }  z-20 text-[#ffffff] text-center`}>JACKETS</p>
       <div className=" z-10"><Image className="rounded-b-[10px]" layout="responsive" objectFit="cover" src={jacket}/></div>
</div>



</div>

{/*         fixes         */}
{/* ===================== */}

{/* 
<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={green1} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={green2} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={green3} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={green4} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={blue1} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={blue2} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={blue3} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={blue4} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={orange1} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={orange2} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={orange3} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={orange4} layout="responsive" objectFit='contain' />
</div>
</Flip>


<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={white1} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={white2} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={white3} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={white4} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={black1} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={black2} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={black3} layout="responsive" objectFit='contain' />
</div>
</Flip>

<Flip left>
<div className='w-3/12 p-[2rem] md:p-[1rem] md:w-6/12 shadow-2xl mt-5'>
<Image className='rounded-[15px]' src={black4} layout="responsive" objectFit='contain' />
</div>
</Flip> */}





</>
)

}

export default Products;