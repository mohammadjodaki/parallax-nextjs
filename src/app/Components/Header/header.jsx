"use client"  
import React, { useEffect, useState } from 'react';  
import throttle from 'lodash/throttle';  
import Image from 'next/image';  
import Sky from '../../Images/sky.webp';  
import Leaf from '../../Images/svgleaf.svg';  
import BackMenu from '../../Images/backmenu.svg';  
import Logo1 from '../../Images/logo1.svg';  
import Audio1 from '../../Images/audio1.svg';  
import Audio2 from '../../Images/audio2.svg';  
import Biglogo from '../../Images/biglogo.png';  
import Mountain from '../../Images/mountain.webp';  
import Forest from '../../Images/forest.webp';  
import Doll from '../../Images/doll.webp';  
import Grass from '../../Images/grass.svg';  
import Mountain2 from '../../Images/mountain2.svg';  
import Icontw from '../../Images/icontw.svg';  
import Icond from '../../Images/icond.svg';  
import Icont from '../../Images/icont.svg';  
import ShortTextIcon from '@mui/icons-material/ShortText';  
import Backmob from '../../Images/mob-menu-bg.5db3e6.png'
import Backtopmob from '../../Images/backtopmob.svg'
import Backbottmob1 from '../../Images/backbottmob1.svg'
import Backbottmob2 from '../../Images/backbottmob2.svg'
import Close from '../../Images/close.svg'

function Header() {  

const [isOpen , SetIsOpen] = useState(false)
const toggleMenu = () =>{
  SetIsOpen(!isOpen)  
}
useEffect(() => {  
  if (isOpen) {  
    document.body.style.overflow = 'hidden'
  } else {  
    document.body.style.overflow = 'auto'
  }  
  
  return () => {  
    document.body.style.overflow = 'auto'; 
  };  
}, [isOpen]); 


  const [scrollY, setScrollY] = useState(0);  
  const [isFixed, setIsFixed] = useState(false);  

  useEffect(() => {  
    const handleScroll = throttle(() => {  
      const currentScrollY = window.scrollY;  
      setScrollY(currentScrollY);  
      setIsFixed(currentScrollY > window.innerHeight) 
    }, 100);  
    
    window.addEventListener('scroll', handleScroll);  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []);  

  return (  
    <div className='relative w-full h-[75vh] lg:h-[150vh]'>  
      <Image className='absolute w-full h-full bg-cover' src={Sky} alt="Sky Background"/>  
      <Image className='absolute w-full' src={Leaf} alt="Leaf Background"/>  
      <Image   
        className={`w-full fixed top-0 transition-opacity duration-500 ${isFixed ? 'opacity-100' : 'opacity-0'}`}  
        src={BackMenu}  
        alt="Background Menu"  
      />  
      <div className={`fixed z-50 w-full h-20 flex items-center justify-between px-5 lg:px-10 ${isFixed ? 'bg-opacity-100 lg:pt-0' : 'bg-opacity-0 lg:pt-10'} transition-all duration-500 bg-black`}>  
        <div>  
          <Image className='hidden lg:flex w-28 h-16 cursor-pointer' src={Logo1} alt="Logo"/>  
          <ShortTextIcon className='flex text-white text-3xl cursor-pointer lg:hidden' onClick={toggleMenu}/>  
        </div>
        <div
        className={`w-full h-screen lg:hidden transform transition-transform duration-500 ease-in-out top-0 left-0 fixed z-50 bg-white ${
          isOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='w-full h-full absolute top-0 left-0 bg-[#33594F]'></div>
            <Image className='absolute top-3 left-2 z-50 cursor-pointer' src={Close} alt='close' onClick={toggleMenu}/>
            <Image className='w-full relative h-screen' src={Backmob} alt='back mob'/>
            <Image className='w-full absolute top-0' src={Backtopmob} alt='back top mob'/>
            <Image className='w-full absolute bottom-0' src={Backbottmob1} alt='back bott mob1'/>
            <Image className='w-full absolute bottom-0' src={Backbottmob2} alt='back bott mob2'/>
            <ul className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7 justify-center'>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Home</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Our Games</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Game features</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Chumbi</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Gallery</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Whitepaper</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Token</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">About</a></li>
              <li className='hover:text-white duration-500 text-3xl text-[#98A8A5]'><a href="">Lore</a></li>
            </ul>
            </div>  
        <ul className='hidden lg:flex gap-20 text-xl text-gray-300'>  
          <li className='hover:text-white duration-500'><a href="">Game info</a></li>  
          <li className='hover:text-white duration-500'><a href="">Token</a></li>  
          <li className='hover:text-white duration-500'><a href="">About</a></li>  
          <li className='hover:text-white duration-500'><a href="">Lore</a></li>  
        </ul>  
        <div className='flex gap-16'>  
          <div className='hidden lg:flex'>  
            <Image className='cursor-pointer w-11 h-11' src={Audio1} alt="Audio Icon 1"/>  
            {/* <Image className='absolute cursor-pointer w-11 h-11' src={Audio2} alt="Audio Icon 2"/>   */}
          </div>  
          <a className='hover:bg-white hover:text-black duration-500 text-white text-sm lg:text-xl rounded-3xl py-2 px-5 border border-white' href="">BUY CHMB</a>  
        </div>  
      </div>  
      <div className={`flex justify-center pt-32 lg:pt-52`} style={{ transform: `translateY(${scrollY * 0.7}px)`, transition: 'transform 0.3s' }}>  
        <Image className='absolute w-1/2 lg:w-2/5 h-32 lg:h-60 bg-cover' src={Biglogo} alt="Big Logo"/>  
        <div className='absolute pt-32 lg:pt-60 flex gap-10'>  
          <Image className='w-7 lg:w-11 h-7 lg:h-11' src={Icontw} alt="Icon 1"/>  
          <Image className='w-7 lg:w-11 h-7 lg:h-11' src={Icond} alt="Icon 2"/>  
          <Image className='w-7 lg:w-11 h-7 lg:h-11' src={Icont} alt="Icon 3"/>  
        </div>  
      </div>  
      <Image className={`absolute bottom-24 lg:bottom-52`} style={{ transform: `translateY(${scrollY * 0.5}px)`, transition: 'transform 0.2s' }} src={Mountain} alt="Mountain"/>  
      <Image className={`absolute bottom-20 lg:bottom-40`} style={{ transform: `translateY(${scrollY * 0.5}px)`, transition: 'transform 0.2s' }} src={Forest} alt="Forest"/>  
      <Image className={`absolute bottom-24 lg:bottom-52 right-0 w-1/3`} style={{ transform: `translateY(${scrollY * 0.5}px)`, transition: 'transform 0.2s' }} src={Doll} alt="Doll"/>  
      <Image className={`absolute bottom-10 lg:bottom-8 w-full`} style={{ transform: `translateY(-${scrollY * 0.1}px)`, transition: 'transform 0.1s' }} src={Grass} alt="Grass"/>  
      <Image className='absolute bottom-10 lg:bottom-0 w-full' src={Mountain2} alt="Mountain 2"/>  
    </div>  
  );  
}  

export default Header;