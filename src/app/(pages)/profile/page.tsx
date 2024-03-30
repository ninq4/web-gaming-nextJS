'use client'
import CustomButton from '@/components/ui/CustomButton/CustomButton'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

export default function page() {
    const { user } = useKindeBrowserClient()
    return (
        <section className='w-full py-16'>
            <div className="container mx-auto flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    {user?.picture && <Image alt='Аватарка пользователя' className='object-cover rounded-full' width={100} height={100} src={user.picture} />}

                    <p className='text-2xl font-bold uppercase'>{user?.given_name} {user?.family_name}</p>
                    <p className='text-2xl font-bold text-white/70'>{user?.email}</p>

                    <CustomButton containerStyle='w-[170px] h-[50px]' text='Обратно' href={'/'}/>
                </div>

            </div>
        </section>
    )
}
