import gray1 from '../public/images/jackets/gray1.jpg';
import gray2 from '../public/images/jackets/gray2.png';
import gray3 from '../public/images/jackets/gray3.png';
import gray4 from '../public/images/jackets/gray4.png';
import gray5 from '../public/images/jackets/gray5.jpg';
import gray6 from '../public/images/jackets/gray6.png';
import gray7 from '../public/images/jackets/gray7.png';
import gray8 from '../public/images/jackets/gray8.png';
import gray9 from '../public/images/jackets/gray9.png';
import gray10 from '../public/images/jackets/gray10.png';
import gray11 from '../public/images/jackets/gray11.png';
import gray12 from '../public/images/jackets/gray12.png';

import brick1 from '../public/images/jackets/brick1.png';
import brick2 from '../public/images/jackets/brick2.png';
import brick3 from '../public/images/jackets/brick3.png';
import brick4 from '../public/images/jackets/brick4.png';
import brick5 from '../public/images/jackets/brick5.png';
import brick6 from '../public/images/jackets/brick6.png';
import brick7 from '../public/images/jackets/brick7.png';




import Image from "next/image";
import { useThemeContext } from '../context/ThemeContext';
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';

const Jackets = () => {

    const {theme} = useThemeContext();
    return (
        <>
        <div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} text-center text-[2rem] py-5 text-[gray] font-[Vibur] bg-gradient-to-r from-[#0e0e0e] to-[#202020]  mb-[2rem] flex flex-row justify-between`}>
       
        <Link href='./'><p className='pl-5 cursor-pointer'>&#8592;</p></Link> 
         <p className='pr-5'>JACKETS</p>
         </div>
         <Bounce right cascade>

        <div className="flex flex-row flex-wrap w-full justify-around font-[Vibur] mt-[3rem] overflow-hidden">

<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12  shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray3} layout="responsive" objectFit='contain' />
</div>

<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray5} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray6} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray7} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray8} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray9} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray10} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray11} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={gray12} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick2} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick3} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick4} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick5} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick6} layout="responsive" objectFit='contain' />
</div>    
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brick7} layout="responsive" objectFit='contain' />
</div> 
      </div>
        </Bounce>
        </>
    )
}

export default Jackets;