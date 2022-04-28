import homeloaderGif from '../../assets/goo-loader-unscreen.gif'

const HomeLoader = () => {
    return (
        <div className='container'>
            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">Loading ... </h1>
                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <img style={{ width: '300px', objectFit: 'contain' }} alt="home loader " src={homeloaderGif?.src} />
                </div>
            </div>
        </div>
    )
}


export default HomeLoader;