import Image from 'next/image';
import team from '../../public/images/team.jpg';
import takhtelogo from '../../public/images/takhtelogo.png';
import Fade from 'react-reveal/Fade';


const Team = ( props ) => {

    return (

<div id='team' className={`mt-[10rem] ${ props.theme === 'dark' ? 'boxShadowDark' : 'boxShadow'} relative my-[5rem] h-[20rem] opacity-[0.7] hover:h-[30rem] hover:opacity-[1] transition-all duration-500`}>
    <Image src={team} layout="fill" objectFit='cover' />
     <p className='text-center  left-[35%] md:left-[30%] top-[20%] absolute text-[3rem] font-[600] tracking-[1px] pt-3 font-[Vibur] text-[#272727]'>Takhteh Team</p>
      <div className='w-[10%] md:w-[20%] md:top-[20%] md:right-[90%] md:left-[5%] absolute right-[60%]  left-[20%] top-[10%] ml-5 '>
    <Image src={takhtelogo} layout="responsive" objectFit='scale-down' />
   </div>
</div>

    )
}
export default Team;