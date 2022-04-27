import HomeLoader from "../components/loader/homeLoader";
import NFTCard from "../components/nftcard";

const HomeLayout = (props) => {
    const { nfts } = props
    return (
        nfts === null ?
            <HomeLoader /> :
            <div className="flex justify-center bg-black">
                <div className="px-4" style={{ maxWidth: '1600px' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                        {

                            nfts?.map((nft, i) => (
                                <NFTCard key={i} nft={nft} />
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default HomeLayout;