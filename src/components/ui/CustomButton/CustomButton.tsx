import Link from 'next/link';
import React from 'react';

const CustomButton = ({ containerStyle, text, href }: { containerStyle: string; text: string, href: string }) => {
  return (
    <Link
      className={`${containerStyle} group relative overflow-hidden bg-accent uppercase inline-flex items-center justify-center`}
      href={href}>
      <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-10 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32'></span>
      <span className='ease relative text-white transition duration-300 group-hover:text-white'>{text}</span>
    </Link>
  );
};

export default CustomButton;
