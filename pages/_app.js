/* pages/_app.js */
import '../styles/globals.css'
import LargeScreen from '../src/components/navBar/largeScreen'
import LessThenLarge from '../src/components/navBar/lessthenSmall'
import { useEffect, useState } from 'react'
import axios from "axios";

function Marketplace({ Component, pageProps }) {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    handleReload();
  }, []);

  const handleAccountsChanged = (a) => {
    if (!a.length) {
      setIsConnected(false)
      alert('wallet disconnected!')
    }
    setCurrentAccount(a[0]);
    console.log("accounts changed")
  };

  const handleReload = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts[0] != undefined) {
        setCurrentAccount(accounts[0]);
        setIsConnected(true);
      }
    }
  };
  const fetchResponse = async (account) => {
    const response = await axios.post(
      "https://api-eu1.tatum.io/v3/nft/deploy",
      {
        name: "MMC",
        chain: "CELO",
        feeCurrency: "CELO",
        symbol: "MMC",
        signatureId: "b7ad58f7-d826-4db5-8a52-4f492935a7b4",
      },
      {
        headers: {
          "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100",
        },
      }
    );

    const { signatureId } = response.data;

    const { data } = await axios.get(
      "https://api-eu1.tatum.io/v3/kms/" + signatureId,
      {
        headers: {
          "x-api-key": "e4777a2e-a801-4bd9-a105-97ea95c1f13b_100",
        },
      }
    );

    const txConfig = JSON.parse(data.serializedTransaction);
    txConfig.from = account;
    txConfig.gasPrice = txConfig.gasPrice
      ? parseInt(txConfig.gasPrice).toString(16)
      : undefined;
    console.log(txConfig);
    console.log(
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [txConfig],
      })
    );

  };

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
        <LargeScreen fetchResponse={fetchResponse} isConnected={isConnected} setCurrentAccount={setCurrentAccount} setIsConnected={setIsConnected} />
      </div>
      <div className='lessThenlargeScreen-nav'>
        <LessThenLarge fetchResponse={fetchResponse} isConnected={isConnected} setCurrentAccount={setCurrentAccount} setIsConnected={setIsConnected} />
      </div>
      {/* {window !== undefined && window?.innerWidth > 1024 ? <LargeScreen /> : <LessThenLarge />} */}


      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace