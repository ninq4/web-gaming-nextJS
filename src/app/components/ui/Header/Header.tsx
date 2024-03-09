import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FaBars } from 'react-icons/fa6';


const Header = () => {
  return (
    <header className="w-full h-[70px] bg-zinc-950 flex items-center border-b border-zinc-800">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <Link href={'/'} className="w-[200px] h-[50px] ">
            {/* <Image width={200} height={50} src="/assets/img/logo.svg" alt="Логотып" className='w-full h-full object-cover'/> */}
            <p className="text-white text-1xl">LOGO</p>
          </Link>
          <Navbar containerStyle="hidden md:flex" />

            <button className='text-2xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
                <FaBars/>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
