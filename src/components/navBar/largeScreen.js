import Link from 'next/link'

const LargeScreen = ({ fetchResponse, isConnected, setCurrentAccount, setIsConnected }) => {
    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });

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
        <nav className="border-b p-6 bg-black flex justify-between">
            <div className='flex items-center'>
                <img src={'./assets/LUVNFT-Logo.png'} style={{ width: '160px' }} />
                {/* <p className="text-4xl font-bold text-white">NFT Rental Marketplace</p> */}
            </div>
            <div className="flex mt-4">

                <Link href="/">
                    <a className="relative inline-flex items-center justify-center px-2 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">HOME 🏠</span>
                    </a>
                </Link>

                <Link href="/create-item">
                    <a className="relative inline-flex items-center justify-center px-2 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">CREATE 🔑</span>
                    </a>
                </Link>

                <Link href="/my-assets">
                    <a className="relative inline-flex items-center justify-center px-2 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">MY ⏳</span>
                    </a>
                </Link>

                <Link href="/my-rents">
                    <a className="relative inline-flex items-center justify-center px-2 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">RENTED 💸</span>
                    </a>
                </Link>

                <Link href="/claimable-assets">
                    <a className="relative inline-flex items-center justify-center px-2 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">CLAIM 👇</span>
                    </a>
                </Link>

                <Link href="/claimable-assets">
                    <a className="relative inline-flex items-center justify-center px-2 py-2 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[green] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#CC43F5] rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-2xl text-[#CC43F5] font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"> HOW TO 🤔</span>
                    </a>
                </Link>
                <div>
                    {isConnected ? (
                        <div className="text-white text-2xl font-bold bg-[#CC43F5] border-4 border-green-600 px-5 py-3 rounded-md mx-3">
                            🔌 CONNECTED
                        </div>
                    ) : (
                        <button
                            className="text-[#CC43F5]  bg-[#CC43F5] border-4 border-green-600 text-2xl font-bold bg-gray-100 px-5 py-3 rounded-md mx-2"
                            onClick={connectWallet}
                        >
                            🔌 CONNECT
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default LargeScreen;