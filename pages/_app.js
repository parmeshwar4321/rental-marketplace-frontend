/* pages/_app.js */
import '../styles/globals.css'
import LargeScreen from '../src/components/navBar/largeScreen'
import LessThenLarge from '../src/components/navBar/lessthenSmall'

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
          <title>NFT Rental Marketplace</title>
          <meta name="title" content="NFT Rental Marketplace" />
          <meta name="description" content="Rent NFTs from the Marketplace without any collateral" />


          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nft-rental-marketplace.netlify.app/" />
          <meta property="og:title" content="NFT Rental Marketplace" />
          <meta property="og:description" content="Collateral Free NFT Rental Marketplace!" />
          <meta property="og:image" content="https://user-images.githubusercontent.com/30176438/154859304-fdff81f6-490b-4674-b585-d115e89c0996.JPG" />


          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://nft-rental-marketplace.netlify.app/" />
          <meta property="twitter:title" content="NFT Rental Marketplace" />
          <meta property="twitter:description" content="Collateral Free NFT Rental Marketplace!" />
          <meta property="twitter:image"
            content="https://user-images.githubusercontent.com/30176438/154859304-fdff81f6-490b-4674-b585-d115e89c0996.JPG" />
        </head>
      </div>



      {/* <title>NFT Rental Marketplace</title> */}
      <div className='largeScreen-nav'>
        <LargeScreen />
      </div>
      <div className='lessThenlargeScreen-nav'>
        <LessThenLarge />
      </div>
      {/* {window !== undefined && window?.innerWidth > 1024 ? <LargeScreen /> : <LessThenLarge />} */}


      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace