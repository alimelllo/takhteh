import Image from "next/image";
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import jacket from '../../public/images/jacket.jpg';
import boot from '../../public/images/boot.png';
import logo4113 from './../../public/images/4113.png';
import graffiti1 from '../../public/images/Borads/graffiti1.png';
import Link from "next/link";
import { useThemeContext } from "../../context/ThemeContext";

const Products = ( props ) => {
 const { theme } = useThemeContext();

    return (
    <>
       <Flip left>
<div id='products'  className={`w-[15%] shadow-2xl ${theme === 'light' ? 'shadow-2xl' : 'boxShadowDark text-[#c5c5c5]'}  rounded-[15px] p-5 mx-auto my-[10rem] mt-[25rem] md:w-[50%]`}>
  <Image src={logo4113} layout="responsive" objectFit='contain' />
  <p className='text-center text-[1.5rem]'>4113 Takhte SnowBoards</p>
</div>
       </Flip>
<Bounce right cascade>
<div className="flex flex-row flex-wrap w-full justify-around font-[Vibur] overflow-hidden">

<Link href='./Boards'>
<div className={`w-3/12 mt-[5rem] cursor-pointer m-1 md:w-10/12 bg-gradient-to-r from-[#9433ee] to-[#489691] ${ theme === 'light' ? 'boxShadow' : 'boxShadowDark'} rounded-[10px]`}>
       <p className={`text-[2rem] relative py-3 ${ theme === 'light' ? 'shadow-2xl' : 'boxShadowDark' }  z-10 text-[#ffffff] text-center`}>BOARDS</p>
       <div className=" z-10"><Image className="rounded-b-[10px]" layout="responsive" objectFit="cover" src={graffiti1}/></div>
</div>
</Link>
<Link href='./Fixes'>
<div className={`w-3/12 mt-[5rem] cursor-pointer m-1 md:w-10/12 bg-gradient-to-r from-[#cc4776] to-[#c45135] ${ theme === 'light' ? 'boxShadow' : 'boxShadowDark'} rounded-[10px]`}>
       <p className={`text-[2rem] relative py-3 ${ theme === 'light' ? 'shadow-2xl' : 'boxShadowDark' } rounded-t-[10px] bg-gradient-to-r from-[#ee105e] to-[#df3f3f]  z-10 text-[#ffffff] text-center`}>FIXES</p>
       <div className=" z-10"><Image className="rounded-b-[10px]" layout="responsive" objectFit="cover" src={boot}/></div>
</div>
</Link>

<Link href='./Jackets'>
<div className={`w-3/12 mt-[5rem] cursor-pointer m-1 md:w-10/12 bg-gradient-to-r from-[#464646e6] to-[#6d6d6de6]  ${ theme === 'light' ? 'boxShadow' : 'boxShadowDark'} rounded-[10px]`}>
       <p className={`text-[2rem] relative py-3 ${ theme === 'light' ? 'shadow-2xl' : 'boxShadowDark' }  z-10 text-[#ffffff] text-center`}>JACKETS</p>
       <div className=" z-10"><Image className="rounded-b-[10px]" layout="responsive" objectFit="cover" src={jacket}/></div>
</div>
</Link>


</div>
</Bounce>

</>
)

}

export default Products;