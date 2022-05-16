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