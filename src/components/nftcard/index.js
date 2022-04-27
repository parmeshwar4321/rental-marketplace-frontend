
const NFTCard = ({ nft }) => {
    return (
        <div className="border shadow-lg rounded-xl overflow-hidden">
            <img src={nft.image} />
            <div className="p-4">
                <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                </div>
            </div>
            <div className="p-4 bg-black">
                <p className="text-2xl mb-4 font-bold text-white">Price: {nft.price} Matic</p>
                <p className="text-2xl mb-4 font-bold text-white">Duration: {nft.time} Minutes</p>
                <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => rentNft(nft)}>Rent</button>
            </div>
        </div>
    )
}

export default NFTCard;