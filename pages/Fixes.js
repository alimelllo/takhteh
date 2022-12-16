import Image from "next/image";
import { useThemeContext } from '../context/ThemeContext';
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';

import black1 from '../public/images/Fixes/black1.webp';
import black2 from '../public/images/Fixes/black2.webp';
import black3 from '../public/images/Fixes/black3.webp';
import black4 from '../public/images/Fixes/black4.webp';

import green1 from '../public/images/Fixes/green1.webp';
import green2 from '../public/images/Fixes/green2.webp';
import green3 from '../public/images/Fixes/green3.webp';
import green4 from '../public/images/Fixes/green4.webp';

import orange1 from '../public/images/Fixes/orange1.webp';
import orange2 from '../public/images/Fixes/orange2.webp';
import orange3 from '../public/images/Fixes/orange3.webp';
import orange4 from '../public/images/Fixes/orange4.webp';

import red1 from '../public/images/Fixes/red1.webp';
import red2 from '../public/images/Fixes/red2.webp';
import red3 from '../public/images/Fixes/red3.webp';
import red4 from '../public/images/Fixes/red4.webp';

import blue1 from '../public/images/Fixes/blue1.webp';
import blue2 from '../public/images/Fixes/blue2.webp';
import blue3 from '../public/images/Fixes/blue3.webp';
import blue4 from '../public/images/Fixes/blue4.webp';

import white1 from '../public/images/Fixes/white1.webp';
import white2 from '../public/images/Fixes/white2.webp';
import white3 from '../public/images/Fixes/white3.webp';
import white4 from '../public/images/Fixes/white4.webp';










const Fixes = () => {

    const {theme} = useThemeContext();
    return (
        <>
        <div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} text-center text-[2rem] py-5 text-[gray] font-[Vibur] bg-gradient-to-r from-[#0e0e0e] to-[#202020]  mb-[2rem] flex flex-row justify-between   `}>
       
        <Link href='./'><p className='pl-5 cursor-pointer'>&#8592;</p></Link> 
         <p className='pr-5'>FIXES</p>
         </div>
         <Bounce right cascade>

        <div className="flex flex-row flex-wrap w-full justify-around font-[Vibur] mt-[3rem] overflow-hidden">

<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={green1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={green2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={green3} layout="responsive" objectFit='contain' />
</div>

<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={green4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={blue1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={blue2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={blue3} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={blue4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={orange1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={orange2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={orange3} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={orange4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={red1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={red2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={red3} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={red4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={black1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={black2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={black3} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={black4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={white1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={white2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={white3} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-[20%] md:my-[2rem] md:w-5/12 rounded-[15px] shadow-2xl my-[5rem] m-5 md:m-2`}>
<Image className='rounded-[15px]' src={white4} layout="responsive" objectFit='contain' />
</div>


      </div>
        </Bounce>
        </>
    )
}

export default Fixes;