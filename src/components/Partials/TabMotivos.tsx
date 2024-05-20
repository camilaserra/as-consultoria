/* eslint-disable @next/next/no-img-element */
'use client'
import { client } from '@/services/prismicClient';
import React, { useState } from 'react';
import useSWR from 'swr'
import ContentRichText from '../Prismic/ContentRichText';
import { Button } from '../Buttons/Button';
import Icon from '../Adapters/Icon';
import { Fade } from "react-awesome-reveal";
import { PorqueContratarDocument } from '../../../prismicio-types';



export default function TabProduct({why}: {why: PorqueContratarDocument}) {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
 
  const { data: contact } = useSWR('getPorqueContratar', () =>
    client.getSingle('contatos_e_redes_sociais')
  )
  
  return (
    <>
        <div className=''>
            <div className="grid grid-cols-12 py-4 md:px-0 gap-2"> 
                <button
                className={`flex items-center justify-center p-4 col-span-12 md:col-span-6 lg:col-span-3 hover-item hover:bg-brand-purple-300 group rounded-t-md ${activeTab === 1 ? 'bg-brand-purple-200' : ' bg-brand-purple-100'}`}
                onClick={() => handleTabChange(1)}
                >
                <p className={`text-lg font-semibold md:text-base text-center group-hover:text-white ${activeTab === 1 ? 'font-bold text-white' : ' text-brand-purple-400'}`}>{why?.data.titulo_item_um}</p>
                </button>

                <button
                className={`flex items-center justify-center p-4 col-span-12 md:col-span-6 lg:col-span-3 hover-item hover:bg-brand-purple-300 group rounded-t-md ${activeTab === 2 ? 'bg-brand-purple-200' : 'bg-brand-purple-100'}`}
                onClick={() => handleTabChange(2)}
                >
                <p className={`text-lg font-semibold md:text-base text-center group-hover:text-white ${activeTab === 2 ? 'font-bold text-white' : 'text-brand-purple-400'}`}>{why?.data.titulo_item_dois}</p>
                </button>

                <button
                className={`flex items-center justify-center p-4 col-span-12 md:col-span-6 lg:col-span-3 hover-item hover:bg-brand-purple-300 group rounded-t-md ${activeTab === 3 ? 'bg-brand-purple-200' : 'bg-brand-purple-100'}`}
                onClick={() => handleTabChange(3)}
                >
                <p className={`text-lg font-semibold md:text-base text-center group-hover:text-white ${activeTab === 3 ? 'font-bold text-white' : 'text-brand-purple-400'}`}>{why?.data.titulo_item_tres}</p>
                </button>

                <button
                className={`flex items-center justify-center p-4 col-span-12 md:col-span-6 lg:col-span-3 hover-item hover:bg-brand-purple-300 group rounded-t-md ${activeTab === 4 ? 'bg-brand-purple-200' : 'bg-brand-purple-100'}`}
                onClick={() => handleTabChange(4)}
                >
                <p className={`text-lg font-semibold md:text-base text-center group-hover:text-white ${activeTab === 4 ? 'font-bold text-white' : 'text-brand-purple-400'}`}>{why?.data.titulo_item_quatro}</p>
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 1 && (
                    <div className='grid grid-cols-12 gap-2'>
                       <div className='col-span-12 md:col-span-5 relative'>
                            <Fade duration={3000} className='w-full object-cover h-[300px]' >       
                                <img src={why?.data.imagem_item_um.url as string} alt={why?.data.imagem_item_um.alt as string} className='h-[300px] w-full object-cover border-r border-white'/>
                            </Fade>
                            <span className="absolute bottom-0 h-[300px] w-full md:bg-gradient-to-l from-white to-white/20"></span>
                       </div>
                       <div className='col-span-12 md:col-span-7 md:pr-10 flex items-center'>
                            <ContentRichText data={why?.data.descricao_item_um} />
                       </div>
                       <div className='pt-10 flex justify-center z-50 relative col-span-12'>
                            <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                                <Button variant='primaryPurple'>
                                    <Icon icon="token:chat" className='text-4xl animate-pulse' />
                                    Fale Conosco
                                </Button>
                            </a>
                        </div>
                    </div>
                )}

                {activeTab === 2 && (
                    <div className='grid grid-cols-12 gap-2'>
                        <div className=' col-span-12 md:col-span-5 relative'>
                            <Fade duration={3000}  className='w-full object-cover h-[300px]' >       
                                <img src={why?.data.imagem_item_dois.url as string} alt={why?.data.imagem_item_dois.alt as string} className='h-[300px] object-cover w-full border-r border-white' />
                            </Fade>   
                            <span className="absolute bottom-0 h-[300px] w-full bg-gradient-to-l from-white to-white/5"></span>                 
                        </div>
                        <div className=' col-span-12 md:col-span-7 md:pr-10 flex items-center'>
                            <ContentRichText data={why?.data.descricao_item_dois} />
                        </div>
                        <div className='pt-10 flex justify-center z-50 relative col-span-12'>
                            <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                                <Button variant='primaryPurple'>
                                    <Icon icon="token:chat" className='text-4xl animate-pulse' />
                                    Fale Conosco
                                </Button>
                            </a>
                        </div>
                    </div>
                )}

                {activeTab === 3 && (
                    <div className='grid grid-cols-12 gap-2'>
                        <div className=' col-span-12 md:col-span-5 relative'>
                            <Fade duration={3000} className='w-full object-cover bg-pink-600 h-[300px]'>       
                                <img src={why?.data.imagem_item_tres.url as string} alt={why?.data.imagem_item_tres.alt as string} className='h-[300px] object-cover w-full border-r border-white' />
                            </Fade>   
                            <span className="absolute bottom-0 h-[300px] w-full bg-gradient-to-l from-white to-white/20"></span>
                        </div>
                        <div className=' col-span-12 md:col-span-7 md:pr-10 flex items-center'>
                            <ContentRichText data={why?.data.descricao_item_tres} />
                        </div>
                        <div className='pt-10 flex justify-center z-50 relative col-span-12'>
                            <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                                <Button variant='primaryPurple'>
                                    <Icon icon="token:chat" className='text-4xl animate-pulse' />
                                    Fale Conosco
                                </Button>
                            </a>
                        </div>
                    </div>
                )}

                {activeTab === 4 && (
                    <div className='grid grid-cols-12 gap-2'>
                        <div className=' col-span-12 md:col-span-5 relative'>
                            <Fade duration={3000} className='w-full object-cover bg-pink-600 h-[300px]'>       
                                <img src={why?.data.imagem_item_quatro.url as string} alt={why?.data.imagem_item_quatro.alt as string} className='h-[300px] object-cover w-full border-r border-white' />
                            </Fade>   
                            <span className="absolute bottom-0 h-[300px] w-full bg-gradient-to-l from-white to-white/5"></span>                 
                        </div>
                        <div className=' col-span-12 md:col-span-7 md:pr-10 flex items-center'>
                            <ContentRichText data={why?.data.descricao_item_quatro} />
                        </div>
                        <div className='pt-10 flex justify-center z-50 relative col-span-12'>
                            <a href={`https://api.whatsapp.com/send/?phone=55${contact?.data.whatsapp_link}`} target="_blank" rel="noreferrer">                            
                                <Button variant='primaryPurple'>
                                    <Icon icon="token:chat" className='text-4xl animate-pulse' />
                                    Fale Conosco
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
  );
}