import chaplin from '../public/images/Borads/chaplin.png';
import wood from '../public/images/Borads/wood.png';
import brucelee from '../public/images/Borads/brucelee.png';
import zahak from '../public/images/Borads/zahhak.png';
import graffiti from '../public/images/Borads/graffitiPng.png';
import graffiti1 from '../public/images/Borads/graffiti1.png';
import gorbe1 from '../public/images/Borads/gorbe-1.png';
import Image from "next/image";
import { useThemeContext } from '../context/ThemeContext';
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';

const Borads = () => {

    const {theme} = useThemeContext();
    return (
        <>
        <div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} text-center text-[2rem] py-5 text-[gray] font-[Vibur] bg-gradient-to-r from-[#0e0e0e] to-[#202020]  mb-[2rem] flex flex-row justify-between`}>
       
        <Link href='./'><p className='pl-5 cursor-pointer'>&#8592;</p></Link> 
         <p className='pr-5'>BOARDS</p>
         </div>
         <Bounce right cascade>

        <div className="flex flex-row flex-wrap w-full justify-around font-[Vibur] mt-[3rem] overflow-hidden">

<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 bg-gradient-to-r from-[#cc4776] to-[#c45135] rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={graffiti} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={graffiti1} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={zahak} layout="responsive" objectFit='contain' />
</div>

<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={chaplin} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={wood} layout="responsive" objectFit='contain' />
</div>
<div className={`${theme === 'light' ? 'boxShadow' : 'boxShadowDark'} w-3/12 md:my-[2rem] md:w-10/12 rounded-[15px] shadow-2xl my-[5rem] m-5`}>
<Image className='rounded-[15px]' src={brucelee} layout="responsive" objectFit='contain' />
</div>
    
      </div>
        </Bounce>
        </>
    )
}

export default Borads;