
const Banner = () => {
    const bannerStyle = {
        background: `url('https://i.ibb.co/LtcmGDv/360-F-308445331-ZZinys-Rse5x-OZac-NTno-Qq-G24-TAy7ft-Z5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '90vh',
    };
    return (
        <div style={bannerStyle} > 
         <div className="pt-10 pl-10 text-white">
            <span className="text-7xl">Find Your</span> <br />
            <span className="text-[140px]">
                Heartiest <br /> dream car
            </span>
         </div>
        </div>
    );
};

export default Banner;