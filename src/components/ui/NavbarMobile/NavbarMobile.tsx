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
          <li className="inline-flex">
            <Link
              className="uppercase text-white/50 hover:text-white transition-colors duration-300"
              href="">
              Войти
            </Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default NavbarMobile;
