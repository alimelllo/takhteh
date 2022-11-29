import Image from 'next/image';
import takhtelogo from '../../public/images/takhtelogo.png';
import shop from '../../public/images/shop.jpg';
import logo4113 from './../../public/images/4113.png';
import union from './../../public/images/icons/union.png';
import phone from './../../public/images//icons/phone.png';
import location from './../../public/images//icons/location.png';
import instagram from './../../public/images//icons/instagram.png';
import whatsapp from './../../public/images//icons/whatsapp.png';
import gmail from './../../public/images//icons/gmail.png';
import twitter from './../../public/images//icons/twitter.png';

const Shop = () => {
    return (
        <>

  <div id='shop' className='flex flex-row justify-between mt-[10rem] md:flex-col'>
<p className='text-center pl-[2rem] md:pl-0 text-[2.5rem] font-[600] text-[#565656]'>Takhteh Shop</p>

<div className='flex flex-row md:mx-auto md:mt-5'>
  
  <div className='bg-[#e9e9e9] w-[4rem] mx-5  rounded-[10px] shadow-2xl'>
  <Image src={union} layout="responsive" objectFit='cover' />
</div>
<div className='bg-[#e9e9e9] w-[4rem] mx-5 p-2 rounded-[10px] shadow-2xl'>
  <Image src={takhtelogo} layout="responsive" objectFit='cover' />
</div>
<div className='bg-[#e9e9e9] w-[4rem] mx-5 p-2 rounded-[10px] shadow-2xl'>
  <Image src={logo4113} layout="responsive" objectFit='cover' />
 </div>

</div>

  </div>



<div className='flex flex-row justify-end mt-[5rem] md:flex-col-reverse '>

<div className='pl-[2rem] text-[1.5rem] font-[600] text-[#9f9f9f] mt-[5rem] w-8/12 md:w-full'>
  <p>You can visit and buy your favorite accessories in tehran (marzdaran) from shop. </p>
  <div className='flex flex-row my-[1rem] mt-[3rem]'><div className='w-[3rem]'><Image src={phone} layout="responsive" objectFit='cover' /></div><p className='pt-1 pl-5'>+989120902035</p></div>
  <div className='flex flex-row my-[1rem] md:justify-center'><div className='w-[3rem] md:w-[10rem]'><Image src={location} layout="responsive" objectFit='cover' /></div><p className='pt-1 pl-5'>Tehran Marzadarn , alvand street , alvand mall , second floor pelaque 35.</p></div>
</div>

<div className='w-4/12 md:w-full'>
  <div className=' w-full rounded-l-[20px] md:rounded-none boxShadow opacity-[0.8] cursor-pointer hover:opacity-[1] transition-all duration-300'>
   <Image src={shop} layout="responsive" className='rounded-l-[20px] md:rounded-none' objectFit='cover' />
  </div>
</div>

</div>
        </>
    )
}

export default Shop;