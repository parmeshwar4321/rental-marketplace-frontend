import Link from 'next/link'
import { useState } from 'react'

const LessThenLarge = () => {
    const [openToggle, setOpenToggle] = useState(false)

    return (
        <nav className="border-b p-6 bg-black">
            <div className=' flex justify-between'>
                <div className='flex items-center'>
                    <img src={'./LUV -NFT-Logo.png'} style={{ width: '160px' }} />
                    {/* <p className="text-4xl font-bold text-white">NFT Rental Marketplace</p> */}
                </div>
                <button onClick={() => { setOpenToggle(!openToggle) }}>
                    {
                        openToggle ? <svg xmlns="http://www.w3.org/2000/svg" height="48" fill='#CC43F5' width="48"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#CC43F5' height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" /></svg>
                    }
                </button>
            </div>
            {
                openToggle &&
                <div className="flex flex-col mt-4">
                    <Link href="/">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#CC43F5] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">HOME 🏠 </span>
                        </a>
                    </Link>

                    <Link href="/create-item">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#CC43F5] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"> CREATE 🔑</span>
                        </a>
                    </Link>

                    <Link href="/my-assets">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#CC43F5] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">MY ⏳</span>
                        </a>
                    </Link>

                    <Link href="/my-rents">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#CC43F5] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">RENTED 💸</span>
                        </a>
                    </Link>

                    <Link href="/claimable-assets">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#CC43F5] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">CLAIM 👇</span>
                        </a>
                    </Link>
                    <Link href="/claimable-assets">
                    <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#CC43F5] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">HOW TO 🤔</span>
                    </a>
                </Link>

                </div>
            }

        </nav>
    )
}

export default LessThenLarge;