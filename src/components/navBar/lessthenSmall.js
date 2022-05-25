import Link from 'next/link'
import { useState } from 'react'

const LessThenLarge = ({ isConnected, fetchResponse, setCurrentAccount, setIsConnected }) => {
    const [openToggle, setOpenToggle] = useState(false)
    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
console.log(accounts)
                if (accounts) {
                    setCurrentAccount(accounts[0]);
                    setIsConnected(true);
                }

                // fetchResponse(accounts[0]);
            } catch (err) {
                console.error(err);
            }
        } else {
            alert("Wallet not found");
        }
    };
    return (
        <nav className="border-b p-6 bg-black">
            <div className=' flex justify-between'>
                <div className='flex items-center'>
                    <img src={'./assets/LUVNFT-Logo.png'} style={{ width: '130px' }} />
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
                <div className="flex justify-center flex-col mt-4">
                    <Link href="/">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-purple bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">HOME 🏠 </span>
                        </a>
                    </Link>

                    <Link href="/create-item">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-purple bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"> CREATE 🔑</span>
                        </a>
                    </Link>

                    <Link href="/my-assets">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-purple bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">MY ⏳</span>
                        </a>
                    </Link>

                    <Link href="/my-rents">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-purple bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">RENTED 💸</span>
                        </a>
                    </Link>

                    <Link href="/claimable-assets">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-purple bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">CLAIM 👇</span>
                        </a>
                    </Link>
                    <Link href="/claimable-assets">
                        <a className="mt-3 relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-purple bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">HOW TO 🤔</span>
                        </a>
                    </Link>
                    <div className="relative inline-flex items-center justify-center mt-1 py-2 text-black font-medium tracking-tighter text-purple rounded-md group">
                        {isConnected ? (
                            <button
                                className="shadow-lg mt-2  w-100 h-100 transition-all duration-300 ease-in-out bg-[#CC43F5] border-4 border-green-600 text-white font-bold text-2xl px-5 py-3 rounded-md"
                            >
                            🔌 CONNECTED
                            </button>
                        ) : (
                            <button
                                className="shadow-lg mt-2 w-100 h-full transition-all duration-300 ease-in-out text-[#CC43F5] font-bold text-2xl bg-gray-100 border-4 border-green-600 px-5 py-3 rounded-md"
                                onClick={connectWallet}
                            >
                            🔌 CONNECT
                            </button>
                        )}
                    </div>
                </div>
            }

        </nav>
    )
}

export default LessThenLarge;