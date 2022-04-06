/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
    
  return (
    
    <div>

      <div>
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="https://drive.google.com/file/d/1fVD8ZsSK_CYaAjQiASItvznMMaoxeVho/view?usp=sharing" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="https://drive.google.com/file/d/1fVD8ZsSK_CYaAjQiASItvznMMaoxeVho/view?usp=sharing" />
          
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>RENT 🤍NFT </title>
          <meta name="title" content="RENT LUV NFT MARKETPLACE" />
          <meta name="description" content="Rent services, products and homes with NFT technology" />

          
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rent.luvnft.com/" />
          <meta property="og:title" content="RENT LUV NFT MARKETPLACE" />
          <meta property="og:description" content="Rent services, products and homes with NFT technology" />
          <meta property="og:image" content="https://market.luvnft.com/wp-content/uploads/2022/04/NFT-RENTAL-MARKETPLACE.jpg" />

          
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://rent.luvnft.com/" />
          <meta property="twitter:title" content="RENT LUV NFT MARKETPLACE" />
          <meta property="twitter:description" content="Rent services, products and homes with NFT technology" />
          <meta property="twitter:image"
            content="https://market.luvnft.com/wp-content/uploads/2022/04/NFT-RENTAL-MARKETPLACE.jpg" />
        </head>
      </div>
      
      
      {/* <title>NFT Rental Marketplace</title> */}
      
      <nav className="border-b p-6 bg-black">
        <p className="text-4xl font-bold text-white">RENT 🤍NFT</p>
        <div className="flex mt-4">
          
          <Link href="/">
            <a className="relative inline-flex items-center justify-center px-6 py-3 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-base text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">HOME</span>
            </a>
          </Link>
          
          <Link href="/create-item">
            <a className="relative inline-flex items-center justify-center px-6 py-3 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-base text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">CREATE</span>
            </a>
          </Link>
          


          <Link href="/my-assets">
            <a className="relative inline-flex items-center justify-center px-6 py-3 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-base text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">OWN</span>
            </a>
          </Link>

          <Link href="/my-rents">
            <a className="relative inline-flex items-center justify-center px-6 py-3 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-base text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">RENTING</span>
            </a>
          </Link>

          <Link href="/claimable-assets">
            <a className="relative inline-flex items-center justify-center px-6 py-3 text-black font-medium tracking-tighter text-white bg-gray-800 mr-6 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-base text-pink-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">RENTABLE</span>
            </a>
          </Link>



        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace