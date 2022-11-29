import Image from "next/image";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';

import logo4113 from './../../public/images/4113.png';
import graffitiBoard from '../../public/images/Borads/graffiti.png';
import brucelee from '../../public/images/Borads/brucelee.png';
import chaplin from '../../public/images/Borads/chaplin.png';
import wood from '../../public/images/Borads/wood.png';
import zahak from '../../public/images/Borads/zahhak.png';
import rostam from '../../public/images/Borads/graffiti.png';
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


const Products = () => {


    return (
    <>
       <Flip left>
<div id='products' className='w-[15%] shadow-2xl rounded-[15px] p-5 mx-auto my-[10rem] md:my-[10rem] md:mt-[15rem] md:w-[50%]'>
  <Image src={logo4113} layout="responsive" objectFit='contain' />
  <p className='text-center text-[1.5rem]'>4113 Takhte SnowBoards</p>
</div>
       </Flip>
<div className='w-full flex flex-wrap p-[2rem] overflow-hidden'>

<Fade left>
<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={graffitiBoard} layout="responsive" objectFit='contain' />
</div>
</Fade>

<Fade right>
<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe1} layout="responsive" objectFit='contain' />
</div>
</Fade>

<Fade left>
<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe2} layout="responsive" objectFit='contain' />
</div>
</Fade>


<Fade right>
<div className='w-6/12 md:w-full shadow-2xl'>
<Image src={gorbe3} layout="responsive" objectFit='contain' />
</div>
</Fade>


<Fade left>
<div className='w-5/12 mx-auto md:w-full rounded-[15px] boxShadow my-[5rem] md:my-[3rem] md:mt-[5rem]'>
   <Image src={graffiti1} layout="responsive" className='rounded-[15px]' objectFit='contain' />
</div>
</Fade>


<Fade right>
<div className='w-5/12 mx-auto md:w-full rounded-[15px] boxShadow my-[5rem] md:my-[3rem]'>
   <Image src={chaplin} layout="responsive" className='rounded-[15px]' objectFit='contain' />
</div>
</Fade>


<Fade left>
<div className='w-5/12 mx-auto rounded-[15px] md:w-full boxShadow my-[5rem] md:my-[3rem]'>
<Image src={rostam} layout="responsive" className='rounded-[15px]' objectFit='contain' />
</div>
</Fade>


<Fade right>
<div className='w-5/12 mx-auto rounded-[15px] md:w-full boxShadow my-[5rem] md:my-[3rem]'>
<Image src={zahak} layout="responsive" className='rounded-[15px]' objectFit='contain' />
</div>
</Fade>


<Fade left>
<div className='w-5/12 mx-auto rounded-[15px] md:w-full boxShadow my-[5rem] md:my-[3rem]'>
<Image src={brucelee} layout="responsive" className='rounded-[15px]' objectFit='contain' />
</div>
</Fade>


<Fade right>
<div className='w-5/12 mx-auto rounded-[15px] md:w-full boxShadow my-[5rem] md:my-[3rem]'>
<Image src={wood} layout="responsive" className='rounded-[15px]' objectFit='contain' />
</div>
</Fade>




{/*         fixes         */}
{/* ===================== */}


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
</Flip>

</div>



</>
)

}

export default Products;