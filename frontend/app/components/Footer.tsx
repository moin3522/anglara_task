import React from 'react'
import Link from 'next/link'
import { BsTwitterX, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa'
import Newsletter from './(sections)/Newsletter'

const FOOTER_LINKS = [
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#' },
            { label: 'Features', href: '#' },
            { label: 'Works', href: '#' },
            { label: 'Career', href: '#' },
        ]
    },
    {
        title: 'Help',
        links: [
            { label: 'Customer Support', href: '#' },
            { label: 'Delivery Details', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
            { label: 'Privacy Policy', href: '#' },
        ]
    },
    {
        title: 'FAQ',
        links: [
            { label: 'Account', href: '#' },
            { label: 'Manage Deliveries', href: '#' },
            { label: 'Orders', href: '#' },
            { label: 'Payments', href: '#' },
        ]
    },
    {
        title: 'Resources',
        links: [
            { label: 'Free eBooks', href: '#' },
            { label: 'Development Tutorial', href: '#' },
            { label: 'How to - Blog', href: '#' },
            { label: 'Youtube Playlist', href: '#' },
        ]
    }
];

function Footer() {
  return (
      <footer className='bg-[#F0F0F0] overflow-visible! mt-35 main-container'>
          <div className=' main-section overflow-visible! padd-X w-full flex flex-col items-center justify-center'>
              <div className='w-full -mt-20 lg:-mt-30 mb-12 z-10'>
                  <Newsletter/>
              </div>
              
              <div className='w-full'>
                  <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16'>
                <div className='flex flex-col gap-6 lg:w-1/4'>
                    <h2 className='text-3xl font-black uppercase tracking-tighter'>Shop.co</h2>
                    <p className='text-gray-500 text-sm leading-relaxed'>
                        We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
                    </p>
                    <div className='flex gap-4 items-center'>
                        <Link href="#" className='w-8 h-8 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white text-black hover:border-black'>
                            <BsTwitterX size={14} />
                        </Link>
                        <Link href="#" className='w-8 h-8 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-black text-white hover:border-black'>
                            <BsFacebook size={14} />
                        </Link>
                        <Link href="#" className='w-8 h-8 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white text-black hover:border-black'>
                            <BsInstagram size={14} />
                        </Link>
                        <Link href="#" className='w-8 h-8 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-white text-black hover:border-black'>
                            <BsGithub size={14} />
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16 w-full lg:w-3/4'>
                    {FOOTER_LINKS.map((section, idx) => (
                        <div key={idx} className='flex flex-col gap-4'>
                            <h4 className='font-bold text-lg uppercase tracking-widest text-black mb-1'>{section.title}</h4>
                            {section.links.map((link, linkIdx) => (
                                <Link key={linkIdx} href={link.href} className='text-gray-500 hover:text-black transition-colors text-sm'>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row items-center justify-between border-t border-black/10 pt-8 w-full mt-4'>
                <p className='text-gray-500 text-sm'>Shop.co © 2000-2023, All Rights Reserved</p>
                <div className='flex items-center gap-3 text-3xl text-gray-700 bg-white p-2 px-4 rounded-xl shadow-xs'>
                    <FaCcVisa className='text-blue-800' />
                    <FaCcMastercard className='text-orange-600' />
                    <FaCcPaypal className='text-blue-500' />
                    <FaApplePay className='text-black' />
                    <FaGooglePay />
                </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer