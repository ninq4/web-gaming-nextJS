"use client";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import useSingleArticle from '@/Hooks/useSingleArticle';
import Image from 'next/image';
import React from 'react'


const SingleArticle = ({ params }: { params: number }) => {
    const getSingleArticle = useSingleArticle(params);
    return (
        <section className="w-full px-16">
            <div className="container mx-auto">
                {getSingleArticle?.attributes?.image?.data?.attributes?.url.length ? (
                    <div className="w-full h-[520px] md:h-[520px] rounded-xl overflow-hidden mt-4">
                        <Image
                            src={
                                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                                (getSingleArticle?.attributes?.image?.data?.attributes?.url ?? '')
                            }
                            alt=""
                            width={1200}
                            height={520}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ) : (
                    <div className="w-full h-[520px] md:h-[520px] rounded-xl animate-pulse bg-zinc-500" />

                )}


                {getSingleArticle.attributes?.name.length ? (
                    <h2 className="text-left text-white text-5xl mt-10 uppercase">
                        {getSingleArticle.attributes?.name}
                    </h2>
                ) : (
                    <div className="mt-10 w-full h-[50px] rounded-xl animate-pulse bg-zinc-500 " />
                )}



                {getSingleArticle.attributes?.long_text.length ? (
                    // <BlocksRenderer content={getSingleArticle.attributes?.long_text}/>
                    <p className="text-zinc-500 md:text-xl text-base text-left mt-7 ">
                        {getSingleArticle.attributes?.long_text}
                    </p>
                ) : (
                    <div className="mt-7 flex flex-col gap-4">
                        {[1, 2, 3, 4, 5, 6, 7].map(index => (
                            <div key={index} className="h-[20px] w-full rounded-xl animate-pulse bg-zinc-500 " />
                        ))}
                    </div>
                )}


            </div>
        </section>
    );
}

export default SingleArticle