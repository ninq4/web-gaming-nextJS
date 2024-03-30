// 'use client'
import { LoginLink, LogoutLink, RegisterLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const menuLinks = [
  {
    label: 'Главная',
    url: '/',
  },
  {
    label: 'О нас',
    url: '/about',
  },
  {
    label: 'Акции',
    url: '/catalog',
  },
  {
    label: 'Контакты',
    url: '/contacts',
  },
];
const NavbarMobile = ({ containerStyle }: { containerStyle: string }) => {
  const { user } = useKindeBrowserClient()
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex flex-col gap-4">
        {menuLinks.map((item, pos) => {
          return (
            <li key={pos}>
              <Link
                className="text-white uppercase hover:text-accent transition-colors ease-linear"
                href={item.url}>
                {item.label}
              </Link>
            </li>
          );
        })}
        <ul className="flex items-center gap-4">
          {user ?

            <div className='flex items-center gap-4'>
              <LogoutLink className='uppercase text-white/50 hover:text-white transition-all'>Выйти</LogoutLink>
            </div>

            :
            <>
              <li className="inline-flex">
                <RegisterLink className='uppercase text-white/50 hover:text-white transition-all'>Регистрация</RegisterLink>
              </li>
              <li className="inline-flex">
                <LoginLink className='uppercase text-white/50 hover:text-white transition-all'>Войти</LoginLink>
              </li>
            </>
          }
        </ul>
      </menu>
    </nav>
  );
};

export default NavbarMobile;
