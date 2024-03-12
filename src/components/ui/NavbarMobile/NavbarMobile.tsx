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
    return (
        <nav className={`${containerStyle}`}>
          <menu className="w-full flex flex-col gap-4">
            {menuLinks.map((item, pos) =>{
                return <li key={pos}>
                    <Link className='text-white uppercase hover:text-accent transition-colors ease-linear' href={item.url}>{item.label}</Link>
                </li>
            })}
          </menu>
        </nav>
      );
};

export default NavbarMobile;
