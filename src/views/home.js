
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
    nftaddress, nftmarketaddress
} from '../../config'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/RentalMarket.sol/RentalMarket.json'
import HomeLayout from '../layout/home'

export default function Home() {
    const [nfts, setNfts] = useState(null)
    // const [loadingState, setLoadingState] = useState('not-loaded')
    useEffect(() => {
        loadNFTs()
    }, [])
    
    const checkNetwork = async () => {
        const { ethereum } = window;
        let chainId = await ethereum.request({ method: 'eth_chainId' })
        if (chainId !== '0x13881') {
            // window.alert("Please switch to the Matic Test Network!");
            // throw new Error("Please switch to the Matic Test Network");

            window.alert("This Dapp works on Matic Test Network Only. Please Approve to switch to Mumbai");
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x13881' }],
            })
        }

    }

    async function loadNFTs() {
        /* create a generic provider and query for unsold market items */
        // const provider = new ethers.providers.JsonRpcProvider()
        const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/v1/a1bc762a38f412f3af976f545cd134df77c63626')
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
        const data = await marketContract.fetchMarketItems();
        // console.log("Returned Value From Contract",await marketContract.chummaFunction());

        /*
        *  map over items returned from smart contract and format 
        *  them as well as fetch their token metadata
        */
        const items = await Promise.all(data.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                itemId: i.itemId.toNumber(),
                time: i.expiresAt.toNumber() / 60,
                seller: i.seller,
                renter: i.renter,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
            }
            return item
        }))
        setNfts(items)
        // setLoadingState('loaded')
    }
    async function rentNft(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        await checkNetwork();
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)


        /* user will be prompted to pay the asking proces to complete the transaction */
        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
        console.log("Price Of NFT", price.toString());
        console.log("Item ID", nft.itemId);
        console.log("Rent Button Pressed!")
        const transaction = await contract.rentMarketItem(nft.itemId, {
            value: price
        })
        await transaction.wait()
        loadNFTs()
    }

    return (
        <HomeLayout nfts={nfts} />
    )
}