'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import Navbar from '../Navbar/Navbar';

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';


const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useKindeBrowserClient()

  return (
    <header className="w-full h-[70px] bg-zinc-950  border-b border-zinc-800">
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href={'/'} className="w-[300px] h-[50px] ">
            <Image
              width={200}
              height={30}
              src="/assets/img/logo.svg"
              alt="Логотып"
              className="object-cover"
            />
          </Link>
          <NavbarMobile
            containerStyle={`${openNav
              ? 'max-h-max border-b border-zinc-800 p-[15px]'
              : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0'
              } fixed z-50 w-full top-[71px] left-0 right-0 transition-all duration-300 bg-zinc-900 md:hidden`}
          />
          <Navbar containerStyle="hidden md:flex" />
          <div className="flex gap-8">
            <ul className="flex items-center gap-4">
              {user ?

                <div className='flex items-center gap-4'>
                  {user.picture ? <Link href={'/profile'}><Image src={user.picture} alt={'Изображение профиля'} width={50} height={50} className='w-[50px] h-[50px] rounded-full object-cover' /> </Link> : (<Link href={'/profile'}><p className='text-white/50 uppercase'>{user.family_name}</p></Link>)}
                  <LogoutLink className='hidden md:block uppercase text-white/50 hover:text-white transition-all'>Выйти</LogoutLink>
                </div>

                :
                <>
                  <li className="md:inline-flex hidden ">
                    <RegisterLink className='uppercase text-white/50 hover:text-white transition-all'>Регистрация</RegisterLink>
                  </li>
                  <li className="md:inline-flex hidden">
                    <LoginLink className='uppercase text-white/50 hover:text-white transition-all'>Войти</LoginLink>
                  </li>
                </>
              }
            </ul>
            <button
              onClick={() => setOpenNav(!openNav)}
              className="text-2xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
