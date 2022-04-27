import Link from 'next/link'

const LargeScreen = () => {

    return (
        <nav className="border-b p-6 bg-black flex justify-between">
            <div className='flex items-center'>
                <img src={'./rocket.png'} style={{width:'40px'}} />
                {/* <p className="text-4xl font-bold text-white">NFT Rental Marketplace</p> */}
            </div>
            <div className="flex mt-4">

                <Link href="/">
                    <a className="relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Home</span>
                    </a>
                </Link>

                <Link href="/create-item">
                    <a className="relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Create NFTs</span>
                    </a>
                </Link>

                <Link href="/my-assets">
                    <a className="relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">My NFTs</span>
                    </a>
                </Link>

                <Link href="/my-rents">
                    <a className="relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Rented NFTs</span>
                    </a>
                </Link>

                <Link href="/claimable-assets">
                    <a className="relative inline-flex items-center justify-center px-3 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Claimable NFTs</span>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default LargeScreen;